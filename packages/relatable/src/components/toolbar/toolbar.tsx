import React from 'react';
import { Menu, MenuProps } from 'semantic-ui-react';

import { useRelatableStateContext } from '../../states';
import { withFilters, withGrouping, withSelection, withSorting } from '../../add-ons';
import { isActionAvailable } from '../../utils/relatable-actions';

import SortingToolbar from './sorting.toolbar';
import FiltersToolbar from './filters.toolbar';
import GroupingToolbar from './grouping.toolbar';
import SelectionToolbar from './selection.toolbar';

export default function Toolbar(props: MenuProps = {}): JSX.Element {
  const { availableActions } = useRelatableStateContext();

  return <Menu icon secondary {...props}>
    {isActionAvailable(availableActions, withGrouping.name) && <GroupingToolbar/>}
    {isActionAvailable(availableActions, withFilters.name) && <FiltersToolbar/>}
    {isActionAvailable(availableActions, withSorting.name) && <SortingToolbar/>}
    {isActionAvailable(availableActions, withSelection.name) && <SelectionToolbar/>}
  </Menu>;
}
