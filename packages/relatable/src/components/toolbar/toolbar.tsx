import React from 'react';
import { Menu, MenuProps } from 'semantic-ui-react';
import { includes } from 'lodash-es';

import { useRelatableStateContext } from '../../states';
import { withFilters, withGrouping, withSelection, withSorting } from '../../add-ons';

import SortingToolbar from './sorting.toolbar';
import FiltersToolbar from './filters.toolbar';
import GroupingToolbar from './grouping.toolbar';
import SelectionToolbar from './selection.toolbar';

export default function Toolbar(props?: MenuProps): JSX.Element {
  const { availableActions } = useRelatableStateContext();

  return <Menu icon secondary {...props}>
    {includes(availableActions, withGrouping.name) && <GroupingToolbar/>}
    {includes(availableActions, withFilters.name) && <FiltersToolbar/>}
    {includes(availableActions, withSorting.name) && <SortingToolbar/>}
    {includes(availableActions, withSelection.name) && <SelectionToolbar/>}
  </Menu>;
}
