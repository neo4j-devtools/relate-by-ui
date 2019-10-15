import { Dispatch, useCallback, useEffect, useMemo, useState } from 'react';
import { useTable } from 'react-table';
import { assign, map, pick, reduce, values, filter, keys } from 'lodash-es';

import { StateChangeHandler, ToolbarAction, ToolbarActionDispatch } from '../../relatable.types';
import { IRelatableProps } from './relatable';

import { ON_STATE_CHANGE_TRIGGERS } from '../../constants';
import getRelatableAddOns from '../../utils/get-relatable-add-ons';
import { getRelatableActions } from '../../utils/relatable-actions';

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

// always memoize...
const getCellColSpanDefault = () => undefined;
const DEFAULT_COLUMN = {};

export function useRelatableState(props: IRelatableProps): any {
  const { columns, data, onStateChange, defaultColumn = DEFAULT_COLUMN, getCellColSpan = getCellColSpanDefault } = props;

  // prepare add-ons and extract return values
  const addOns = getRelatableAddOns(props);
  const availableActions = getRelatableActions(addOns);
  const tableParamFactories = map(addOns, (prep) => prep[2]);
  const tableStateFactories = map(addOns, (prep) => prep[3]);
  const reactTableHooks = map(addOns, (prep) => prep[4]);

  // prepare table params and context values
  const stateParams = reduce(tableStateFactories, (agg, fac) => assign(agg, fac(agg) || {}), {});
  const tableParams = reduce(tableParamFactories, (agg, fac) => assign(agg, fac(agg) || {}), {
    columns,
    data,
    state: stateParams,
    getCustomCellColSpan: getCellColSpan,
    defaultColumn: useMemo(() => ({
      Cell: TextCell,
      ...defaultColumn,
    }), [defaultColumn]),
  });
  const contextValue = useTable(
    // @ts-ignore
    tableParams, // @todo: fix typing from lib
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
    // @ts-ignore
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
