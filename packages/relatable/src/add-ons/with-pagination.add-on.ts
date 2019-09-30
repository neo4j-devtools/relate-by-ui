import { useMemo } from 'react';
import { usePagination } from 'react-table';
import { pick, values } from 'lodash-es';

import { PageSetter, PageSizeSetter, TableAddOnReturn } from '../relatable.types';

import { DEFAULT_PAGE_SIZE_OPTIONS } from '../constants';

export interface IWithPaginationOptions {
  onPageChange?: PageSetter;
  onPageSizeChange?: PageSizeSetter;
  pageSizeOptions?: number[];

  // react-table state overrides https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usePagination
  pageSize?: number;
  pageIndex?: number;

  // react-table API https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usePagination
  pageCount?: number;
  manualPagination?: boolean;
  disablePageResetOnDataChange?: boolean;
  paginateExpandedRows?: boolean;
}

export default function withPagination(options: IWithPaginationOptions = {}): TableAddOnReturn {
  const {
    pageSize,
    pageIndex,
    onPageSizeChange,
    onPageChange,
    pageSizeOptions = DEFAULT_PAGE_SIZE_OPTIONS,
    ...tableParams
  } = options;
  const stateParams = pick(options, ['pageSize', 'pageIndex']);

  return [
    null,
    () => useMemo(() => ({
      ...tableParams,
      customPageSizeOptions: pageSizeOptions,
      onCustomPageSizeChange: onPageSizeChange,
      onCustomPageChange: onPageChange,
    }), [onPageSizeChange, onPageChange, ...values(tableParams)]),
    () => useMemo(() => stateParams, values(stateParams)),
    usePagination,
  ];
}
