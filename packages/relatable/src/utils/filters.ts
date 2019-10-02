import { filter, includes, intersectionBy, lowerCase } from 'lodash-es';

import { ColumnFilter, FilterValue, FilterVariants, SelectedRowsFilter } from '../relatable.types';

import arrayHasItems from './array-has-items';

export function makeSelectedRowsFilter(value: any): SelectedRowsFilter {
  return { type: 'selected-rows', value, key: 'path', variant: FilterVariants.ANY_IN };
}

export function makeColumnFilter(value: any, variant: FilterVariants = FilterVariants.EQUALS): ColumnFilter {
  return { type: 'column', value, variant };
}

export function isSelectedRowsFilter(filterVal?: FilterValue): filterVal is SelectedRowsFilter {
  return Boolean(filterVal && filterVal.type === 'selected-rows');
}

export function isColumnFilter(filterVal?: FilterValue): filterVal is ColumnFilter {
  return Boolean(filterVal && filterVal.type === 'column');
}

export function relatableDefaultFilter(rows: any[], columnID: any, value: FilterValue) {
  if (isSelectedRowsFilter(value)) {
    return filter(rows, (row) => arrayHasItems(intersectionBy(row[value.key], value.value, String)));
  }

  // @todo: move this to column configurable property
  return filter(rows, (row) => includes(lowerCase(`${row.values[columnID]}`), lowerCase(`${value.value}`)));
}
