import React, { ReactElement } from 'react';

import { StateContext } from '../../constants';
import { getRelatableAddOns } from '../../utils/get-relatable-add-ons';
import { useRelatableState } from './relatable.hooks';
import { ITableProps } from '../table/table';
import { TableAddOnReturn } from '../../relatable.types';

export type TableComponent = React.FC<any>;

export type TableComponents = {
  Table: TableComponent,
  [name: string]: TableComponent
};

// @todo: eh?
export interface IRelatableProps extends ITableProps {
  columns: any[];
  data: any[];
  addOns?: TableAddOnReturn[];
  children?: (components: TableComponents) => ReactElement;
  onStateChange?: (state: any) => any;
  defaultColumn?: any;
  paginated?: boolean;
  sortable?: boolean;
  filterable?: boolean;
}

export default function Relatable(props: IRelatableProps) {
  if (props.children && typeof props.children === 'function') {
    return <RelatableContext {...props}/>
  }

  return <RelatableBasic {...props}/>
}

export function RelatableBasic(props: IRelatableProps) {
  const { columns, data, defaultColumn, paginated, filterable, loading, expectedRowCount } = props;
  const addOns = getRelatableAddOns(props);

  return <RelatableContext columns={columns} data={data} addOns={addOns} defaultColumn={defaultColumn}>
    {({Table, Filters, Paginator}: TableComponents) => {
      return <>
        {filterable && <Filters/>}
        <Table loading={loading} expectedRowCount={expectedRowCount}/>
        {paginated && <Paginator/>}
      </>
    }}
  </RelatableContext>;
}

export function RelatableContext({ columns, data, addOns, onStateChange, children }: IRelatableProps) {
  const [components, tableProps] = useRelatableState({columns, data, onStateChange, addOns});

  return <StateContext.Provider value={tableProps}>
    {children(components)}
  </StateContext.Provider>;
}
