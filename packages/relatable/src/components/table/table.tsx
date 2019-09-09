import React from 'react';
import { Table as SemanticTable } from 'semantic-ui-react';
import { map } from 'lodash-es';

import arrayHasItems from '../../utils/array-has-items';
import { useStateValue } from '../../constants';

import './table.css';
import SortToggle from '../sort-toggle';

export interface ITableProps {
  loading?: boolean;
  expectedRowCount?: number;
}

export default function Table({ loading, expectedRowCount }: ITableProps) {
  const {
    getTableProps,
    headerGroups,
    _rowsToUse: rows, // @todo: handle this more gracefully inside addOns
    prepareRow,
  } = useStateValue();

  // Render the UI for your table
  return (
    <SemanticTable {...getTableProps()} celled className="relatable">
      <SemanticTable.Header>
        {headerGroups.map((headerGroup: any) => (
          <SemanticTable.Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              <SemanticTable.HeaderCell {...column.getHeaderProps()}>
                {/* @todo: how to handle column.getSortByToggleProps() etc? */}
                {column.render('Header')}
                {column.canSort && <SortToggle column={column} />}
              </SemanticTable.HeaderCell>
            ))}
          </SemanticTable.Row>
        ))}
      </SemanticTable.Header>
      <SemanticTable.Body>
        {map(rows, (row: any) =>
          prepareRow(row) || (
            <SemanticTable.Row {...row.getRowProps()} className="relatable__body-row">
              {!loading && row.cells.map((cell: any, i: number) => (
                <SemanticTable.Cell
                  {...cell.getCellProps()}
                  className="relatable__body-cell"
                  key={`cell-${i}`}>
                  {cell.render('Cell')}
                </SemanticTable.Cell>
              ))}
              {loading && <SemanticTable.Cell className="relatable__body-cell" colSpan="100%">
                <div className="relatable__body-cell-loader"/>
              </SemanticTable.Cell>}
            </SemanticTable.Row>
          ),
        )}
        {!arrayHasItems(rows) && loading && expectedRowCount
          ? map(Array(expectedRowCount), (_, index) => (
            <SemanticTable.Row key={`empty-row-${index}`} className="relatable__body-row">
              <SemanticTable.Cell className="relatable__body-cell" colSpan="100%">
                <div className="relatable__body-cell-loader"/>
              </SemanticTable.Cell>
            </SemanticTable.Row>
          ))
          : null
        }
      </SemanticTable.Body>
    </SemanticTable>
  );
}
