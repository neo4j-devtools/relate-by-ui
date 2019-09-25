import React, { PropsWithChildren } from 'react';

import { IWithPaginationOptions } from '../../add-ons/with-pagination.add-on';
import { IWithSortingOptions } from '../../add-ons/with-sorting.add-on';
import { IWithFiltersOptions } from '../../add-ons/with-filters.add-on';

import { RelatableActionContext, RelatableStateContext } from '../../states';
import { useRelatableActions, useRelatableState } from './relatable.hooks';

import Table, { ITableProps } from '../table/table';
import Toolbar from '../toolbar/toolbar';
import Pagination from '../pagination';

export interface IRelatableProps {
  // see https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usetable
  columns: any[];
  data: any[];
  defaultColumn?: any;

  // Relatable state change handler
  onStateChange?: (state: any) => any;

  // add on options
  paginated?: boolean | IWithPaginationOptions;
  sortable?: boolean | IWithSortingOptions;
  filterable?: boolean | IWithFiltersOptions;
}

// when used without children, Table props are passed along as well
export interface IRelatableBasicProps extends IRelatableProps, ITableProps {
}

export interface IRelatableChildrenProps extends PropsWithChildren<IRelatableProps> {
}

export default function Relatable(props: IRelatableChildrenProps | IRelatableBasicProps): JSX.Element {
  // @ts-ignore
  const { children } = props;

  if (children) {
    return <RelatableState {...props}/>;
  }

  return <RelatableBasic {...props}/>;
}

function RelatableBasic(props: IRelatableBasicProps): JSX.Element {
  const { columns, data, defaultColumn, paginated, sortable, filterable, ...rest } = props;

  return <RelatableState {...props}>
    {(sortable || filterable) && <Toolbar/>}
    <Table {...rest} />
    {paginated && <Pagination/>}
  </RelatableState>;
}

function RelatableState({children, ...rest}: IRelatableChildrenProps): JSX.Element {
  const tableProps = useRelatableState(rest);

  return <RelatableStateContext.Provider value={tableProps}>
    <RelatableActions>
      {children}
    </RelatableActions>
  </RelatableStateContext.Provider>;
}

function RelatableActions({children}: any) {
  const actionsState = useRelatableActions();

  return <RelatableActionContext.Provider value={actionsState}>
    {children}
  </RelatableActionContext.Provider>
}
