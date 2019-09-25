import React from 'react';
import { Menu } from 'semantic-ui-react';
import { includes } from 'lodash-es';

import { useRelatableStateContext } from '../../states';
import { withFilters, withSorting } from '../../add-ons';

import SortByToolbar from './sort-by.toolbar';
import FiltersToolbar from './filters.toolbar';

export default function Toolbar(): JSX.Element {
  const { availableActions } = useRelatableStateContext();

  return <Menu icon>
    {includes(availableActions, withFilters.name) && <FiltersToolbar/>}
    {includes(availableActions, withSorting.name) && <SortByToolbar/>}
  </Menu>;
}
