import React from 'react';
import { Table as SemanticTable } from 'semantic-ui-react';
import { map } from 'lodash-es';

import { BodyCell, IRowProps } from './index';
import { useRelatableStateContext } from '../../states';
import getRowNumber from '../../utils/get-row-number';

export default function Table({ row }: IRowProps): JSX.Element {
  const {
    getTableProps,
    headerGroups,
    prepareRow,
  } = useRelatableStateContext();
  const rows = row.subRows;

  return (
    <SemanticTable {...getTableProps()} compact="very" striped className="relatable__table">
      <SemanticTable.Header>
        {map(headerGroups, (headerGroup) => (
          <SemanticTable.Row {...headerGroup.getHeaderGroupProps()}>
            <SemanticTable.HeaderCell className="relatable__table-header-cell relatable__table-row-actions-cell">
              {' '}
            </SemanticTable.HeaderCell>
            {map(headerGroup.headers, (column: any) => (
              <SemanticTable.HeaderCell
                {...column.getHeaderProps()}
                className="relatable__table-header-cell">
                {column.render('Header')}
              </SemanticTable.HeaderCell>
            ))}
          </SemanticTable.Row>
        ))}
      </SemanticTable.Header>
      <SemanticTable.Body>
        {map(rows, (row, index: number) =>
          prepareRow(row) || (
            <SemanticTable.Row {...row.getRowProps()} className="relatable__table-body-row">
              <SemanticTable.Cell className="relatable__table-body-cell relatable__table-row-actions-cell">
                <span className="relatable__table-row-number">{getRowNumber(index, 0, 1)}</span>
              </SemanticTable.Cell>
              {map(row.cells, (cell, i) => <BodyCell cell={cell} key={`cell-${i}`}/>)}
            </SemanticTable.Row>
          ),
        )}
      </SemanticTable.Body>
    </SemanticTable>
  );
}
