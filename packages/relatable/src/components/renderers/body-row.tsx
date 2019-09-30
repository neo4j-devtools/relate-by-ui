import React, { useCallback } from 'react';

import { BodyCell, IRowProps } from './index';
import { Icon, Table as SemanticTable } from 'semantic-ui-react';
import { map } from 'lodash-es';
import { useRelatableStateContext } from '../../states';

export default function BodyRow(props: IRowProps) {
  const { row, rowNumber, loading } = props;
  const { isExpanded } = row;

  return <>
    <SemanticTable.Row {...row.getRowProps()} className="relatable__table-body-row">
      <SemanticTable.Cell className="relatable__table-body-cell relatable__table-row-actions-cell">
        <RowActions row={row}/>
        <span className="relatable__table-row-number">{rowNumber}</span>
      </SemanticTable.Cell>
      {!loading && map(row.cells, (cell, i) => <BodyCell cell={cell} key={`cell-${i}`}/>)}
      {loading && <SemanticTable.Cell className="relatable__table-body-cell" colSpan="100%">
        <div className="relatable__table-body-cell-loader"/>
      </SemanticTable.Cell>}
    </SemanticTable.Row>
    {!loading && isExpanded && <ExpandedRow {...props}/>}
  </>;
}

function RowActions({ row }: any) {
  if (!row.canExpand) return null;

  const { onCustomExpandedChange } = useRelatableStateContext();
  const onClick = useCallback(() => {
    if (onCustomExpandedChange) {
      onCustomExpandedChange(row, !row.isExpanded);

      return;
    }

    row.toggleExpanded();
  }, [onCustomExpandedChange, row]);

  return <span className="relatable__table-row-actions">
    {row.canExpand && <span className="relatable__row-expander" onClick={onClick}>
      <Icon name={row.isExpanded ? 'caret down' : 'caret right'}/>
    </span>}
  </span>;
}

function ExpandedRow(props: IRowProps) {
  const { row } = props;
  const { CustomExpandedRowComponent } = useRelatableStateContext();
  const rowProps = row.getRowProps();

  return <SemanticTable.Row
    {...rowProps}
    key={`${rowProps.key}-expanded`}
    className="relatable__table-body-row relatable__table-body-row--expanded">
    <SemanticTable.Cell className="relatable__table-body-cell" colSpan="100%">
      <CustomExpandedRowComponent {...props}/>
    </SemanticTable.Cell>
  </SemanticTable.Row>;
}
