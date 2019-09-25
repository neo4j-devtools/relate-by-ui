import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { includes } from 'lodash-es';

import { SORT_ACTIONS } from '../relatable.types';

import { useRelatableStateContext, useRelatableToolbarContext } from '../states';
import { withFilters, withSorting } from '../add-ons';

export interface IColumnActionsProps {
  column: any;
}

export default function ColumnActions({ column }: IColumnActionsProps) {
  const { availableActions, onCustomSortChange } = useRelatableStateContext();
  const [, setRelatableToolbar] = useRelatableToolbarContext();

  return <Dropdown text={column.render('Header')}>
    <Dropdown.Menu>
      {includes(availableActions, withFilters.name) && (
        <Dropdown.Item
          text="Filter"
          icon="tags"
          onClick={() => setRelatableToolbar(withFilters.name)}/>
      )}
      {includes(availableActions, withSorting.name) && (
        <>
          {availableActions.length > 1 && <Dropdown.Divider/>}
          <Dropdown.Item
            text="Clear sort"
            icon="dont"
            onClick={() => {
              setRelatableToolbar(withSorting.name);

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
              setRelatableToolbar(withSorting.name);

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
              setRelatableToolbar(withSorting.name);

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
