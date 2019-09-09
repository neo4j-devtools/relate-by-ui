import { useMemo } from 'react';
import { usePagination } from 'react-table';
import { pick, values } from 'lodash-es';

import { TableAddOnReturn } from '../relatable.types';
import Paginator from '../components/paginator';

export interface IWithPaginationOptions {
  // see https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usePagination
  pageSize?: number;
  pageIndex?: number;
  pageCount?: number;
  manualPagination?: true;
  disablePageResetOnDataChange?: boolean;
  onSetPage?: (pageIndex: number) => void;
  onSetPageSize?: (size: number) => void;
}

export default function withPagination(options: IWithPaginationOptions = {}): TableAddOnReturn {
  const { pageSize, pageIndex, onSetPageSize, onSetPage, ...rest } = options;
  const stateProps = pick(options, ['pageSize', 'pageIndex']);

  return [
    withPagination.name,
    () => useMemo(() => ({
      ...rest,
      onSetCustomPageSize: onSetPageSize,
      onSetCustomPage: onSetPage,
    }), [onSetPageSize, onSetPage, ...values(rest)]),
    () => useMemo(() => stateProps, values(stateProps)),
    usePagination,
    Paginator,
  ];
}
