import { Dispatch, useCallback, useEffect, useMemo, useState } from 'react';
import { useTable, useTableState } from 'react-table';
import { assign, compact, head, map, pick, reduce, values } from 'lodash-es';

import { ToolbarAction, ToolbarActionDispatch } from '../../relatable.types';
import { IRelatableProps } from './relatable';

import { ON_STATE_CHANGE_TRIGGERS } from '../../constants';
import { getRelatableAddOns } from '../../utils/get-relatable-add-ons';

export function useRelatableActions(): [ToolbarAction | null, ToolbarActionDispatch, Dispatch<void>] {
  const [action, setAction] = useState<ToolbarAction | null>(null);
  const clearAction = useCallback(() => setAction(null), [setAction]);
  const setToolbarAction = useCallback((name, column) => setAction({
    name,
    column,
  }), [setAction]);

  return [action, setToolbarAction, clearAction];
}

export function useRelatableState(props: IRelatableProps): any {
  const { columns, data, onStateChange } = props;

  // prepare add-ons and extract return values
  const addOns = getRelatableAddOns(props);
  const availableActions = compact(map(addOns, head));
  const tableParamFactories = map(addOns, (prep) => prep[1]);
  const tableStateFactories = map(addOns, (prep) => prep[2]);
  const reactTableHooks = map(addOns, (prep) => prep[3]);

  // hoist and override react-table state
  const tableState = useOnStateChange(tableStateFactories, onStateChange);

  // prepare table params and context values
  const tableParams = reduce(tableParamFactories, (agg, fac) => assign(agg, fac(agg) || {}), {
    columns,
    data,
    state: tableState,
    defaultColumn: {},
  });
  const contextValue = useTable(
    tableParams,
    ...reactTableHooks,
  );

  // add additional values for context
  return {
    ...contextValue,
    availableActions,
    // @todo: figure out a cleaner way of detecting and passing rows to use based on addOns used
    _rowsToUse: contextValue.page || contextValue.rows,
  };
}

export function useOnStateChange(tableStateFactories: any[], onStateChange?: (state: any) => any) {
  const tableStateArr = useTableState();
  const [originalState, setTableState] = tableStateArr;
  const newState = reduce(tableStateFactories, (agg, fac) => assign(agg, fac(agg) || {}), originalState);
  const overriddenState = useMemo<[any, Dispatch<any>]>(() => [newState, setTableState], tableStateArr);
  const [tableState] = overriddenState;
  const toOutside = pick(tableState, ON_STATE_CHANGE_TRIGGERS);

  // callback
  useEffect(() => {
    if (!onStateChange) return;

    onStateChange(toOutside);
  }, [onStateChange, ...values(toOutside)]); // spread to prevent double trigger

  return overriddenState;
}
