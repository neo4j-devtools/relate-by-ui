import React from 'react';
import { Menu } from 'semantic-ui-react';
import { includes } from 'lodash-es';

import { useRelatableStateContext } from '../../states';
import { withFilters, withGrouping, withSorting } from '../../add-ons';

import SortByToolbar from './sort-by.toolbar';
import FiltersToolbar from './filters.toolbar';
import GroupByToolbar from './group-by.toolbar';

export default function Toolbar(): JSX.Element {
  const { availableActions } = useRelatableStateContext();

  return <Menu icon secondary>
    {includes(availableActions, withGrouping.name) && <GroupByToolbar/>}
    {includes(availableActions, withFilters.name) && <FiltersToolbar/>}
    {includes(availableActions, withSorting.name) && <SortByToolbar/>}
  </Menu>;
}
