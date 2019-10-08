/**
 * Internal types
 */
import { PluginHook } from 'react-table';

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
export type TableParamFactory = (params: any) => any
export type TableStateFactory = (state: any) => any
export type AddOnColumnPredicate = (column: any) => boolean;
export type TableAddOnReturn = [string | null, AddOnColumnPredicate, TableParamFactory, TableStateFactory, PluginHook<any>]
export type RelatableAction = [string, AddOnColumnPredicate];
export type ToolbarAction = { name: string, column?: any }
export type ToolbarActionDispatch = (name: string, column?: any) => void

/**
 * Externally exposed types
 */
export type StateChangeHandler = (state: any, changedKeys: string[]) => void;
export type PageSetter = (pageIndex: number) => void;
export type PageSizeSetter = (pageSize: number) => void;
export type GroupSetter = (column: any, group: boolean) => void;
export type ExpandSetter = (rows: any[], expand: boolean) => void;
export type SelectSetter = (rows: any[], select: boolean) => void;

/* Sorting */
export enum SORT_ACTIONS {
  SORT_CLEAR = 'SORT_CLEAR',
  SORT_DESC = 'SORT_DESC',
  SORT_ASC = 'SORT_ASC',
}
export type SortSetter = (column: any, action: SORT_ACTIONS) => void;

/* Filters */
export enum FILTER_ACTIONS {
  FILTER_CLEAR = 'FILTER_CLEAR',
  FILTER_ADD = 'FILTER_ADD',
  FILTER_REMOVE = 'FILTER_REMOVE',
}
export enum FILTER_VARIANTS {
  EQUALS = 'EQUALS',
  ANY_IN = 'ANY_IN'
}
export type ColumnFilter = {
  type: 'column',
  variant?: FILTER_VARIANTS,
  value: any
}
export type SelectedRowsFilter = {
  type: 'selected-rows',
  key: 'path',
  variant: FILTER_VARIANTS.ANY_IN,
  value: any[]
}
export type FilterValue = ColumnFilter | SelectedRowsFilter;
export type FilterFunc = (rows: any[], columnID: any, value: FilterValue) => any[];
export type FilterSetter = (column: any, action: FILTER_ACTIONS, values: FilterValue[]) => void
