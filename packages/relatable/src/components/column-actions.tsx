import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { includes } from 'lodash-es';

import { GROUP_ACTIONS, SORT_ACTIONS } from '../relatable.types';

import { useRelatableStateContext, useRelatableToolbarContext } from '../states';
import { withFilters, withGrouping, withSorting } from '../add-ons';

export interface IColumnActionsProps {
  column: any;
}

export default function ColumnActions({ column }: IColumnActionsProps) {
  const { availableActions, onCustomSortChange, onCustomGroupChange } = useRelatableStateContext();
  const [, setRelatableToolbar] = useRelatableToolbarContext();

  return <Dropdown text={column.render('Header')} fluid className="relatable__column-actions">
    <Dropdown.Menu>
      {includes(availableActions, withGrouping.name) && (
        <Dropdown.Item
          text="Group by"
          icon="group"
          onClick={() => {
            setRelatableToolbar(withGrouping.name, column);

            if (onCustomGroupChange) {
              onCustomGroupChange(column, GROUP_ACTIONS.GROUP_SET);
              return;
            }

            column.toggleGroupBy(true);
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

              if (onCustomSortChange) {
                onCustomSortChange(column, SORT_ACTIONS.SORT_CLEAR);
                return;
              }

              column.clearSorting();
            }}/>
          <Dropdown.Item
            text="Sort Desc"
            icon="sort content descending"
            onClick={() => {
              setRelatableToolbar(withSorting.name, column);

              if (onCustomSortChange) {
                onCustomSortChange(column, SORT_ACTIONS.SORT_DESC);
                return;
              }

              column.toggleSortBy(true); // @todo: multiSort?
            }}/>
          <Dropdown.Item
            text="Sort Asc"
            icon="sort content ascending"
            onClick={() => {
              setRelatableToolbar(withSorting.name, column);

              if (onCustomSortChange) {
                onCustomSortChange(column, SORT_ACTIONS.SORT_ASC);
                return;
              }

              column.toggleSortBy(false); // @todo: multiSort?
            }}/>
        </>
      )}
    </Dropdown.Menu>
  </Dropdown>;
}
