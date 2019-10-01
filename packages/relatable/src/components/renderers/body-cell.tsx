import React from 'react';
import { Table as SemanticTable } from 'semantic-ui-react';

import { ICellProps } from './index';

export default function BodyCell({ cell }: ICellProps) {
  const { render, row } = cell;

  return <SemanticTable.Cell
    {...cell.getCellProps()}
    className="relatable__table-body-cell">
    {(!row.isAggregated || cell.isGrouped) && render('Cell')}
    {row.isAggregated && !cell.isGrouped && render('Aggregated')}
  </SemanticTable.Cell>;
}
