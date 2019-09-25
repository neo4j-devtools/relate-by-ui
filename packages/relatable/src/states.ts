import { createContext, Dispatch, useContext } from 'react';

export const RelatableStateContext = createContext<any>([{}, () => null]);
export const useRelatableStateContext = () => useContext(RelatableStateContext);
export const RelatableActionContext = createContext<[string | null, Dispatch<string>, Dispatch<void>]>([null, () => null, () => null]);
export const useRelatableToolbarContext = () => useContext(RelatableActionContext);
