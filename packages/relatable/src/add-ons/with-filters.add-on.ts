import { useMemo } from 'react';
import { useFilters } from 'react-table';
import { values } from 'lodash-es';

import { FilterSetter, TableAddOnReturn } from '../relatable.types';

import { TextFilter, IFilterFieldProps } from '../components/renderers';

export interface IWithFiltersOptions {
  defaultFilterCell?: React.FC<IFilterFieldProps>;
  onFilterChange?: FilterSetter;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useFilters
  filters?: any;
}

export default function withFilters(options: IWithFiltersOptions = {}): TableAddOnReturn {
  const {
    defaultFilterCell,
    filters,
    onFilterChange: onCustomFilterChange,
    ...rest
  } = options;
  const stateParams = filters ? { filters } : {};
  const tableParams = {
    ...rest,
    onCustomFilterChange,
    defaultColumn: {
      Filter: defaultFilterCell || TextFilter,
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
    }), [defaultColumn, defaultFilterCell, ...values(rest)]),
    () => useMemo(() => stateParams, [filters]),
    useFilters,
  ];
}
