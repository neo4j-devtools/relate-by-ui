import { useMemo } from 'react';
import { useSortBy } from 'react-table';
import { values } from 'lodash-es';

import { TableAddOnReturn } from '../relatable.types';
import isDefined from '../utils/is-defined';

export interface IWithSortingOptions {
  // https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useSortBy
  manualSorting?: boolean;
  sortBy?: any[];
  onSetSort?: (column: any) => void;
  // @todo: add 'filters' state override
}

export default function withSorting(options: IWithSortingOptions = {}): TableAddOnReturn {
  const { sortBy, onSetSort, ...rest } = options;
  const stateParams = isDefined(sortBy)
    ? { sortBy }
    : {};

  return [
    withSorting.name,
    () => useMemo(() => ({ ...rest, onSetCustomSort: onSetSort }), [onSetSort, ...values(rest)]),
    () => useMemo(() => (stateParams), [sortBy]),
    useSortBy,
  ];
}
