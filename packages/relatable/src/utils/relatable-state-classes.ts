import { compact, entries, kebabCase, keys, map, reduce, some } from 'lodash-es';

import { COLUMN_STATE_CLASSES, ROW_STATE_CLASSES, TOOLBAR_STATE_CLASSES } from '../constants';
import { isColumnFilter } from './filters';

export function createColumnStateLabelClasses() {
  return map(entries(COLUMN_STATE_CLASSES), ([state, bgColor]) => `
    .relatable__table-header-row .${getColumnStateClass(state)} {
      background-color: ${bgColor};
    }
  `);
}

export function getRowClasses(row: any) {
  return `relatable__table-row relatable__table-body-row ${getRowStateClasses(row)}`;
}

export function createRowStateClasses() {
  return map(entries(ROW_STATE_CLASSES), ([state, bgColor]) => bgColor
    ? `.${getRowStateClass(state)} {
        background-color: ${bgColor};
      }`
    : '',
  );
}

export function createToolbarStateClasses() {
  return map(entries(TOOLBAR_STATE_CLASSES), ([state, bgColor]) => `
    /* need to win over semantic specificity */
    .menu .label.${getToolbarStateClass(state)} {
      background-color: ${bgColor};
    }
  `);
}

export function getColumnStateLabelClasses(column: any) {
  const columnClasses = map(keys(COLUMN_STATE_CLASSES), (state) => isValidColumnState(column, state)
    ? getColumnStateClass(state)
    : '',
  );

  return compact(columnClasses);
}

function isValidColumnState(column: any, state: string) {
  switch (state) {
    case 'filterValue':
      return some(column[state], isColumnFilter);
    default:
      return Boolean(column[state]);
  }
}

export function getToolbarStateClass(state: string) {
  return `relatable__toolbar-label--${kebabCase(state)}`;
}

function getRowStateClasses(row: any) {
  return reduce(keys(ROW_STATE_CLASSES), (agg, state) => row[state] ? `${agg} ${getRowStateClass(state)}` : agg, '');
}

function getColumnStateClass(state: string) {
  return `relatable__table-column-state--${kebabCase(state)}`;
}

function getRowStateClass(state: string) {
  return `relatable__table-row-state--${kebabCase(state)}`;
}
