import React from 'react';
import { Icon } from 'semantic-ui-react';
import { useStateValue } from '../constants';
import isDefined from '../utils/is-defined';

export default function SortToggle({ column }: any) {
  const { onSetCustomSort } = useStateValue();
  const columnProps = column.getSortByToggleProps();
  const clickHandler = isDefined(onSetCustomSort)
    ? () => onSetCustomSort(column)
    : columnProps.onClick;

  let name = 'sort';

  if (column.isSorted) {
    name = column.isSortedDesc
      ? `${name} down`
      : `${name} up`;
  }

  return <Icon name={name} {...columnProps} onClick={clickHandler} />;
}
