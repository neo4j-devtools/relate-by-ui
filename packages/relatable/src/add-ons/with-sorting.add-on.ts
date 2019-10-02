import { useCallback, useMemo, useState } from 'react';
import { useSortBy } from 'react-table';
import { filter, values } from 'lodash-es';

import { SORT_ACTIONS, SortSetter, TableAddOnReturn } from '../relatable.types';

export interface IWithSortingOptions {
  onSortChange?: SortSetter;

  // react-table API https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useSortBy
  manualSorting?: boolean;
  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useSortBy
  sortBy?: any[];
}

export default function withSorting(options: IWithSortingOptions = {}): TableAddOnReturn {
  const { sortBy: theirSortBy, onSortChange, ...tableParams } = options;
  const [ourSortBy, setOurSortBy] = useState<any[]>([]);
  const sortBy = theirSortBy || ourSortBy;
  const stateParams = { sortBy };
  const onCustomSortChange: SortSetter = useCallback((column, action) => {
    if (onSortChange) {
      onSortChange(column, action);
      return;
    }

    const withoutColumn = filter(ourSortBy, ({ id }) => id !== column.id);

    if (action === SORT_ACTIONS.SORT_CLEAR) {
      setOurSortBy(withoutColumn);
      return;
    }

    setOurSortBy([...withoutColumn, { id: column.id, desc: action === SORT_ACTIONS.SORT_DESC }]);
  }, [onSortChange, ourSortBy, setOurSortBy]);

  return [
    withSorting.name,
    () => useMemo(() => ({
      ...tableParams,
      onCustomSortChange,
    }), [onCustomSortChange, ...values(tableParams)]),
    () => useMemo(() => stateParams, [sortBy]),
    useSortBy,
  ];
}
