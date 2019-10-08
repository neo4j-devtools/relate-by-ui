import { useCallback, useMemo } from 'react';
import { IdType, useGroupBy, UseGroupByOptions } from 'react-table';
import { values } from 'lodash-es';

import { GroupSetter, TableAddOnReturn } from '../relatable.types';

import { DEFAULT_AGGREGATE_OPTIONS } from '../constants';

import { ValueAggregate, ICellProps } from '../components/renderers';

export interface IWithGroupingOptions<Row extends object = any> extends UseGroupByOptions<Row> {
  defaultAggregate?: string[] | string | ((values: any[]) => any);
  defaultAggregateCell?: React.FC<ICellProps>;
  onGroupChange?: GroupSetter;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useGroupBy
  groupBy?: IdType<Row>[];
}

export default function withGrouping<Row extends object = any>(options: IWithGroupingOptions<Row> = {}): TableAddOnReturn {
  const {
    groupBy,
    onGroupChange,
    defaultAggregateCell,
    defaultAggregate = DEFAULT_AGGREGATE_OPTIONS,
    ...rest
  } = options;
  const stateParams = groupBy
    ? { groupBy }
    : {};
  const onCustomGroupingChange: GroupSetter = useCallback((column, group) => {
    if (onGroupChange) {
      onGroupChange(column, group);
      return;
    }

    column.toggleGroupBy(group);
  }, [onGroupChange]);
  const tableParams = {
    ...rest,
    onCustomGroupingChange,
    defaultColumn: {
      aggregate: defaultAggregate,
      Aggregated: defaultAggregateCell || ValueAggregate,
    },
  };

  return [
    withGrouping.name,
    ({ canGroupBy }) => canGroupBy,
    ({ defaultColumn }) => useMemo(() => ({
      ...tableParams,
      defaultColumn: {
        ...defaultColumn,
        ...tableParams.defaultColumn,
      },
    }), [onCustomGroupingChange, defaultAggregateCell, defaultAggregate, ...values(rest)]),
    () => useMemo(() => stateParams, [groupBy]),
    useGroupBy,
  ];
}
