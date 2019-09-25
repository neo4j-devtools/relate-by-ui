import { useMemo } from 'react';
import { useSortBy } from 'react-table';
import { values } from 'lodash-es';

import { SortSetter, TableAddOnReturn } from '../relatable.types';

export interface IWithSortingOptions {
  onSortChange?: SortSetter;

  // react-table API https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useSortBy
  manualSorting?: boolean;
  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useSortBy
  sortBy?: any[];
}

export default function withSorting(options: IWithSortingOptions = {}): TableAddOnReturn {
  const { sortBy, onSortChange, ...tableParams } = options;
  const stateParams = sortBy
    ? { sortBy }
    : {};

  return [
    withSorting.name,
    () => useMemo(() => ({
      ...tableParams,
      onCustomSortChange: onSortChange,
    }), [onSortChange, ...values(tableParams)]),
    () => useMemo(() => stateParams, [sortBy]),
    useSortBy,
  ];
}
