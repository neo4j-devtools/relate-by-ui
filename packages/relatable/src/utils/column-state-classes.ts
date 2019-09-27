import { compact, entries, flatMap, join, kebabCase, keys, map } from 'lodash-es';

import { COLUMN_STATE_CLASSES, TOOLBAR_STATE_CLASSES } from '../constants';

export function createColumnStateClasses() {
  return flatMap(new Array(100), (_, index) => map(entries(COLUMN_STATE_CLASSES), ([state, bgColor]) => `
    .${getColumnStateClass(state, index)} > tbody > tr > .relatable__table-body-cell:nth-of-type(${index + 1}) {
      background-color: ${bgColor};
    }
  `));
}

export function createToolbarStateClasses() {
  return map(entries(TOOLBAR_STATE_CLASSES), ([state, bgColor]) => `
    /* need to win over semantic specificity */
    .menu .label.${getToolbarStateClass(state)} {
      background-color: ${bgColor};
    }
  `)
}

export function getTableStateClasses(columns: any[]) {
  const columnClasses = flatMap(columns, (column, index) => map(keys(COLUMN_STATE_CLASSES), (state) => column[state]
    ? getColumnStateClass(state, index + 1) // @todo: + 1 due to table numbers
    : '',
  ));

  return join(compact(columnClasses), ' ');
}

export function getToolbarStateClass(state: string) {
  return `relatable__toolbar-label--${kebabCase(state)}`;
}

function getColumnStateClass(state: string, index: number) {
  return `relatable__table--${kebabCase(state)}-${index + 1}`;
}
