import React from 'react';
import { Table as SemanticTable } from 'semantic-ui-react';
import { map } from 'lodash-es';

import { useRelatableStateContext } from '../../states';
import arrayHasItems from '../../utils/array-has-items';
import getSemanticTableProps from '../../utils/get-semantic-table-props';
import isLastIndex from '../../utils/is-last-index';
import getRowNumber from '../../utils/get-row-number';

import { StyleWrapper } from './table.styled';
import ColumnActions from '../column-actions';

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

export default function Table({ loading, expectedRowCount, ...rest }: ITableProps): JSX.Element {
  const {
    getTableProps,
    headerGroups,
    pageIndex = 0,
    pageSize = 1,
    _rowsToUse: rows, // @todo: handle this more gracefully inside addOns
    prepareRow,
    availableActions,
  } = useRelatableStateContext();
  const semanticTableProps = getSemanticTableProps(rest);

  return (
    <StyleWrapper className="relatable__style-wrapper">
      <SemanticTable {...getTableProps()} {...semanticTableProps} className="relatable__table">
        <SemanticTable.Header>
          {map(headerGroups, (headerGroup, index: number) => (
            <SemanticTable.Row {...headerGroup.getHeaderGroupProps()}>
              <SemanticTable.HeaderCell className="relatable__table-header-cell relatable__table-row-number" collapsing>
                {' '}
              </SemanticTable.HeaderCell>
              {map(headerGroup.headers, (column: any) => (
                <SemanticTable.HeaderCell
                  {...column.getHeaderProps()}
                  className="relatable__table-header-cell">
                  {isLastIndex(headerGroups, index) && arrayHasItems(availableActions)
                    ? <ColumnActions column={column} />
                    : column.render('Header')
                  }
                </SemanticTable.HeaderCell>
              ))}
            </SemanticTable.Row>
          ))}
        </SemanticTable.Header>
        <SemanticTable.Body>
          {map(rows, (row, index: number) =>
            prepareRow(row) || (
              <SemanticTable.Row {...row.getRowProps()} className="relatable__table-body-row">
                <SemanticTable.Cell className="relatable__table-body-cell relatable__table-row-number" collapsing>
                  {getRowNumber(index, pageIndex, pageSize)}
                </SemanticTable.Cell>
                {!loading && map(row.cells, (cell, i) => (
                  <SemanticTable.Cell
                    {...cell.getCellProps()}
                    className="relatable__table-body-cell"
                    key={`cell-${i}`}>
                    {cell.render('Cell')}
                  </SemanticTable.Cell>
                ))}
                {loading && <SemanticTable.Cell className="relatable__table-body-cell" colSpan="100%">
                  <div className="relatable__table-body-cell-loader"/>
                </SemanticTable.Cell>}
              </SemanticTable.Row>
            ),
          )}
          {/* render empty rows when passed expectedRowCount and no data */}
          {!arrayHasItems(rows) && loading && expectedRowCount
            ? map(Array(expectedRowCount), (_, index) => (
              <SemanticTable.Row key={`empty-row-${index}`} className="relatable__table-body-row">
                <SemanticTable.Cell className="relatable__table-body-cell" colSpan="100%">
                  <div className="relatable__table-body-cell-loader"/>
                </SemanticTable.Cell>
              </SemanticTable.Row>
            ))
            : null
          }
        </SemanticTable.Body>
      </SemanticTable>
    </StyleWrapper>
  );
}
