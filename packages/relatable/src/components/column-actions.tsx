import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Dropdown, Label, Table as SemanticTable } from 'semantic-ui-react';
import styled from '@emotion/styled';
import { map } from 'lodash-es';

import { SORT_ACTIONS } from '../relatable.types';

import { useRelatableStateContext, useRelatableToolbarContext } from '../states';
import { withFilters, withGrouping, withSorting } from '../add-ons';
import { getColumnStateLabelClasses } from '../utils/relatable-state-classes';
import { isColumnActionAvailable } from '../utils/column-actions';

export interface IColumnActionsProps {
  column: any;
  [key: string]: any;
}

const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export default function ColumnActions({ column, ...headerProps }: IColumnActionsProps) {
  const { availableActions, onCustomSortChange, onCustomGroupingChange } = useRelatableStateContext();
  const [, setRelatableToolbar] = useRelatableToolbarContext();
  const [isOpen, setIsOpen] = useState(false);
  const onClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const blurRef = useCustomBlur(onClose);
  const columnStatesClasses = getColumnStateLabelClasses(column);

  return <SemanticTable.HeaderCell
    {...headerProps}
    colSpan={column.colSpan !== undefined ? column.colSpan : headerProps.colSpan}
    onClick={() => setIsOpen(!isOpen)}
    className="relatable__table-cell relatable__table-header-cell relatable__table-header-cell--has-actions">
    <div className="relatable__column-actions-blur-wrapper" ref={blurRef}>
      <StyledHeader className="custom-dropdown__header">
        <div className="custom-dropdown__header-header">
          <div className="relatable__column-actions-header">
            {column.render('Header')}
            {map(columnStatesClasses, (className) => <Label key={className} className={className}/>)}
          </div>
        </div>
        <i aria-hidden="true" className="dropdown icon"></i>
      </StyledHeader>
      <CustomDropdown isOpen={isOpen} onClick={onClose}>
        {isColumnActionAvailable(column, availableActions, withGrouping.name) && (
          <Dropdown.Item
            text="Group by"
            icon="group"
            onClick={() => onCustomGroupingChange(column, true)}/>
        )}
        {isColumnActionAvailable(column, availableActions, withFilters.name) && (
          <Dropdown.Item
            text="Filter"
            icon="tags"
            onClick={() => setRelatableToolbar(withFilters.name, column)}/>
        )}
        {isColumnActionAvailable(column, availableActions, withSorting.name) && (
          <>
            {availableActions.length > 1 && <Dropdown.Divider/>}
            <Dropdown.Item
              text="Clear sort"
              icon="dont"
              onClick={() => onCustomSortChange(column, SORT_ACTIONS.SORT_CLEAR)}/>
            <Dropdown.Item
              text="Sort Desc"
              icon="sort content descending"
              onClick={() => onCustomSortChange(column, SORT_ACTIONS.SORT_DESC)}/>
            <Dropdown.Item
              text="Sort Asc"
              icon="sort content ascending"
              onClick={() => onCustomSortChange(column, SORT_ACTIONS.SORT_ASC)}/>
          </>
        )}
      </CustomDropdown>
    </div>
  </SemanticTable.HeaderCell>
}

function CustomDropdown({ isOpen, onClick, children }: any) {
  return <div className="ui dropdown fluid relatable__column-actions">
    <Dropdown.Menu open={isOpen} onClick={onClick}>
      {children}
    </Dropdown.Menu>
  </div>
}

function useCustomBlur(onBlur: () => void) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e: Event) => {
      // ugly if-statement to get correct blur behaviour for table headers.
      // necessary as semantic-ui-react doesnt forward refs.
      // @ts-ignore
      if (ref.current && !ref.current.contains(e.target) && e.target !== ref.current.parentElement) {
        onBlur();
      }
    };

    document.addEventListener('mousedown', handler, false);

    return () => document.removeEventListener('mousedown', handler, false);
  }, [onBlur]);

  return ref
}
