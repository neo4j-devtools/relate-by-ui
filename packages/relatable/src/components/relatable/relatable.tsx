import React, { PropsWithChildren } from 'react';

import {
  IWithPaginationOptions,
  IWithSortingOptions,
  IWithFiltersOptions,
  IWithGroupingOptions,
  IWithExpandedOptions,
  IWithSelectionOptions,
} from '../../add-ons';
import { StateChangeHandler } from '../../relatable.types';

import { RelatableActionContext, RelatableStateContext } from '../../states';
import { useRelatableActions, useRelatableState } from './relatable.hooks';

import Table, { ITableProps } from '../table';
import Toolbar from '../toolbar/toolbar';
import Pagination from '../pagination';
import { StyleWrapper } from './relatable.styled';

export interface IRelatableProps {
  // see https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usetable
  columns: any[];
  data: any[];
  defaultColumn?: any;

  // Relatable state change handler
  onStateChange?: StateChangeHandler;

  // cell col span getter
  getCellColSpan?: (cell: any) => number | string | undefined;

  // add on options
  filterable?: boolean | IWithFiltersOptions;
  groupable?: boolean | IWithGroupingOptions;
  sortable?: boolean | IWithSortingOptions;
  expandable?: boolean | IWithExpandedOptions;
  paginated?: boolean | IWithPaginationOptions;
  selectable?: boolean | IWithSelectionOptions;
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

function RelatableState({ children, ...rest }: IRelatableChildrenProps): JSX.Element {
  const tableProps = useRelatableState(rest);

  return <RelatableStateContext.Provider value={tableProps}>
    <RelatableActions>
      <StyleWrapper className="relatable">
        {children}
      </StyleWrapper>
    </RelatableActions>
  </RelatableStateContext.Provider>;
}

function RelatableActions({ children }: any) {
  const actionsState = useRelatableActions();

  return <RelatableActionContext.Provider value={actionsState}>
    {children}
  </RelatableActionContext.Provider>;
}
