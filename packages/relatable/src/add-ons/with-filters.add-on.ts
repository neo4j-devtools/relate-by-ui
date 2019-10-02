import { useCallback, useMemo, useState } from 'react';
import { useFilters } from 'react-table';
import {
  assign,
  map,
  omit,
  reduce,
  values,
} from 'lodash-es';

import { FilterFunc, FilterSetter, TableAddOnReturn } from '../relatable.types';

import { relatableDefaultFilter } from '../utils/filters';

import { TextFilter, IFilterFieldProps } from '../components/renderers';

export interface IWithFiltersOptions {
  defaultFilterCell?: React.FC<IFilterFieldProps>;
  onFilterChange?: FilterSetter;

  // react-table API https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useFilters
  defaultFilter?: string | FilterFunc;
  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useFilters
  filters?: any;
}

export default function withFilters(options: IWithFiltersOptions = {}): TableAddOnReturn {
  const {
    defaultFilterCell,
    defaultFilter = relatableDefaultFilter,
    filters: theirFilters,
    onFilterChange,
    ...rest
  } = options;
  const [ourFilters, setOurFilters] = useState({});
  const filters = theirFilters || ourFilters;
  const stateParams = { filters };
  const onCustomFilterChange: FilterSetter = useCallback((columns, value) => {
    if (onFilterChange) {
      onFilterChange(columns, value);
      return;
    }

    if (value === undefined) {
      setOurFilters(omit(ourFilters, map(columns, 'id')));
      return;
    }

    const newFilters = reduce(
      columns,
      (agg, column) => assign(agg, { [column.id]: value }),
      { ...ourFilters },
    );

    setOurFilters(newFilters);
  }, [onFilterChange, ourFilters, setOurFilters]);

  const tableParams = {
    ...rest,
    onCustomFilterChange,
    defaultColumn: {
      Filter: defaultFilterCell || TextFilter,
      filter: defaultFilter,
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
    }), [defaultColumn, defaultFilterCell, defaultFilter, onCustomFilterChange, ...values(rest)]),
    () => useMemo(() => stateParams, [filters]),
    useFilters,
  ];
}






