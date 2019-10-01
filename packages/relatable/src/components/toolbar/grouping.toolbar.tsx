import React, { useCallback, useState } from 'react';
import { Button, Divider, Form, Icon, Label, List, Menu } from 'semantic-ui-react';
import { filter, find, get, head, map } from 'lodash-es';
import { FormSelect } from '@relate-by-ui/form-elements';

import { useRelatableStateContext, useRelatableToolbarContext } from '../../states';
import arrayHasItems from '../../utils/array-has-items';
import { getToolbarStateClass } from '../../utils/relatable-state-classes';
import { withGrouping } from '../../add-ons';

import { ToolbarPopup } from './toolbar-popup';

export default function GroupingToolbar() {
  const { flatColumns: columns, state: [{ groupBy }], onCustomGroupingChange } = useRelatableStateContext();
  const [selectedToolbarAction, setToolbar, clearToolbar] = useRelatableToolbarContext();
  const isGrouped = arrayHasItems(groupBy);

  return <ToolbarPopup
    name={withGrouping.name}
    content={<GroupingPopup
      columns={columns}
      groupBy={groupBy}
      onCustomGroupingChange={onCustomGroupingChange}/>}
    selectedToolbarAction={selectedToolbarAction}
    onClose={clearToolbar}>
    <Menu.Item name="group" onClick={() => setToolbar(withGrouping.name)}>
      <Icon name='group' className="relatable__toolbar-icon"/>
      Groups
      {isGrouped && <Label className={isGrouped ? getToolbarStateClass('isGrouped') : ''}>{groupBy.length}</Label>}
    </Menu.Item>
  </ToolbarPopup>;
}

function GroupingPopup({ columns, groupBy, onCustomGroupingChange }: any) {
  const [showForm, setShowForm] = useState(false);

  return <div className="relatable__toolbar-grouping-popup">
    {arrayHasItems(groupBy) && <>
      <List>
        {map(groupBy, (id) => {
          const column = find(columns, (column) => column.id === id);

          return <List.Item key={id}>
            <List.Content floated="right">
              <Icon name="close" onClick={() => {
                if (onCustomGroupingChange) {
                  onCustomGroupingChange(column, false);
                  return;
                }

                column.toggleGroupBy(false);
              }}/>
            </List.Content>
            <List.Content>
              {column.render('Header')}
            </List.Content>
          </List.Item>;
        })}
      </List>
      <Divider/>
    </>}

    {showForm
      ? <GroupingForm
        columns={columns}
        onCustomGroupingChange={onCustomGroupingChange}
        onClose={() => setShowForm(false)}/>
      : <Button onClick={() => setShowForm(true)} inverted icon color="green" title="Add grouping">
        <Icon name="plus"/> Add grouping
      </Button>
    }
  </div>;
}

function GroupingForm({ columns, onCustomGroupingChange, onClose }: any) {
  const firstId = get(head(columns), 'id', undefined);
  const [selectedColumnId, setSelectedColumnId] = useState<any>(firstId);
  const selectedColumn = find(columns, ({ id }) => id === selectedColumnId);
  const columnOptions = map(filter(columns, 'canGroupBy'), (column) => ({
    key: column.id,
    value: column.id,
    text: column.Header,
  }));
  const onSubmit = useCallback(() => {
    onClose();

    if (onCustomGroupingChange) {
      onCustomGroupingChange(selectedColumn, true);
      return;
    }

    selectedColumn.toggleGroupBy(true);
  }, [onCustomGroupingChange, selectedColumn]);

  return <Form onSubmit={onSubmit} className="relatable__toolbar-grouping-form">
    <Form.Group>
      <Form.Field>
        <FormSelect
          options={columnOptions}
          value={selectedColumnId}
          search
          searchInput={{ autoFocus: true }}
          onChange={(_, { value }) => setSelectedColumnId(value)}/>
      </Form.Field>
      <Button
        inverted
        icon
        color="blue"
        title="Add">
        <Icon name="check"/>
      </Button>
      <Button
        inverted
        icon
        color="orange"
        title="Cancel"
        type="button"
        onClick={onClose}>
        <Icon name="remove"/>
      </Button>
    </Form.Group>
  </Form>;
}
