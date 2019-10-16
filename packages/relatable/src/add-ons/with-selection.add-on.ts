import { useCallback, useMemo, useState } from 'react';
import {
  IdType,
  useRowSelect,
  UseRowSelectInstanceProps,
  UseRowSelectOptions,
  UseRowSelectState,
} from 'react-table';
import { map, values, uniq, without, join, flatMap } from 'lodash-es';

import { IRelatableStateInstance, SelectSetter, TableAddOnReturn } from '../relatable.types';
import arrayHasItems from '../utils/array-has-items';

export interface IWithSelectionOptions<Data extends object = any> extends UseRowSelectOptions<Data> {
  onSelectionChange?: SelectSetter<Data>;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useRowSelect
  selectedRowPaths?: IdType<Data>[];
}

export interface IWithSelectionState<Data extends object = any> extends UseRowSelectState<Data> {}

export interface IWithSelectionInstance<Data extends object = any> extends UseRowSelectInstanceProps<Data>, IRelatableStateInstance<Data, IWithSelectionState<Data>> {
  onCustomSelectionChange: SelectSetter<Data>;
}

export default function withSelection<Data extends object = any>(options: IWithSelectionOptions<Data> = {}): TableAddOnReturn {
  const { selectedRowPaths: theirSelectedRowPaths, onSelectionChange, ...tableParams } = options;
  const [ourSelectedRowPaths, setOurSelectedRowPaths] = useState<IdType<Data>[]>([]);
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
      : [join(path, '.')],
    );

    if (select) {
      setOurSelectedRowPaths(uniq([...selectedRowPaths, ...newPaths]));
      return;
    }

    setOurSelectedRowPaths(without(selectedRowPaths, ...newPaths));
  }, [onSelectionChange, selectedRowPaths]);

  return [
    withSelection.name,
    null,
    () => true,
    () => useMemo((): Partial<IWithSelectionInstance> => ({
      ...tableParams,
      onCustomSelectionChange,
    }), [onCustomSelectionChange, ...values(tableParams)]),
    () => useMemo(() => stateParams, [selectedRowPaths]),
    useRowSelect,
  ];
}
