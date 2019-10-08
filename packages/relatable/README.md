Relate by UI - Relatable
--------------------
This package is part of the [Relate by UI Kit](http://neo4j-apps.github.io/relate-by-ui), an opiniated collection of components and styles based on Semantic UI.

This package provides a thin abstraction over the [react-table API](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md) to facilitate creating performant data tables.

---

## Table of Contents
1. [Basic Usage](#basic-usage)
2. [Advanced Usage](#advanced-usage)
3. [Base Components](#base-components)
4. [Exposed Typings](#exposed-typings)
5. [Add-ons](#add-ons)
6. [Column Enhancements](#column-enhancements)

---
## Basic usage
```typescript jsx
import React from 'react';
import Relatable from '@relate-by-ui/relatable';

// see https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usetable
const COLUMNS = []
const DATA = []

const ATable = () => <Relatable columns={COLUMNS} data={DATA}/>
```

## Advanced usage
```typescript jsx
import React from 'react';
import Relatable, {Table, Toolbar, Pagination} from '@relate-by-ui/relatable';

// see https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usetable
const COLUMNS = []
const DATA = []

const ATable = () => (
  <Relatable columns={COLUMNS} data={DATA}>
    <Toolbar/>
    <Table/>
    <Pagination/>
  </Relatable>
)
```
---

## Base components
There are currently four components available:
- [Relatable (default)](#relatable-default)
- [Table](#table)
- [Toolbar](#toolbar)
- [Pagination](#pagination)

### Relatable (default)
[Source](./src/components/relatable/relatable.tsx)

The base component of the library.

```typescript
import {PropsWithChildren} from 'react';
import {
  StateChangeHandler,
  ITableProps,
  IWithFiltersOptions,
  IWithGroupingOptions,
  IWithSortingOptions,
  IWithPaginationOptions,
  IWithExpandedOptions,
  IWithSelectionOptions
} from '@relate-by-ui/relatable'

export interface IRelatableProps {
  // see https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usetable
  columns: any[];
  data: any[];
  defaultColumn?: any;
  
  // Relatable state change handler
  onStateChange?: StateChangeHandler;
  
  // add on options
  filterable?: boolean | IWithFiltersOptions;
  groupable?: boolean | IWithGroupingOptions;
  sortable?: boolean | IWithSortingOptions;
  expandable?: boolean | IWithExpandedOptions;
  paginated?: boolean | IWithPaginationOptions;
  selectable?: boolean | IWithSelectionOptions;
}

// when used without children, Table props are passed along as well
export interface IRelatableBasicProps extends IRelatableProps, ITableProps {
}

export interface IRelatableChildrenProps extends PropsWithChildren<IRelatableProps> {
}

function Relatable(props: IRelatableChildrenProps | IRelatableBasicProps): JSX.Element;
```

### Table
[Source](src/components/table.tsx)

The Table component of the library.

```typescript
export interface ITableProps {
  // used for rendering loading animation and empty rows
  loading?: boolean;
  expectedRowCount?: number;
  headless?: boolean;

  // semantic ui react props https://react.semantic-ui.com/collections/table/
  attached?: boolean | string;
  basic?: boolean | string;
  className?: string;
  collapsing?: boolean;
  color?: string;
  compact?: boolean | string;
  definition?: boolean;
  fixed?: boolean;
  inverted?: boolean;
  padded?: boolean | string;
  singleLine?: boolean;
  size?: string;
  striped?: boolean;
  structured?: boolean;
  textAlign?: string;
  verticalAlign?: string;
}

function Table({ loading, expectedRowCount, ...rest }: ITableProps): JSX.Element;
```

### Toolbar
[Source](./src/components/toolbar/toolbar.tsx)

The Toolbar component of the library.

```typescript
import {MenuProps} from 'semantic-ui-react';

function Toolbar(props: MenuProps = {}): JSX.Element;
```

### Pagination
[Source](./src/components/pagination.tsx)

The Pagination component of the library.

```typescript
import {PaginationProps} from 'semantic-ui-react';

import {Omit} from './<internal>'

export interface IPaginationProps extends Omit<PaginationProps, 'totalPages'>{
  totalPages?: number;
}

function Pagination(props: IPaginationProps = {}): JSX.Element;
```

---

## Exposed typings
[Source](./src/relatable.types.ts)

```typescript
export type StateChangeHandler = (state: any, changedKeys: string[]) => void;
export type PageSetter = (pageIndex: number) => void;
export type PageSizeSetter = (pageSize: number) => void;
export type GroupSetter = (column: any, group: boolean) => void;
export type ExpandSetter = (rows: any[], expand: boolean) => void;
export type SelectSetter = (rows: any[], select: boolean) => void;

/* Sorting */
export enum SORT_ACTIONS {
  SORT_CLEAR = 'SORT_CLEAR',
  SORT_DESC = 'SORT_DESC',
  SORT_ASC = 'SORT_ASC',
}
export type SortSetter = (column: any, action: SORT_ACTIONS) => void;

/* Filters */
export enum FILTER_ACTIONS {
  FILTER_CLEAR = 'FILTER_CLEAR',
  FILTER_ADD = 'FILTER_ADD',
  FILTER_REMOVE = 'FILTER_REMOVE',
}
export enum FILTER_VARIANTS {
  EQUALS = 'EQUALS',
  ANY_IN = 'ANY_IN'
}
export type ColumnFilter = {
  type: 'column',
  variant?: FILTER_VARIANTS,
  value: any
}
export type SelectedRowsFilter = {
  type: 'selected-rows',
  key: 'path',
  variant: FILTER_VARIANTS.ANY_IN,
  value: any[]
}
export type FilterValue = ColumnFilter | SelectedRowsFilter;
export type FilterFunc = (rows: any[], columnID: any, value: FilterValue) => any[];
export type FilterSetter = (column: any, action: FILTER_ACTIONS, values: FilterValue[]) => void
```

---

## Add-ons
There are currently six add-ons available:
1. [Filterable](#filterable)
2. [Groupable](#groupable)
3. [Sortable](#sortable)
3. [Expandable](#expandable)
4. [Paginated](#paginated)
5. [Selectable](#selectable)

Please note that add-ons are ordinal, as defined by the [react-table API](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md), and subject to the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).

### Filterable
[react-table hook](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useFilters)

[Source](./src/add-ons/with-filters.add-on.ts)

Enables filtering of table. Please ensure the [Toolbar](#toolbar) component is rendered in advanced use cases.

#### Parameters:
```typescript
import { UseFiltersOptions } from 'react-table';
import { IFilterFieldProps, FilterSetter, FilterFunc, FilterValue } from '@relate-by-ui/relatable';

export interface IWithFiltersOptions<Row extends object = any> extends UseFiltersOptions<Row>{
  defaultFilterCell?: React.FC<IFilterFieldProps>;
  defaultFilterFunc?: string | FilterFunc;
  onFilterChange?: FilterSetter;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useFilters
  // with custom filter value array
  filters?: Record<string, FilterValue[]>;
}
```
Please note that we depart sligthly from the react-table state API here to enable multiple filters per column.

#### Usage
```typescript jsx
import React from 'react';
import Relatable, {IWithFiltersOptions} from '@relate-by-ui/relatable';

const options: IWithFiltersOptions = {}
const FilterableTable = () => <Relatable
  columns={[]}
  data={[]}
  filterable={true || options}
/>
```

### Groupable
[react-table hook](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useGroupBy)

[Source](./src/add-ons/with-grouping.add-on.ts)

Enables grouping of table rows. Please ensure the [Toolbar](#toolbar) component is rendered in advanced use cases.

#### Parameters:
```typescript
import { IdType, UseGroupByOptions } from 'react-table';
import { ICellProps, GroupSetter } from '@relate-by-ui/relatable';

export interface IWithGroupingOptions<Row extends object = any> extends UseGroupByOptions<Row> {
  defaultAggregate?: string[] | string | ((values: any[]) => any);
  defaultAggregateCell?: React.FC<ICellProps>;
  onGroupChange?: GroupSetter;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useGroupBy
  groupBy?: IdType<Row>[];
}
```

#### Usage
```typescript jsx
import React from 'react';
import Relatable, {IWithGroupingOptions} from '@relate-by-ui/relatable';

const options: IWithGroupingOptions = {}
const GroupableTable = () => <Relatable
  columns={[]}
  data={[]}
  groupable={true || options}
/>
```

### Sortable
[react-table hook](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useSortBy)

[Source](./src/add-ons/with-sorting.add-on.ts)

Enables sorting of table.

#### Parameters:
```typescript
import { SortingRule, UseSortByOptions } from 'react-table';
import {SortSetter} from '@relate-by-ui/relatable';

export interface IWithSortingOptions<Row extends object = any> extends UseSortByOptions<Row> {
  onSortChange?: SortSetter;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useSortBy
  sortBy?: SortingRule<Row>[];
}
```

#### Usage
```typescript jsx
import Relatable, {IWithSortingOptions} from '@relate-by-ui/relatable';

const options: IWithSortingOptions = {}
const SortableTable = () => <Relatable
  columns={[]}
  data={[]}
  sortable={true || options}
/>
```

### Expandable
[react-table hook](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useExpanded)

[Source](./src/add-ons/with-expanded.add-on.ts)

Enables expanding rows of table.

#### Parameters:
```typescript
import { IdType, UseExpandedOptions } from 'react-table';
import {ExpandSetter, IRowProps} from '@relate-by-ui/relatable';

export interface IWithExpandedOptions<Row extends object = any> extends UseExpandedOptions<Row> {
  onExpandedChange?: ExpandSetter;
  expandedRowComponent?: React.FC<IRowProps>;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useExpanded
  expanded?: IdType<Row>[];
}
```

#### Usage
```typescript jsx
import Relatable, {IWithExpandedOptions} from '@relate-by-ui/relatable';

const options: IWithExpandedOptions = {}
const ExpandableTable = () => <Relatable
  columns={[]}
  data={[]}
  expandable={true || options}
/>
```

### Paginated
[react-table hook](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usePagination)

[Source](./src/add-ons/with-pagination.add-on.ts)

Enables pagination of table. Please ensure the [Pagination](#pagination) component is rendered in advanced use cases.

#### Parameters:
```typescript
import { UsePaginationOptions } from 'react-table';
import {PageSetter, PageSizeSetter} from '@relate-by-ui/relatable';

export interface IWithPaginationOptions<Row extends object = any> extends UsePaginationOptions<Row> {
  onPageChange?: PageSetter;
  onPageSizeChange?: PageSizeSetter;
  pageSizeOptions?: number[];

  // react-table state overrides https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usePagination
  pageSize?: number;
  pageIndex?: number;
}
```

#### Usage
```typescript jsx
import Relatable, {IWithPaginationOptions} from '@relate-by-ui/relatable';

const options: IWithPaginationOptions = {}
const PaginatedTable = () => <Relatable
  columns={[]}
  data={[]}
  paginated={true || options}
/>
```

### Selectable
[react-table hook](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useRowSelect)

[Source](./src/add-ons/with-selection.add-on.ts)

Enables selection of table rows. Please ensure the [Toolbar](#toolbar) component is rendered in advanced use cases.

#### Parameters:
```typescript
import { IdType, UseRowSelectOptions } from 'react-table';
import { SelectSetter } from '@relate-by-ui/relatable';

export interface IWithSelectionOptions<Row extends object = any> extends UseRowSelectOptions<Row> {
  onSelectionChange?: SelectSetter;

  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useRowSelect
  selectedRowPaths?: IdType<Row>[];
}
```

#### Usage
```typescript jsx
import Relatable, {IWithSelectionOptions} from '@relate-by-ui/relatable';

const options: IWithSelectionOptions = {}
const SelectableTable = () => <Relatable
  columns={[]}
  data={[]}
  paginated={true || options}
/>
```

---

## Column Enhancements
The react-table API allows you to specify custom [Cells](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#column-options), [Aggregates](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#column-options-3), and [Filters](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#column-options-2) for columns.
As a courtesy this library provides some standard components for this purpose.
You can create your own simply by copying the implementation.

### Cell values
- [TextCell](./src/components/renderers/cells/text-cell.tsx)
- [DateCell](./src/components/renderers/cells/date-cell.tsx)
- [NumberCell](./src/components/renderers/cells/number-cell.tsx)
- [JSONCell](./src/components/renderers/cells/json-cell.tsx)

### Aggregate cell values
- [ValueAggregate](src/components/renderers/aggregates/value-aggregate.tsx)

### Column filter fields
- [TextFilter](src/components/renderers/filters/text-filter.tsx)
