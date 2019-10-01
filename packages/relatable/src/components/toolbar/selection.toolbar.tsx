import React from 'react';
import { Icon, Label, Menu } from 'semantic-ui-react';
import { filter} from 'lodash-es';

import { useRelatableStateContext, useRelatableToolbarContext } from '../../states';
import arrayHasItems from '../../utils/array-has-items';
import { getToolbarStateClass } from '../../utils/relatable-state-classes';
import { withSelection } from '../../add-ons';

import { ToolbarPopup } from './toolbar-popup';

export default function SelectionToolbar() {
  const { rows, state: [{ selectedRows }], onCustomSelectionChange } = useRelatableStateContext();
  const [selectedToolbarAction, setToolbar, clearToolbar] = useRelatableToolbarContext();
  const isSelected = arrayHasItems(selectedRows);

  return <ToolbarPopup
    name={withSelection.name}
    content={<SelectionPopup
      rows={rows}
      selectedToolbarAction={selectedToolbarAction}
      selectedRows={selectedRows}
      onCustomSelectionChange={onCustomSelectionChange}/>}
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
  const filteredRows = filter(rows, 'isSelected');

  return <div className="relatable__toolbar-selection-popup">
    You have selected {filteredRows.length} rows
  </div>;
}
