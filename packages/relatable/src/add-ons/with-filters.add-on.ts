import { useMemo } from 'react';
import { useFilters } from 'react-table';
import { values } from 'lodash-es';

import { TableComponent, TableAddOnReturn } from '../relatable.types';

import { DefaultFilter } from '../components/filter-fields';
import Filters from '../components/filters';
import isDefined from '../utils/is-defined';

export interface IWithFiltersOptions {
  defaultFilter?: TableComponent;
  onSetFilter?: (id: string, value: any) => void;
  filters?: any;
}

export default function withFilters(options: IWithFiltersOptions = {}): TableAddOnReturn {
  const { defaultFilter, filters, onSetFilter: onSetCustomFilter, ...rest } = options;
  const stateParams = isDefined(filters) ? { filters } : {};
  const tableParams = {
    ...rest,
    onSetCustomFilter,
    defaultColumn: {
      Filter: options.defaultFilter || DefaultFilter,
    },
  };

  return [
    withFilters.name,
    ({ defaultColumn }) => useMemo(() => ({
      ...tableParams,
      defaultColumn: {
        ...defaultColumn,
        ...tableParams.defaultColumn,
      }
    }), [defaultColumn, ...values(rest)]),
    () => useMemo(() => stateParams, [filters]),
    useFilters,
    Filters,
  ];
}
