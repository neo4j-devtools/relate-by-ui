import { assign, reduce } from 'lodash-es';
import { loremIpsum } from 'lorem-ipsum';
import { createContext, useContext } from 'react';
import { TableContext } from './relatable.types';

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
export const ROWS: any[] = makeData(COLUMNS, 100);

function makeData(columns: any[], count: number = 20) {
  // @ts-ignore
  const keys: string[] = ['foo', 'bar', 'baz']; // map(columns, 'accessor');
  const rows = [];

  while (rows.length < count) {
    rows.push(reduce(keys, (agg, key) => assign(agg, {
      [key]: loremIpsum({ count: 4, units: 'words' }),
    }), {}));
  }

  return rows;
}

export const StateContext: TableContext = createContext<any>([{}, () => null]);
export const useStateValue = () => useContext(StateContext);
