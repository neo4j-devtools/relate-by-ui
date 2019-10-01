/**
 * Internal types
 */
export type ReactTableHook = (...args: any[]) => any // @todo: better typings
export type TableParamFactory = (params: any) => any
export type TableStateFactory = (state: any) => any
export type TableAddOnReturn = [string | null, TableParamFactory, TableStateFactory, ReactTableHook]
export type ToolbarAction = { name: string, column?: any }
export type ToolbarActionDispatch = (name: string, column?: any) => void

/**
 * Externally exposed types
 */
export type PageSetter = (pageIndex: number) => void;
export type PageSizeSetter = (pageSize: number) => void;
export type FilterSetter = (columns: any[], val?: any) => void;
export type SortSetter = (column: any, action: SORT_ACTIONS) => void;
export type GroupSetter = (column: any, group: boolean) => void;
export type ExpandSetter = (rows: any[], expand: boolean) => void;
export type SelectSetter = (rows: any[], select: boolean) => void;

export enum SORT_ACTIONS {
  SORT_CLEAR = 'SORT_CLEAR',
  SORT_DESC = 'SORT_DESC',
  SORT_ASC = 'SORT_ASC',
}
