import { useMemo } from 'react';
import { useExpanded } from 'react-table';
import { values } from 'lodash-es';

import { ExpandedSetter, TableAddOnReturn } from '../relatable.types';
import { ExpandedRow, IRowProps } from '../components/renderers';

export interface IWithExpandedOptions {
  onExpandedChange?: ExpandedSetter;
  expandedRowComponent?: React.FC<IRowProps>;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useExpanded
  expanded?: string[];
}

export default function withExpanded(options: IWithExpandedOptions = {}): TableAddOnReturn {
  const { expanded, expandedRowComponent = ExpandedRow, onExpandedChange, ...tableParams } = options;
  const stateParams = expanded
    ? { expanded }
    : {};

  return [
    null,
    () => useMemo(() => ({
      ...tableParams,
      CustomExpandedRowComponent: expandedRowComponent,
      onCustomExpandedChange: onExpandedChange,
    }), [expandedRowComponent, onExpandedChange, ...values(tableParams)]),
    () => useMemo(() => stateParams, [expanded]),
    useExpanded,
  ];
}
