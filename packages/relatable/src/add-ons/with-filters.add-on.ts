import { useMemo } from 'react';
import { useFilters } from 'react-table';
import { values } from 'lodash-es';

import { FilterSetter, TableAddOnReturn } from '../relatable.types';

import { DefaultFilter, IFilterFieldProps } from '../components/filters';

export interface IWithFiltersOptions {
  defaultFilter?: React.FC<IFilterFieldProps>;
  onFilterChange?: FilterSetter;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useFilters
  filters?: any;
}

export default function withFilters(options: IWithFiltersOptions = {}): TableAddOnReturn {
  const {
    defaultFilter,
    filters,
    onFilterChange: onCustomFilterChange,
    ...rest
  } = options;
  const stateParams = filters ? { filters } : {};
  const tableParams = {
    ...rest,
    onCustomFilterChange,
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
      },
    }), [defaultColumn, ...values(rest)]),
    () => useMemo(() => stateParams, [filters]),
    useFilters,
  ];
}
