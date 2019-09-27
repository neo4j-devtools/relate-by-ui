Relate by UI - Relatable
--------------------
An opinionated [react-table](https://github.com/tannerlinsley/react-table) implementation.

This package is part of the [Relate by UI Kit](http://neo4j-apps.github.io/relate-by-ui), an opiniated collection of components and styles based on Semantic UI.

This package provides a thin abstraction over the [react-table API](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md) to facilitate creating performant data tables.

---

## Table of Contents
1. [Basic Usage](#basic-usage)
2. [Advanced Usage](#advanced-usage)
3. [Base Components](#base-components)
4. [Add-ons](#add-ons)
4. [Column Enhancements](#column-enhancements)

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
import {ITableProps, IWithFiltersOptions, IWithSortingOptions, IWithPaginationOptions} from '@relate-by-ui/relatable'

export interface IRelatableProps {
  // see https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usetable
  columns: any[];
  data: any[];
  defaultColumn?: any;
  
  // Relatable state change handler
  onStateChange?: (state: any) => any;
  
  // add on options
  paginated?: boolean | IWithPaginationOptions;
  sortable?: boolean | IWithSortingOptions;
  filterable?: boolean | IWithFiltersOptions;
}

// when used without children, Table props are passed along as well
export interface IRelatableBasicProps extends IRelatableProps, ITableProps {
}

export interface IRelatableChildrenProps extends PropsWithChildren<IRelatableProps> {
}

function Relatable(props: IRelatableChildrenProps | IRelatableBasicProps): JSX.Element;
```

### Table
[Source](./src/components/table/table.tsx)

The Table component of the library.

```typescript
export interface ITableProps {
  // used for rendering loading animation and empty rows
  loading?: boolean;
  expectedRowCount?: number;

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
function Toolbar(): JSX.Element;
```

### Pagination
[Source](./src/components/pagination.tsx)

The Pagination component of the library.

```typescript
function Pagination(): JSX.Element;
```

---

## Add-ons
There are currently three add-ons available:
1. [Filterable](#filterable)
2. [Groupable](#groupable)
3. [Sortable](#sortable)
4. [Paginated](#paginated)

Please note that add-ons are ordinal, as defined by the [react-table API](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md), and subject to the [Rules of Hooks](https://reactjs.org/docs/hooks-rules.html).

### Exposed typings
[Source](./src/relatable.types.ts)

```typescript
export type PageSetter = (pageIndex: number) => void;
export type PageSizeSetter = (pageSize: number) => void;
export type FilterSetter = (columns: any[], val?: any) => void;
export type SortSetter = (column: any, action: SORT_ACTIONS) => void;
export enum SORT_ACTIONS {
  SORT_CLEAR = 'SORT_CLEAR',
  SORT_DESC = 'SORT_DESC',
  SORT_ASC = 'SORT_ASC',
}
export type GroupSetter = (column: any, action: GROUP_ACTIONS) => void;
export enum GROUP_ACTIONS {
  GROUP_CLEAR = 'GROUP_CLEAR',
  GROUP_SET = 'GROUP_SET',
}
```

### Filterable
[react-table hook](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useFilters)

[Source](./src/add-ons/with-filters.add-on.ts)

Enables filtering of table. Please ensure the [Toolbar](#toolbar) component is rendered in advanced use cases.

#### Parameters:
```typescript
import { IFilterFieldProps, FilterSetter } from '@relate-by-ui/relatable';

export interface IWithFiltersOptions {
  defaultFilter?: React.FC<IFilterFieldProps>;
  onFilterChange?: FilterSetter;
  
  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useFilters
  filters?: any;
}
```

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
import { ICellProps, GroupSetter } from '@relate-by-ui/relatable';

export interface IWithGroupingOptions {
  defaultAggregate?: string[] | string | ((values: any[]) => any);
  defaultAggregateCell?: React.FC<ICellProps>;
  onGroupChange?: GroupSetter;

  // react-table API https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useGroupBy
  manualGroupBy?: boolean;
  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useGroupBy
  groupBy?: string[];
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
import {SortSetter} from '@relate-by-ui/relatable';

export interface IWithSortingOptions {
  onSortChange?: SortSetter;

  // react-table API https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useSortBy
  manualSorting?: boolean;
  // react-table state override https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#useSortBy
  sortBy?: any[];
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

### Paginated
[react-table hook](https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usePagination)

[Source](./src/add-ons/with-pagination.add-on.ts)

Enables pagination of table. Please ensure the [Pagination](#pagination) component is rendered in advanced use cases.

#### Parameters:
```typescript
import {PageSetter, PageSizeSetter} from '@relate-by-ui/relatable';

export interface IWithPaginationOptions {
  onPageChange?: PageSetter;
  onPageSizeChange?: PageSizeSetter;
  pageSizeOptions?: number[];
  
  // react-table state overrides https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usePagination
  pageSize?: number;
  pageIndex?: number;
  
  // react-table API https://github.com/tannerlinsley/react-table/blob/master/docs/api.md#usePagination
  pageCount?: number;
  manualPagination?: boolean;
  disablePageResetOnDataChange?: boolean;
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
