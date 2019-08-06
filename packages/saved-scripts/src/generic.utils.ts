// @todo: move these to a new home

export function isNonEmptyString(toTest: string) {
  return Boolean(toTest);
}

export function arrayHasItems(arr: any[]) {
  return arr.length > 0;
}
