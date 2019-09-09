import React from 'react';

export type ReactTableHook = (...args: any[]) => any // @todo: better typings
export type TableParamFactory = (params: any) => any
export type TableStateFactory = (state: any) => any
export type TableContext = React.Context<any>
export type TableAddOnReturn = [string, TableParamFactory, TableStateFactory, ReactTableHook, ...TableComponent[]]
export type TableComponent = React.FC<any>;
export type TableComponents = {
  Table: TableComponent,
  [name: string]: TableComponent
};
