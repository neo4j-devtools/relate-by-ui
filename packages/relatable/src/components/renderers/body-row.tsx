import React, { useCallback } from 'react';
import { Checkbox, Icon, Table as SemanticTable } from 'semantic-ui-react';
import { map } from 'lodash-es';

import { useRelatableStateContext } from '../../states';
import { getRowStateClasses } from '../../utils/relatable-state-classes';

import { BodyCell, IRowProps } from './index';

export default function BodyRow(props: IRowProps) {
  const { row, rowNumber, loading } = props;
  const { isExpanded } = row;

  return <>
    <SemanticTable.Row {...row.getRowProps()} className={getRowClasses(row)}>
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

function getRowClasses(row: any) {
  return `relatable__table-body-row ${getRowStateClasses(row)}`;
}

function RowActions({ row }: any) {
  if (!row.canExpand && !row.toggleRowSelected) return null;

  const { onCustomExpandedChange, onCustomSelectionChange } = useRelatableStateContext();
  const onExpandClick = useCallback(() => {
    if (onCustomExpandedChange) {
      onCustomExpandedChange([row], !row.isExpanded);

      return;
    }

    row.toggleExpanded();
  }, [onCustomExpandedChange, row]);
  const onSelectClick = useCallback(({ target }) => {
    if (onCustomSelectionChange) {
      onCustomSelectionChange([row], target.value);

      return;
    }

    row.toggleRowSelected(target.value);
  }, [onCustomSelectionChange, row]);

  return <span className="relatable__table-row-actions">
    {row.canExpand && <span className="relatable__row-expander" onClick={onExpandClick}>
      <Icon name={row.isExpanded ? 'caret down' : 'caret right'}/>
    </span>}
    {row.toggleRowSelected && <Checkbox
      className="relatable__row-selector"
      checked={row.isSelected}
      onChange={onSelectClick}/>}
  </span>;
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
