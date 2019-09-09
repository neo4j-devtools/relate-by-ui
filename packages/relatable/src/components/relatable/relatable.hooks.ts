import { Dispatch, useEffect, useMemo } from 'react';
import { useTable, useTableState } from 'react-table';
import { assign, flatMap, head, map, pick, reduce, slice, values } from 'lodash-es';

import { TableComponent } from '../../relatable.types';
import { IRelatableProps, TableComponents } from './relatable';

import Table from '../table/table';

export function useRelatableState({ columns, data, addOns, onStateChange }: IRelatableProps): [TableComponents, any] {
  // prepare enhancers and extract return values
  const addOnNames = map(addOns, head);
  const tableParamFactories = map(addOns, (prep) => prep[1]);
  const tableStateFactories = map(addOns, (prep) => prep[2]);
  const reactTableHooks = map(addOns, (prep) => prep[3]);
  // @todo: typings
  const addOnComponents = flatMap(addOns, (prep) => slice(prep, 4) as TableComponent[]);
  const components = reduce(addOnComponents, (agg, next) => assign(agg, {
    [next.name]: next,
  }), { Table });

  // hoist and override react-table state
  const tableState = useOnStateChange(tableStateFactories, onStateChange);

  // prepare table params and context values
  const tableParams = reduce(tableParamFactories, (agg, fac) => assign(agg, fac(agg) || {}), {
    columns,
    data,
    state: tableState,
    defaultColumn: {}
  });
  const contextValue = useTable(
    tableParams,
    ...reactTableHooks,
  );

  // add additional values for context
  const tableProps = {
    ...contextValue,
    addOnNames,
    // @todo: figure out a cleaner way of detecting and passing rows to use based on addOns used
    _rowsToUse: contextValue.page || contextValue.rows,
  };

  return [components, tableProps];
}

export function useOnStateChange(tableStateFactories: any[], onStateChange?: (state: any) => any) {
  const tableStateArr = useTableState();
  const [originalState, setTableState] = tableStateArr;
  const newState = reduce(tableStateFactories, (agg, fac) => assign(agg, fac(agg) || {}), originalState);
  const overriddenState = useMemo<[any, Dispatch<any>]>(() => [newState, setTableState], tableStateArr);
  const [tableState] = overriddenState;
  // @todo: move to constant, used to define what can be seen "outside"
  const toOutside = pick(tableState, ['pageIndex', 'pageSize', 'sortBy', 'filters', 'groupBy']);

  // callback
  useEffect(() => {
    if (!onStateChange) return;

    onStateChange(toOutside);
  }, [onStateChange, ...values(toOutside)]); // spread to prevent double trigger

  return overriddenState;
}
