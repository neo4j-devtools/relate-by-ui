/**
 * Internal types
 */
export type ReactTableHook = (...args: any[]) => any // @todo: better typings
export type TableParamFactory = (params: any) => any
export type TableStateFactory = (state: any) => any
export type TableAddOnReturn = [string | null, TableParamFactory, TableStateFactory, ReactTableHook]

/**
 * Externally exposed types
 */
export type PageSetter = (pageIndex: number) => void;
export type PageSizeSetter = (pageSize: number) => void;
export type FilterSetter = (columns: any[], val?: any) => void;
export type SortSetter = (column: any, action: SORT_ACTIONS) => void;
export enum SORT_ACTIONS {
  SORT_CLEAR = 'SORT_CLEAR',
  SORT_DESC = 'SORT_DESC',
  SORT_ASC = 'SORT_ASC',
}
