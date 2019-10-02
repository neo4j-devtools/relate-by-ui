/**
 * Internal types
 */
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type ReactTableHook = (...args: any[]) => any // @todo: better typings
export type TableParamFactory = (params: any) => any
export type TableStateFactory = (state: any) => any
export type TableAddOnReturn = [string | null, TableParamFactory, TableStateFactory, ReactTableHook]
export type ToolbarAction = { name: string, column?: any }
export type ToolbarActionDispatch = (name: string, column?: any) => void

/**
 * Externally exposed types
 */
export type StateChangeHandler = (state: any, changedKeys: string[]) => void;
export type PageSetter = (pageIndex: number) => void;
export type PageSizeSetter = (pageSize: number) => void;
export type FilterSetter = (columns: any[], value?: FilterValue) => void;
export type FilterFunc = (rows: any[], columnID: any, value: FilterValue) => any[];
export type SortSetter = (column: any, action: SORT_ACTIONS) => void;
export type GroupSetter = (column: any, group: boolean) => void;
export type ExpandSetter = (rows: any[], expand: boolean) => void;
export type SelectSetter = (rows: any[], select: boolean) => void;

export enum SORT_ACTIONS {
  SORT_CLEAR = 'SORT_CLEAR',
  SORT_DESC = 'SORT_DESC',
  SORT_ASC = 'SORT_ASC',
}

export enum FilterVariants {
  EQUALS = 'EQUALS',
  ANY_IN = 'ANY_IN'
}

export type ColumnFilter = {
  type: 'column',
  variant?: FilterVariants,
  value: any
}
export type SelectedRowsFilter = {
  type: 'selected-rows',
  key: 'path',
  variant: FilterVariants.ANY_IN,
  value: any[]
}
export type FilterValue = ColumnFilter | SelectedRowsFilter;
