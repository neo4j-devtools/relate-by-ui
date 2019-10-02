import { Dispatch, useCallback, useEffect, useState } from 'react';
import { useTable } from 'react-table';
import { assign, compact, head, map, pick, reduce, values, filter, keys } from 'lodash-es';

import { StateChangeHandler, ToolbarAction, ToolbarActionDispatch } from '../../relatable.types';
import { IRelatableProps } from './relatable';

import { ON_STATE_CHANGE_TRIGGERS } from '../../constants';
import { getRelatableAddOns } from '../../utils/get-relatable-add-ons';

import { TextCell } from '../renderers';

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

  // prepare table params and context values
  const stateParams = reduce(tableStateFactories, (agg, fac) => assign(agg, fac(agg) || {}), {});
  const tableParams = reduce(tableParamFactories, (agg, fac) => assign(agg, fac(agg) || {}), {
    columns,
    data,
    state: stateParams,
    defaultColumn: {
      Cell: TextCell,
    },
  });
  const contextValue = useTable(
    tableParams,
    ...reactTableHooks,
  );
  // hoist and override react-table state
  useOnStateChange(contextValue, onStateChange);


  // add additional values for context
  return {
    ...contextValue,
    availableActions,
    // @todo: cleanup
    _originalColumns: columns,
    // @todo: figure out a cleaner way of detecting and passing rows to use based on addOns used
    _rowsToUse: contextValue.page || contextValue.rows,
  };
}

export function useOnStateChange({ state: tableState }: any, onStateChange?: StateChangeHandler) {
  const toOutside = pick(tableState, ON_STATE_CHANGE_TRIGGERS);
  const [oldState, setOldState] = useState(toOutside);

  // callback
  useEffect(() => {
    if (!onStateChange) return;

    const changedKeys = filter(keys(toOutside), (key) => toOutside[key] !== oldState[key]);
    setOldState(toOutside);

    onStateChange(toOutside, changedKeys);
  }, [onStateChange, ...values(toOutside)]); // spread to prevent double trigger
}
