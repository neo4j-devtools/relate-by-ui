import { compact, entries, flatMap, join, kebabCase, keys, map, reduce } from 'lodash-es';

import { COLUMN_STATE_CLASSES, ROW_STATE_CLASSES, TOOLBAR_STATE_CLASSES } from '../constants';
import { isColumnFilter } from './filters';

export function createColumnStateClasses() {
  return flatMap(new Array(100), (_, index) => map(entries(COLUMN_STATE_CLASSES), ([state, bgColor]) => `
    .${getColumnStateClass(state, index)} > tbody > tr > .relatable__table-body-cell:nth-of-type(${index + 1}) {
      background-color: ${bgColor};
    }
  `));
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

export function getTableStateClasses(columns: any[]) {
  const columnClasses = flatMap(columns, (column, index) => map(keys(COLUMN_STATE_CLASSES), (state) => isValidColumnState(column, state)
    ? getColumnStateClass(state, index + 1) // @todo: + 1 due to table numbers
    : '',
  ));

  return join(compact(columnClasses), ' ');
}

function isValidColumnState(column: any, state: string) {
  switch (state) {
    case 'filterValue':
      return isColumnFilter(column[state]);
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

function getColumnStateClass(state: string, index: number) {
  return `relatable__table-column--${kebabCase(state)}-${index + 1}`;
}

function getRowStateClass(state: string) {
  return `relatable__table-row--${kebabCase(state)}`;
}
