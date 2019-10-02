import { useCallback, useMemo } from 'react';
import { useExpanded } from 'react-table';
import { forEach, values } from 'lodash-es';

import { ExpandSetter, TableAddOnReturn } from '../relatable.types';
import { ExpandedRow, IRowProps } from '../components/renderers';

export interface IWithExpandedOptions {
  onExpandedChange?: ExpandSetter;
  expandedRowComponent?: React.FC<IRowProps>;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useExpanded
  expanded?: string[];
}

export default function withExpanded(options: IWithExpandedOptions = {}): TableAddOnReturn {
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
