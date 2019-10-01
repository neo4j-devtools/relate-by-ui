import React, { useCallback } from 'react';
import { Button, Form, Icon, Label, Menu } from 'semantic-ui-react';
import { filter } from 'lodash-es';

import { useRelatableStateContext, useRelatableToolbarContext } from '../../states';
import arrayHasItems from '../../utils/array-has-items';
import { getToolbarStateClass } from '../../utils/relatable-state-classes';
import { withSelection } from '../../add-ons';

import { ToolbarPopup } from './toolbar-popup';

export default function SelectionToolbar() {
  const { rows, state: [{ selectedRows }] } = useRelatableStateContext();
  const [selectedToolbarAction, setToolbar, clearToolbar] = useRelatableToolbarContext();
  const isSelected = arrayHasItems(selectedRows);

  return <ToolbarPopup
    name={withSelection.name}
    content={<SelectionPopup
      rows={rows}
      selectedToolbarAction={selectedToolbarAction}/>}
    selectedToolbarAction={selectedToolbarAction}
    onClose={clearToolbar}>
    <Menu.Item name="selection" disabled={!isSelected} onClick={() => setToolbar(withSelection.name)}>
      <Icon name='list ul' className="relatable__toolbar-icon"/>
      Selected
      {isSelected &&
      <Label className={isSelected ? getToolbarStateClass('isSelected') : ''}>{selectedRows.length}</Label>}
    </Menu.Item>
  </ToolbarPopup>;
}

function SelectionPopup({ rows }: any) {
  const { toggleRowSelectedAll, onCustomSelectionChange } = useRelatableStateContext();
  const [, , clearToolbar] = useRelatableToolbarContext();
  const filteredRows = filter(rows, 'isSelected');
  const onSelectionClear = useCallback(() => {
    clearToolbar();

    if (onCustomSelectionChange) {
      onCustomSelectionChange(rows, false);

      return;
    }

    toggleRowSelectedAll(false);
  }, [toggleRowSelectedAll, onCustomSelectionChange]);

  return <div className="relatable__toolbar-selection-popup">
    <Form className="relatable__toolbar-selection-form">
      <h4>You have selected {filteredRows.length} rows</h4>
      <Form.Group>
        <Button
          inverted
          icon
          color="blue"
          title="">
          <Icon name="eye"/> Show
        </Button>
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
