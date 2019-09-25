import { IRelatableProps } from '../components/relatable/relatable';
import { TableAddOnReturn } from '../relatable.types';

import { withFilters, withPagination, withSorting } from '../add-ons';

/**
 * Adds enhancers based on boolean props
 * @param     {Object}                                  props
 * @param     {boolean | IWithFiltersOptions}           props.filterable
 * @param     {boolean | IWithSortingOptions}           props.sortable
 * @param     {boolean | IWithPaginationOptions}        props.paginated
 * @return    {TableAddOnReturn[]}
 */
export function getRelatableAddOns({ filterable, sortable, paginated }: IRelatableProps): TableAddOnReturn[] {
  const addOns: TableAddOnReturn[] = [];

  if (filterable) {
    addOns.push(withFilters(filterable !== true ? filterable : {}));
  }

  if (sortable) {
    addOns.push(withSorting(sortable !== true ? sortable : {}));
  }

  if (paginated) {
    addOns.push(withPagination(paginated !== true ? paginated : {}));
  }

  return addOns;
}
