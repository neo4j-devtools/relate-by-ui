import React, { useCallback, useEffect, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Relatable, {
  withFilters,
  withSorting,
  withPagination,
} from '../../../packages/relatable/src';
import { COLUMNS, ROWS } from '../../../packages/relatable/src/constants';

const stories = storiesOf('Relatable', module);
const onStateChangeHandler = action('onStateChange');

stories.add(
  'Relatable default',
  () => (
    <Relatable
      columns={COLUMNS}
      data={ROWS}/>
  ),
);

stories.add(
  'Relatable loading',
  () => (
    <Relatable
      loading
      columns={COLUMNS}
      data={ROWS}/>
  ),
);

stories.add(
  'Relatable loading no data',
  () => (
    <Relatable
      loading
      columns={COLUMNS}
      data={[]}/>
  ),
);

stories.add(
  'Relatable loading no data expectedRowCount',
  () => (
    <Relatable
      loading
      expectedRowCount={10}
      columns={COLUMNS}
      data={[]}/>
  ),
);

stories.add(
  'Relatable paginated',
  () => (
    <Relatable
      paginated
      columns={COLUMNS}
      data={ROWS}/>
  ),
);

stories.add(
  'Relatable sortable',
  () => (
    <Relatable
      sortable
      columns={COLUMNS}
      data={ROWS}/>
  ),
);

stories.add(
  'Relatable filterable',
  () => (
    <Relatable
      filterable
      columns={COLUMNS}
      data={ROWS}/>
  ),
);

stories.add(
  'Relatable filterable sortable paginated',
  () => (
    <Relatable
      filterable
      sortable
      paginated
      columns={COLUMNS}
      data={ROWS}/>
  ),
);

stories.add(
  'Relatable from hook',
  () => (
    <FromHook
      columns={COLUMNS}
      data={ROWS}/>
  ),
);

stories.add(
  'Relatable from hook async data',
  () => (
    <FromHookAsync
      columns={COLUMNS}
      data={ROWS}/>
  ),
);


/**
 * Sample Components
 */
function FromHook({ columns, data }: any) {
  const addOns = [
    withFilters(),
    withSorting(),
    withPagination(),
  ];

  if (!Relatable) return null;

  return <Relatable columns={columns} data={data} addOns={addOns} onStateChange={console.log}>
    {({ Table, Filters, Paginator }) => (
      <>
        <Filters/>
        <Table/>
        <Paginator/>
      </>
    )}
  </Relatable>;
}

const PAGE_SIZE = 20;

function FromHookAsync({ columns, data }: any) {
  const [pageSize, onSetPageSize] = useState(PAGE_SIZE);
  const [pageIndex, onSetPage] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({});
  const [sortBy, setSortBy] = useState<any[]>([]);
  const [asyncData, setAsyncRows] = useState<any[]>([]);
  const pageCount = Math.ceil(data.length / pageSize);
  const onSetFilter = useCallback(({id}, val) => {
    if (val === undefined) {
      const clone = { ...filters };

      delete clone[id];

      setFilters(clone);
      return;
    }

    setFilters({
      ...filters,
      [id]: val,
    });
  }, [filters]);
  const onSetSort = useCallback((column) => {
    const withoutColumn = sortBy.filter(({ id }) => id !== column.id);

    if (column.isSorted && column.sortDescFirst !== column.isSortedDesc) {
      setSortBy(withoutColumn);
      return;
    }

    setSortBy([...withoutColumn, {
      id: column.id,
      desc: !column.isSorted
        ? Boolean(column.sortDescFirst)
        : !Boolean(column.sortDescFirst),
    }]);
  }, [sortBy]);

  const addOns = [
    withFilters({ filters, onSetFilter }),
    withSorting({ sortBy, onSetSort }),
    withPagination({ manualPagination: true, pageCount, pageSize, onSetPageSize, pageIndex, onSetPage }),
  ];

  const onStateChange = useCallback((state) => {
    const { pageIndex, pageSize } = state;

    onStateChangeHandler(state);
    setLoading(true);
    setAsyncRows([]);

    setTimeout(() => {
      setAsyncRows(getPageData(data, pageIndex, pageSize));
      setLoading(false);
    }, 2000);
  }, []);

  if (!Relatable) return null;

  return <Relatable columns={columns} data={asyncData} addOns={addOns} onStateChange={onStateChange}>
    {({ Table, Filters, Paginator }) => (
      <>
        <Filters/>
        <Table loading={loading} expectedRowCount={pageSize} setSort={() => null}/>
        <Paginator/>
      </>
    )}
  </Relatable>;
}

function getPageData(data: any[], pageIndex: number, pageSize: number) {
  const start = pageIndex * pageSize;
  const end = start + pageSize;

  return data.slice(start, end);
}

