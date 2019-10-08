import { filter, includes, intersectionBy, lowerCase, reduce } from 'lodash-es';

import { ColumnFilter, FilterValue, FILTER_VARIANTS, SelectedRowsFilter } from '../relatable.types';

import arrayHasItems from './array-has-items';

export function makeSelectedRowsFilter(value: any): SelectedRowsFilter {
  return { type: 'selected-rows', value, key: 'path', variant: FILTER_VARIANTS.ANY_IN };
}

export function makeColumnFilter(value: any, variant: FILTER_VARIANTS = FILTER_VARIANTS.EQUALS): ColumnFilter {
  return { type: 'column', value, variant };
}

export function isSelectedRowsFilter(filterVal?: FilterValue): filterVal is SelectedRowsFilter {
  return Boolean(filterVal && filterVal.type === 'selected-rows');
}

export function isColumnFilter(filterVal?: FilterValue): filterVal is ColumnFilter {
  return Boolean(filterVal && filterVal.type === 'column');
}

export function relatableDefaultFilter(rows: any[], columnID: any, values: FilterValue[]) {
  return reduce(values, (agg, value) => {
    if (isSelectedRowsFilter(value)) {
      return filter(agg, (row) => arrayHasItems(intersectionBy(row[value.key], value.value, String)));
    }

    // @todo: move this to column configurable property
    return filter(agg, (row) => includes(lowerCase(`${row.values[columnID]}`), lowerCase(`${value.value}`)));
  }, rows);
}
