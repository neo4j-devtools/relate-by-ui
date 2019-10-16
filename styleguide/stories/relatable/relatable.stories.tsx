import React, { useCallback, useState } from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Relatable, {
  SORT_ACTIONS,
  Pagination,
  Table,
  Toolbar,
  FilterSetter,
  FILTER_ACTIONS,
} from '../../../packages/relatable/src';
import {
  COLUMNS,
  ROWS,
  FLAT_COLUMNS,
  CUSTOM_COLUMNS,
  CUSTOM_ROWS,
  DISABLED_COLUMNS,
  SUPER_ROWS,
  SUPER_COLUMNS,
} from './data';

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
  'Relatable height constrained',
  () => (
    <div style={{ maxHeight: 500, overflow: 'scroll' }}>
      <Relatable
        columns={COLUMNS}
        data={ROWS}/>
    </div>
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
  'Relatable inverted striped compact',
  () => (
    <Relatable
      filterable
      sortable
      paginated
      selectable
      inverted
      striped
      compact
      columns={COLUMNS}
      data={ROWS}/>
  ),
);

stories.add(
  'Relatable sortable paginated flat',
  () => (
    <Relatable
      filterable
      sortable
      paginated
      columns={FLAT_COLUMNS}
      data={ROWS}/>
  ),
);

stories.add(
  'Relatable sortable paginated sort disabled',
  () => (
    <Relatable
      filterable
      groupable
      sortable
      paginated
      expandable
      onStateChange={onStateChangeHandler}
      columns={DISABLED_COLUMNS}
      data={ROWS}/>
  ),
);


stories.add(
  'Relatable with all the stuff',
  () => (
    <Relatable
      filterable
      sortable
      paginated
      selectable
      groupable
      expandable
      onStateChange={onStateChangeHandler}
      columns={SUPER_COLUMNS}
      data={SUPER_ROWS}>
      <Toolbar/>
      <Table/>
      <Pagination/>
    </Relatable>
  ),
);

stories.add(
  'Relatable sortable paginated custom cell renderer',
  () => (
    <Relatable
      onStateChange={onStateChangeHandler}
      columns={CUSTOM_COLUMNS}
      data={CUSTOM_ROWS}/>
  ),
);

stories.add(
  'Relatable async data',
  () => (
    <AsyncTable
      columns={COLUMNS}
      data={ROWS}/>
  ),
);

function AsyncTable({ columns, data }: any) {
  const [loading, asyncData, onStateChange] = useAsyncData(data);
  const [filters, onFilterChange] = useOnFilterChange();
  const [sortBy, onSortChange] = useOnSortChange();
  const [pageIndex, pageSize, pageCount, onPageChange, onPageSizeChange] = useOnPaginationChange(data);
  const filterOptions = {
    filters,
    onFilterChange,
  };
  const sortOptions = {
    sortBy,
    onSortChange,
  };
  const paginationOptions = {
    manualPagination: true,
    pageCount,
    pageSize,
    onPageSizeChange,
    pageIndex,
    onPageChange,
  };

  return <Relatable
    columns={columns}
    data={asyncData}
    filterable={filterOptions}
    sortable={sortOptions}
    paginated={paginationOptions}
    onStateChange={onStateChange}>
      <Toolbar/>
      <Table loading={loading} expectedRowCount={pageSize}/>
      <Pagination/>
  </Relatable>;
}

function useAsyncData(data: any[]): [boolean, any[], (state: any) => void] {
  const [loading, setLoading] = useState(true);
  const [asyncData, setAsyncRows] = useState<any[]>([]);
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

  return [loading, asyncData, onStateChange];
}

const PAGE_SIZE = 20;

function useOnPaginationChange(data: any[]): [number, number, number, (page: number) => void, (size: number) => void] {
  const [pageIndex, onPageChange] = useState(0);
  const [pageSize, onPageSizeChange] = useState(PAGE_SIZE);
  const pageCount = Math.ceil(data.length / pageSize);

  return [pageIndex, pageSize, pageCount, onPageChange, onPageSizeChange];
}

function useOnSortChange(): [any, (column: any, action: string) => void] {
  const [sortBy, setSortBy] = useState<any[]>([]);
  const onSortChange = useCallback((column, action) => {
    const withoutColumn = sortBy.filter(({ id }) => id !== column.id);

    if (action === SORT_ACTIONS.SORT_CLEAR) {
      setSortBy(withoutColumn);
      return;
    }

    setSortBy([...withoutColumn, {
      id: column.id,
      desc: action === SORT_ACTIONS.SORT_DESC,
    }]);
  }, [sortBy]);

  return [sortBy, onSortChange];
}

function useOnFilterChange(): [any, FilterSetter<any>] {
  const [filters, setFilters] = useState({});
  const onFilterChange = useCallback<FilterSetter<any>>((column, action, values) => {
    const clone: any = {...filters};

    if (action === FILTER_ACTIONS.FILTER_CLEAR) {
      delete clone[column.id];

      setFilters(clone);
      return;
    }

    if (action === FILTER_ACTIONS.FILTER_ADD) {
      setFilters({
        ...clone,
        [column.id]: (clone[column.id] || []).concat(values),
      });

      return;
    }

    setFilters({
      ...clone,
      [column.id]: (clone[column.id] || []).filter((value: any) => !values.includes(value)),
    });
  }, [filters]);

  return [filters, onFilterChange];
}

function getPageData(data: any[], pageIndex: number, pageSize: number) {
  const start = pageIndex * pageSize;
  const end = start + pageSize;

  return data.slice(start, end);
}

