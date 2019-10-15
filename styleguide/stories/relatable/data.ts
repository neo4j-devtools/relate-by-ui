import { loremIpsum } from 'lorem-ipsum';

import { DateCell, JSONCell, NumberCell, TextCell } from '../../../packages/relatable/src';

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
export const DISABLED_COLUMNS: any[] = [
  {
    Header: 'Foo',
    accessor: 'foo',
    disableFilters: true,
  },
  {
    Header: 'Bar',
    accessor: 'bar',
    disableSorting: true,
  },
  {
    Header: 'Baz',
    accessor: 'baz',
    disableGrouping: true,
  },
];
export const CUSTOM_COLUMNS: any[] = [
  {
    Header: 'Foo2',
    accessor: 'foo2',
    Cell: TextCell,
  },
  {
    Header: 'Bar2',
    accessor: 'bar2',
    Cell: NumberCell,
  },
  {
    Header: 'Baz2',
    accessor: 'baz2',
    Cell: DateCell,
  },
  {
    Header: 'Bam2',
    accessor: 'bam',
    Cell: JSONCell,
  },
];
const GroupableCell = ({ cell }: any) => `${cell.value}`;
export const SPECIAL_COLUMNS: any[] = [
  {
    Header: 'Foo3',
    accessor: 'foo3',
    Cell: GroupableCell,
  },
];
export const SUPER_COLUMNS = FLAT_COLUMNS.concat(CUSTOM_COLUMNS, SPECIAL_COLUMNS);
export const ROWS: any[] = makeData(FLAT_COLUMNS, 100);
export const CUSTOM_ROWS: any[] = makeData(CUSTOM_COLUMNS, 100);
export const SUPER_ROWS: any[] = makeData(SUPER_COLUMNS, 100);

function makeData(columns: any[], count: number = 20) {
  // @ts-ignore
  const rows = [];

  while (rows.length < count) {
    rows.push(columns.reduce((agg, columns) => Object.assign(agg, {
      [columns.accessor]: generateColumnValue(columns),
    }), {}));
  }

  return rows;
}

function generateColumnValue(column: any) {
  switch (column.Cell) {
    case DateCell:
      return Math.floor(Date.now() - (Math.random() * 100000));
    case JSONCell:
      return { foo: loremIpsum({ count: 4, units: 'words' }) };
    case NumberCell:
      return Math.random() * 100000;
    case GroupableCell:
      return ['MUNKEY', 'DUNKEY', 'FUNKEY'][Math.floor(Math.random() * 3)];
    case TextCell:
    default:
      return loremIpsum({ count: 4, units: 'words' });
  }
}
