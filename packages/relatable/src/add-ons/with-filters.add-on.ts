import { useCallback, useMemo, useState } from 'react';
import {
  Column,
  FilterValue,
  useFilters,
  UseFiltersColumnOptions,
  UseFiltersInstanceProps,
  UseFiltersOptions, UseFiltersState,
} from 'react-table';
import { concat, omit, values, without } from 'lodash-es';

import {
  FILTER_ACTIONS,
  FilterFunc,
  FilterSetter,
  IRelatableStateInstance,
  TableAddOnReturn,
} from '../relatable.types';

import { relatableDefaultFilter } from '../utils/filters';

import { IFilterFieldProps, TextFilter } from '../components/renderers';

export interface IWithFiltersOptions<Data extends object = any> extends UseFiltersOptions<Data> {
  defaultFilterCell?: React.FC<IFilterFieldProps>;
  defaultFilterFunc?: FilterFunc<Data>;
  onFilterChange?: FilterSetter<Data>;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useFilters
  // with custom filter value array
  filters?: Record<string, FilterValue[]>;
}

export interface IWithFiltersState<Data extends object = any> extends UseFiltersState<Data> {}

export interface IWithFiltersInstance<Data extends object = any> extends UseFiltersInstanceProps<Data>, IRelatableStateInstance<Data, IWithFiltersState<Data>> {
  onCustomFilterChange: FilterSetter<Data>;
  defaultColumn: Partial<Column<Data> & UseFiltersColumnOptions<Data>>;
}

export default function withFilters<Data extends object = any>(options: IWithFiltersOptions<Data> = {}): TableAddOnReturn {
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
    null,
    ({ canFilter }) => canFilter,
    ({ defaultColumn }) => useMemo((): Partial<IWithFiltersInstance>  => ({
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






