import { assign, reduce } from 'lodash-es';
import { loremIpsum } from 'lorem-ipsum';

import { DateCell, JSONCell, NumberCell, TextCell } from './components/renderers';

export const DEFAULT_PAGE_SIZE_OPTIONS = [10, 20, 30, 40, 50];
export const DEFAULT_AGGREGATE_OPTIONS = ['sum', 'count'];
export const ON_STATE_CHANGE_TRIGGERS = ['pageIndex', 'pageSize', 'sortBy', 'filters'];
export const SEMANTIC_TABLE_PROPS = [
  'attached',
  'basic',
  'className',
  'collapsing',
  'color',
  'compact',
  'definition',
  'fixed',
  'inverted',
  'padded',
  'singleLine',
  'size',
  'striped',
  'structured',
  'textAlign',
  'verticalAlign',
];

export const TOOLBAR_STATE_CLASSES = {
  isGrouped: 'rgb(245,166,35)',
  filterValue: 'rgb(253,118,110)',
  isSorted: 'rgb(109,206,157)',
  isSelected: 'rgb(104,189,244)', // @todo: this is not implemented
};

export const COLUMN_STATE_CLASSES = {
  isSorted: 'rgba(109,206,157,0.10)',
  filterValue: 'rgba(253,118,110,0.10)',
  isGrouped: 'rgba(245,166,35,0.10)',
  isSelected: 'rgba(104,189,244,0.10)', // @todo: this is not implemented
};

/**
 * DUMMY DATA BELOW
 */
export const COLUMNS: any[] = [
  {
    Header: 'Apa',
    columns: [
      {
        Header: 'Foo',
        accessor: 'foo',
      },
      {
        Header: 'Bar',
        accessor: 'bar',
      },
    ],
  },
  {
    Header: 'Baz',
    accessor: 'baz',
  },
];
export const FLAT_COLUMNS: any[] = [
  {
    Header: 'Foo',
    accessor: 'foo',
  },
  {
    Header: 'Bar',
    accessor: 'bar',
  },
  {
    Header: 'Baz',
    accessor: 'baz',
  },
];
export const CUSTOM_COLUMNS: any[] = [
  {
    Header: 'Foo',
    accessor: 'foo',
    Cell: TextCell,
  },
  {
    Header: 'Bar',
    accessor: 'bar',
    Cell: NumberCell,
  },
  {
    Header: 'Baz',
    accessor: 'baz',
    Cell: DateCell,
  },
  {
    Header: 'Bam',
    accessor: 'bam',
    Cell: JSONCell,
  },
];
export const ROWS: any[] = makeData(FLAT_COLUMNS, 100);
export const CUSTOM_ROWS: any[] = makeData(CUSTOM_COLUMNS, 100);

function makeData(columns: any[], count: number = 20) {
  // @ts-ignore
  const rows = [];

  while (rows.length < count) {
    rows.push(reduce(columns, (agg, columns) => assign(agg, {
      [columns.accessor]: generateColumnValue(columns),
    }), {}));
  }

  return rows;
}

function generateColumnValue(column: any) {
  switch (column.BodyCell) {
    case DateCell:
      return Math.floor(Date.now() - (Math.random() * 100000));
    case JSONCell:
      return { foo: loremIpsum({ count: 4, units: 'words' }) };
    case NumberCell:
      return Math.random() * 100000;
    case TextCell:
    default:
      return loremIpsum({ count: 4, units: 'words' });
  }
}
