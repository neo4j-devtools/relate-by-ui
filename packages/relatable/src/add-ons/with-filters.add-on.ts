import { useCallback, useMemo, useState } from 'react';
import {
  Column, Filters,
  useFilters,
  UseFiltersColumnOptions,
  UseFiltersInstanceProps,
  UseFiltersOptions,
  UseFiltersState,
} from 'react-table';
import { filter, includes, map, values } from 'lodash-es';

import {
  FILTER_ACTIONS,
  FilterSetter,
  IRelatableStateInstance,
  TableAddOnReturn,
} from '../relatable.types';

import { IFilterFieldProps, TextFilter } from '../components/renderers';

export interface IWithFiltersOptions<Data extends object = any> extends UseFiltersOptions<Data> {
  defaultFilterCell?: React.FC<IFilterFieldProps>;
  onFilterChange?: FilterSetter<Data>;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useFilters
  // with custom filter value array
  filters?: Filters<Data>[];
}

export interface IWithFiltersState<Data extends object = any> extends UseFiltersState<Data> {
}

export interface IWithFiltersInstance<Data extends object = any> extends UseFiltersInstanceProps<Data>, IRelatableStateInstance<Data, IWithFiltersState<Data>> {
  onCustomFilterChange: FilterSetter<Data>;
  defaultColumn: Partial<Column<Data> & UseFiltersColumnOptions<Data>>;
}

export default function withFilters<Data extends object = any>(options: IWithFiltersOptions<Data> = {}): TableAddOnReturn {
  const {
    defaultFilterCell,
    filters: theirFilters,
    onFilterChange,
    ...rest
  } = options;
  const [ourFilters, setOurFilters] = useState<Filters<Data>>([]);
  const filters = theirFilters || ourFilters;
  const stateParams = { filters };
  const onCustomFilterChange: FilterSetter = useCallback((column, action, values) => {
    if (onFilterChange) {
      onFilterChange(column, action, values);

      return;
    }

    if (action === FILTER_ACTIONS.FILTER_CLEAR) {
      setOurFilters(filter(ourFilters, ({ id }) => id === column.id));

      return;
    }

    if (action === FILTER_ACTIONS.FILTER_ADD) {
      setOurFilters([
        ...ourFilters,
        ...map(values, (value) => ({id: column.id, value}))
      ]);

      return;
    }

    setOurFilters(filter(ourFilters, ({ id, value }) => !(id === column.id && includes(values, value))));
  }, [onFilterChange, ourFilters, setOurFilters]);

  const tableParams = {
    ...rest,
    onCustomFilterChange,
    defaultColumn: {
      Filter: defaultFilterCell || TextFilter,
    },
  };

  return [
    withFilters.name,
    null,
    ({ canFilter }) => canFilter,
    ({ defaultColumn }) => useMemo((): Partial<IWithFiltersInstance> => ({
      ...tableParams,
      defaultColumn: {
        ...defaultColumn,
        ...tableParams.defaultColumn,
      },
    }), [defaultColumn, defaultFilterCell, onCustomFilterChange, ...values(rest)]),
    () => useMemo(() => stateParams, [filters]),
    useFilters,
  ];
}
