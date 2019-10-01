import { createContext, Dispatch, useContext } from 'react';

import { ToolbarAction, ToolbarActionDispatch } from './relatable.types';

export const RelatableStateContext = createContext<any>([{}, () => null]);
export const useRelatableStateContext = () => useContext(RelatableStateContext);
export const RelatableActionContext = createContext<[ToolbarAction | null, ToolbarActionDispatch, Dispatch<void>]>([null, () => ({
  name: 'NOOP',
  column: {},
}), () => null]);
export const useRelatableToolbarContext = () => useContext(RelatableActionContext);
