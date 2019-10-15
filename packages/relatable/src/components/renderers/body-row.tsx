import React, { useCallback } from 'react';
import { Label, Table as SemanticTable } from 'semantic-ui-react';
import { map } from 'lodash-es';

import { useRelatableStateContext } from '../../states';
import { getRowClasses } from '../../utils/relatable-state-classes';

import { BodyCell, IRowProps } from './index';
import RowActions from './row-actions';
import arrayHasItems from '../../utils/array-has-items';

export default function BodyRow(props: IRowProps) {
  const { row, rowNumber, loading, ...rowProps } = props;
  const { isExpanded } = row;
  const { onCustomExpandedChange, onCustomSelectionChange, getCustomCellColSpan } = useRelatableStateContext();
  const onExpandClick = useCallback(
    () => onCustomExpandedChange([row], !row.isExpanded),
    [onCustomExpandedChange, row],
  );
  const onSelectClick = useCallback(
    (select: boolean) => onCustomSelectionChange([row], select),
    [onCustomSelectionChange, row],
  );

  return <>
    <SemanticTable.Row {...rowProps} className={getRowClasses(row)}>
      <SemanticTable.Cell className="relatable__table-cell relatable__table-body-cell relatable__table-row-actions-cell">
        <Label className="relatable__table-row-number">{rowNumber.toLocaleString()}</Label>
        <RowActions
          rows={[row]}
          onExpandClick={onCustomExpandedChange && arrayHasItems(row.subRows) && onExpandClick}
          onSelectClick={onCustomSelectionChange && onSelectClick}/>
      </SemanticTable.Cell>
      {!loading && map(row.cells, (cell) => <BodyCell cell={cell} getCellColSpan={getCustomCellColSpan} {...cell.getCellProps()}/>)}
      {loading && <SemanticTable.Cell className="relatable__table-cell relatable__table-body-cell" colSpan="100%">
        <div className="relatable__table-body-cell-loader"/>
      </SemanticTable.Cell>}
    </SemanticTable.Row>
    {!loading && isExpanded && <ExpandedRow {...props}/>}
  </>;
}

function ExpandedRow(props: IRowProps) {
  const { row } = props;
  const { CustomExpandedRowComponent } = useRelatableStateContext();
  const rowProps = row.getRowProps();

  return <SemanticTable.Row
    {...rowProps}
    key={`${rowProps.key}-expanded`}
    className="relatable__table-body-row relatable__table-body-expanded-row">
    <SemanticTable.Cell className="relatable__table-body-cell" colSpan="100%">
      <CustomExpandedRowComponent {...props}/>
    </SemanticTable.Cell>
  </SemanticTable.Row>;
}
