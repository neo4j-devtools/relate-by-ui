import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { includes } from 'lodash-es';

import { SORT_ACTIONS } from '../relatable.types';

import { useRelatableStateContext, useRelatableToolbarContext } from '../states';
import { withFilters, withGrouping, withSorting } from '../add-ons';

export interface IColumnActionsProps {
  column: any;
}

export default function ColumnActions({ column }: IColumnActionsProps) {
  const { availableActions, onCustomSortChange, onCustomGroupingChange } = useRelatableStateContext();
  const [, setRelatableToolbar] = useRelatableToolbarContext();

  return <Dropdown text={column.render('Header')} fluid className="relatable__column-actions">
    <Dropdown.Menu>
      {includes(availableActions, withGrouping.name) && (
        <Dropdown.Item
          text="Group by"
          icon="group"
          onClick={() => {
            setRelatableToolbar(withGrouping.name, column);
            onCustomGroupingChange(column, true);
          }}/>
      )}
      {includes(availableActions, withFilters.name) && (
        <Dropdown.Item
          text="Filter"
          icon="tags"
          onClick={() => setRelatableToolbar(withFilters.name, column)}/>
      )}
      {includes(availableActions, withSorting.name) && (
        <>
          {availableActions.length > 1 && <Dropdown.Divider/>}
          <Dropdown.Item
            text="Clear sort"
            icon="dont"
            onClick={() => {
              setRelatableToolbar(withSorting.name, column);
              onCustomSortChange(column, SORT_ACTIONS.SORT_CLEAR);
            }}/>
          <Dropdown.Item
            text="Sort Desc"
            icon="sort content descending"
            onClick={() => {
              setRelatableToolbar(withSorting.name, column);
              onCustomSortChange(column, SORT_ACTIONS.SORT_DESC);
            }}/>
          <Dropdown.Item
            text="Sort Asc"
            icon="sort content ascending"
            onClick={() => {
              setRelatableToolbar(withSorting.name, column);
              onCustomSortChange(column, SORT_ACTIONS.SORT_ASC);
            }}/>
        </>
      )}
    </Dropdown.Menu>
  </Dropdown>;
}
