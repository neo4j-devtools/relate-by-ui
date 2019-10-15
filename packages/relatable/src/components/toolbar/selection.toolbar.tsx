import React, { useCallback } from 'react';
import { Button, Form, Icon, Label, Menu } from 'semantic-ui-react';
import { filter } from 'lodash-es';

import { FILTER_ACTIONS } from '../../relatable.types';

import { useRelatableStateContext, useRelatableToolbarContext } from '../../states';
import arrayHasItems from '../../utils/array-has-items';
import { getToolbarStateClass } from '../../utils/relatable-state-classes';
import { makeSelectedRowsFilter } from '../../utils/filters';
import { withSelection } from '../../add-ons';

import { ToolbarPopup } from './toolbar-popup';

export default function SelectionToolbar() {
  const { preFilteredFlatRows, state: { selectedRowPaths } } = useRelatableStateContext();
  const [selectedToolbarAction, setToolbar, clearToolbar] = useRelatableToolbarContext();
  const isSelected = arrayHasItems(selectedRowPaths);

  return <ToolbarPopup
    name={withSelection.name}
    content={<SelectionPopup
      rows={preFilteredFlatRows}
      selectedRowPaths={selectedRowPaths}
      selectedToolbarAction={selectedToolbarAction}/>}
    selectedToolbarAction={selectedToolbarAction}
    onClose={clearToolbar}>
    <Menu.Item name="selection" disabled={!isSelected} onClick={() => setToolbar(withSelection.name)}>
      <Icon name='list ul' className="relatable__toolbar-icon"/>
      Selected
      {isSelected &&
      <Label className={isSelected ? getToolbarStateClass('isSelected') : ''}>{selectedRowPaths.length}</Label>}
    </Menu.Item>
  </ToolbarPopup>;
}

function SelectionPopup({ rows, selectedRowPaths }: any) {
  const { flatColumns, onCustomSelectionChange, onCustomFilterChange } = useRelatableStateContext();
  const [, , clearToolbar] = useRelatableToolbarContext();
  const onSelectionClear = useCallback(() => {
    const selectedRows = filter(rows, 'isSelected');

    clearToolbar();
    onCustomSelectionChange(selectedRows, false);
  }, [onCustomSelectionChange, rows]);
  const onSelectionView = useCallback(() => {
    if (!onCustomFilterChange) return;
    clearToolbar();
    // just use the first column, rows dont care...
    onCustomFilterChange(flatColumns[0], FILTER_ACTIONS.FILTER_ADD, [makeSelectedRowsFilter(selectedRowPaths)]);
  }, [onCustomFilterChange, selectedRowPaths]);

  return <div className="relatable__toolbar-popup relatable__toolbar-selection-popup">
    <Form className="relatable__toolbar-selection-form">
      <h4>You have selected {selectedRowPaths.length} rows</h4>
      <Form.Group>
        {onCustomFilterChange && <Button
          inverted
          icon
          color="blue"
          onClick={onSelectionView}
          title="View selection">
          <Icon name="eye"/> Show
        </Button>}
        <Button
          inverted
          icon
          color="orange"
          title="Clear selection"
          type="button"
          onClick={onSelectionClear}>
          <Icon name="remove"/> Clear
        </Button>
      </Form.Group>
    </Form>
  </div>;
}
