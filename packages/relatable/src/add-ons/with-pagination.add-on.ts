import { useMemo } from 'react';
import { usePagination, UsePaginationOptions } from 'react-table';
import { pick, values } from 'lodash-es';

import { PageSetter, PageSizeSetter, TableAddOnReturn } from '../relatable.types';

import { DEFAULT_PAGE_SIZE_OPTIONS } from '../constants';

export interface IWithPaginationOptions<Row extends object = any> extends UsePaginationOptions<Row> {
  onPageChange?: PageSetter;
  onPageSizeChange?: PageSizeSetter;
  pageSizeOptions?: number[];

  // react-table state overrides https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usePagination
  pageSize?: number;
  pageIndex?: number;
}

export default function withPagination<Row extends object = any>(options: IWithPaginationOptions<Row> = {}): TableAddOnReturn {
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
    () => true,
    () => useMemo(() => ({
      ...tableParams,
      customPageSizeOptions: pageSizeOptions,
      // @todo: figure out strategy for these
      onCustomPageSizeChange: onPageSizeChange,
      onCustomPageChange: onPageChange,
    }), [onPageSizeChange, onPageChange, ...values(tableParams)]),
    () => useMemo(() => stateParams, values(stateParams)),
    usePagination,
  ];
}
