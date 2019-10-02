import { useCallback, useMemo, useState } from 'react';
// @ts-ignore
import { useRowSelect } from 'react-table'; // @todo: missing typings
import { map, values, uniq, without, join, flatMap } from 'lodash-es';

import { SelectSetter, TableAddOnReturn } from '../relatable.types';
import arrayHasItems from '../utils/array-has-items';

export interface IWithSelectionOptions {
  onSelectionChange?: SelectSetter;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useRowSelect
  selectedRowPaths?: string[];
}

export default function withSelection(options: IWithSelectionOptions = {}): TableAddOnReturn {
  const { selectedRowPaths: theirSelectedRowPaths, onSelectionChange, ...tableParams } = options;
  const [ourSelectedRowPaths, setOurSelectedRowPaths] = useState<any[]>([]);
  const selectedRowPaths = theirSelectedRowPaths || ourSelectedRowPaths;
  const stateParams = { selectedRowPaths };
  const onCustomSelectionChange: SelectSetter = useCallback((rows, select) => {
    if (onSelectionChange) {
      onSelectionChange(rows, select);
      return;
    }

    const newPaths = flatMap(rows, ({ path, subRows }) => arrayHasItems(subRows)
      // this is kinda funky but it's what react-table is doing atm... ¯\(°_o)/¯
      ? map(subRows, (subRow) => join(subRow.path, '.'))
      : [join(path, '.')]
    );

    if (select) {
      setOurSelectedRowPaths(uniq([...selectedRowPaths, ...newPaths]));
      return;
    }

    setOurSelectedRowPaths(without(selectedRowPaths, ...newPaths));
  }, [onSelectionChange, selectedRowPaths]);

  return [
    withSelection.name,
    () => useMemo(() => ({
      ...tableParams,
      onCustomSelectionChange,
    }), [onCustomSelectionChange, ...values(tableParams)]),
    () => useMemo(() => stateParams, [selectedRowPaths]),
    useRowSelect,
  ];
}
