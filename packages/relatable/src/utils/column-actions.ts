import { some } from 'lodash-es';

import { RelatableAction } from '../relatable.types';

import arrayHasItems from './array-has-items';
import { getRelatableAction } from './relatable-actions';

export function columnHasActions(column: any, availableActions: RelatableAction[]): boolean {
  return arrayHasItems(availableActions) && some(availableActions, (action) => columnHasAction(column, action));
}

export function isColumnActionAvailable(column: any, actions: RelatableAction[], actionName: string): boolean {
  const action = getRelatableAction(actions, actionName);

  if (!action) return false;

  const [, predicate] = action;

  return predicate(column);
}

export function columnHasAction(column: any, action: RelatableAction): boolean {
  const [, predicate] = action;

  return predicate(column);
}
