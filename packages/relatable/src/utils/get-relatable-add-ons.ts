import { IRelatableProps } from '../components/relatable/relatable';
import { TableAddOnReturn } from '../relatable.types';

import { withFilters, withPagination, withSorting } from '../add-ons';

/**
 * Adds enhancers based on boolean props
 * @param     {Object}            props
 * @param     {boolean}           props.filterable
 * @param     {boolean}           props.sortable
 * @param     {boolean}           props.paginated
 * @return    {TableComponents}
 */
export function getRelatableAddOns({ filterable, sortable, paginated }: IRelatableProps): TableAddOnReturn[] {
  const enhancers: TableAddOnReturn[] = [];

  if (filterable) {
    enhancers.push(withFilters());
  }

  if (sortable) {
    enhancers.push(withSorting());
  }

  if (paginated) {
    enhancers.push(withPagination());
  }

  return enhancers;
}
