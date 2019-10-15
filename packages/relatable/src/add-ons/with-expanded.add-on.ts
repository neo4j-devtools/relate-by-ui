import { useCallback, useMemo } from 'react';
import { IdType, useExpanded, UseExpandedOptions } from 'react-table';
import { forEach, values } from 'lodash-es';

import { ExpandSetter, TableAddOnReturn } from '../relatable.types';
import { ExpandedRow, IRowProps } from '../components/renderers';
import arrayHasItems from '../utils/array-has-items';

export interface IWithExpandedOptions<Row extends object = any> extends UseExpandedOptions<Row> {
  onExpandedChange?: ExpandSetter;
  expandedRowComponent?: React.FC<IRowProps>;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useExpanded
  expanded?: IdType<Row>[];
}

export default function withExpanded<Row extends object = any>(options: IWithExpandedOptions<Row> = {}): TableAddOnReturn {
  const { expanded, expandedRowComponent = ExpandedRow, onExpandedChange, ...tableParams } = options;
  const stateParams = expanded
    ? { expanded }
    : {};
  const onCustomExpandedChange: ExpandSetter = useCallback((rows, expand) => {
    if (onExpandedChange) {
      onExpandedChange(rows, expand);
      return;
    }

    forEach(rows, (row) => row.toggleExpanded(expand));
  }, [onExpandedChange]);

  return [
    null,
    ({ subRows }) => arrayHasItems(subRows),
    () => useMemo(() => ({
      ...tableParams,
      expandSubRows: false,
      CustomExpandedRowComponent: expandedRowComponent,
      onCustomExpandedChange,
    }), [expandedRowComponent, onCustomExpandedChange, ...values(tableParams)]),
    () => useMemo(() => stateParams, [expanded]),
    useExpanded,
  ];
}
