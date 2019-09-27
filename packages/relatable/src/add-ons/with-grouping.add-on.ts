import { useMemo } from 'react';
import { useGroupBy } from 'react-table';
import { values } from 'lodash-es';

import { GroupSetter, TableAddOnReturn } from '../relatable.types';

import { DEFAULT_AGGREGATE_OPTIONS } from '../constants';

import {ValueAggregate, ICellProps} from '../components/renderers';

export interface IWithGroupingOptions {
  defaultAggregate?: string[] | string | ((values: any[]) => any);
  defaultAggregateCell?: React.FC<ICellProps>;
  onGroupChange?: GroupSetter;

  // react-table API https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useGroupBy
  manualGroupBy?: boolean;
  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useGroupBy
  groupBy?: string[];
}

export default function withGrouping(options: IWithGroupingOptions = {}): TableAddOnReturn {
  const {
    groupBy,
    onGroupChange: onCustomGroupChange,
    defaultAggregateCell,
    defaultAggregate = DEFAULT_AGGREGATE_OPTIONS,
    ...rest
  } = options;
  const stateParams = groupBy
    ? { groupBy }
    : {};
  const tableParams = {
    ...rest,
    onCustomGroupChange,
    defaultColumn: {
      aggregate: defaultAggregate,
      Aggregated: defaultAggregateCell || ValueAggregate,
    },
  };

  return [
    withGrouping.name,
    ({ defaultColumn }) => useMemo(() => ({
      ...tableParams,
      defaultColumn: {
        ...defaultColumn,
        ...tableParams.defaultColumn,
      },
    }), [onCustomGroupChange, defaultAggregateCell, ...values(rest)]),
    () => useMemo(() => stateParams, [groupBy]),
    useGroupBy,
  ];
}
