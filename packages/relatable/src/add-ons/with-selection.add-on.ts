import { useMemo } from 'react';
// @ts-ignore
import { useRowSelect } from 'react-table'; // @todo: missing typings
import { values } from 'lodash-es';

import { SelectSetter, TableAddOnReturn } from '../relatable.types';

export interface IWithSelectionOptions {
  onSelectionChange?: SelectSetter;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useRowSelect
  selectedRows?: string[];
}

export default function withSelection(options: IWithSelectionOptions = {}): TableAddOnReturn {
  const { selectedRows, onSelectionChange, ...tableParams } = options;
  const stateParams = selectedRows
    ? { selectedRows }
    : {};

  return [
    withSelection.name,
    () => useMemo(() => ({
      ...tableParams,
      onCustomSelectionChange: onSelectionChange,
    }), [onSelectionChange, ...values(tableParams)]),
    () => useMemo(() => stateParams, [selectedRows]),
    useRowSelect,
  ];
}
