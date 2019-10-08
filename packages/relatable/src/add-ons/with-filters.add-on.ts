import { useCallback, useMemo, useState } from 'react';
import { FilterValue, useFilters, UseFiltersOptions } from 'react-table';
import { concat, omit, values, without } from 'lodash-es';

import { FILTER_ACTIONS, FilterFunc, FilterSetter, TableAddOnReturn } from '../relatable.types';

import { relatableDefaultFilter } from '../utils/filters';

import { IFilterFieldProps, TextFilter } from '../components/renderers';

export interface IWithFiltersOptions<Row extends object = any> extends UseFiltersOptions<Row> {
  defaultFilterCell?: React.FC<IFilterFieldProps>;
  defaultFilterFunc?: string | FilterFunc;
  onFilterChange?: FilterSetter;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useFilters
  // with custom filter value array
  filters?: Record<string, FilterValue[]>;
}

export default function withFilters<Row extends object = any>(options: IWithFiltersOptions<Row> = {}): TableAddOnReturn {
  const {
    defaultFilterCell,
    defaultFilterFunc = relatableDefaultFilter,
    filters: theirFilters,
    onFilterChange,
    ...rest
  } = options;
  const [ourFilters, setOurFilters] = useState<Record<string, FilterValue[]>>({});
  const filters = theirFilters || ourFilters;
  const stateParams = { filters };
  const onCustomFilterChange: FilterSetter = useCallback((column, action, values) => {
    if (onFilterChange) {
      onFilterChange(column, action, values);
      return;
    }

    if (action === FILTER_ACTIONS.FILTER_CLEAR) {
      setOurFilters(omit(ourFilters, column.id));
      return;
    }

    if (action === FILTER_ACTIONS.FILTER_ADD) {
      setOurFilters({
        ...ourFilters,
        [column.id]: concat(ourFilters[column.id] || [], values),
      });

      return;
    }

    setOurFilters({
      ...ourFilters,
      [column.id]: without(ourFilters[column.id] || [], ...values),
    });
  }, [onFilterChange, ourFilters, setOurFilters]);

  const tableParams = {
    ...rest,
    onCustomFilterChange,
    defaultColumn: {
      Filter: defaultFilterCell || TextFilter,
      filter: defaultFilterFunc,
    },
  };

  return [
    withFilters.name,
    ({ canFilter }) => canFilter,
    ({ defaultColumn }) => useMemo(() => ({
      ...tableParams,
      defaultColumn: {
        ...defaultColumn,
        ...tableParams.defaultColumn,
      },
    }), [defaultColumn, defaultFilterCell, defaultFilterFunc, onCustomFilterChange, ...values(rest)]),
    () => useMemo(() => stateParams, [filters]),
    useFilters,
  ];
}






