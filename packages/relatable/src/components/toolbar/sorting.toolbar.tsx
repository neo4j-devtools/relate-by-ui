import React, { useCallback, useState } from 'react';
import { Button, Divider, Form, Icon, Label, List, Menu } from 'semantic-ui-react';
import { filter, find, get, head, map } from 'lodash-es';
import { FormSelect } from '@relate-by-ui/form-elements';

import { SORT_ACTIONS } from '../../relatable.types';

import { useRelatableStateContext, useRelatableToolbarContext } from '../../states';
import arrayHasItems from '../../utils/array-has-items';
import { getToolbarStateClass } from '../../utils/relatable-state-classes';
import { withSorting } from '../../add-ons';

import { ToolbarPopup } from './toolbar-popup';

export default function SortingToolbar() {
  const { flatColumns: columns, state: { sortBy }, onCustomSortChange } = useRelatableStateContext();
  const [selectedToolbarAction, setToolbar, clearToolbar] = useRelatableToolbarContext();
  const isSorted = arrayHasItems(sortBy);

  return <ToolbarPopup
    name={withSorting.name}
    content={<SortingPopup
      columns={columns}
      sortBy={sortBy}
      onCustomSortChange={onCustomSortChange}/>}
    selectedToolbarAction={selectedToolbarAction}
    onClose={clearToolbar}>
    <Menu.Item name="sort" onClick={() => setToolbar(withSorting.name)}>
      <Icon name='sort' className="relatable__toolbar-icon"/>
      Sorting
      {isSorted && <Label className={isSorted ? getToolbarStateClass('isSorted') : ''}>{sortBy.length}</Label>}
    </Menu.Item>
  </ToolbarPopup>;
}

function SortingPopup({ columns, sortBy, onCustomSortChange }: any) {
  const [showForm, setShowForm] = useState(false);

  return <div className="relatable__toolbar-sorting-popup">
    {arrayHasItems(sortBy) && <>
      <List>
        {map(sortBy, ({ id, desc }) => {
          const column = find(columns, (column) => column.id === id);

          return <List.Item key={id}>
            <List.Content floated="right">
              <Icon name="close" onClick={() => onCustomSortChange(column, SORT_ACTIONS.SORT_CLEAR)}/>
            </List.Content>
            <List.Content>
              {column.render('Header')}: {desc ? 'descending' : 'ascending'}
            </List.Content>
          </List.Item>;
        })}
      </List>
      <Divider/>
    </>}

    {showForm
      ? <SortingForm
        columns={columns}
        onCustomSortChange={onCustomSortChange}
        onClose={() => setShowForm(false)}/>
      : <Button onClick={() => setShowForm(true)} inverted icon color="green" title="Add sorting">
        <Icon name="plus"/> Add sorting
      </Button>
    }
  </div>;
}

function SortingForm({ columns, onCustomSortChange, onClose }: any) {
  const firstId = get(head(columns), 'id', undefined);
  const [selectedSort, setSelectedSort] = useState<string>(SORT_ACTIONS.SORT_DESC);
  const [selectedColumnId, setSelectedColumnId] = useState<any>(firstId);
  const selectedColumn = find(columns, ({ id }) => id === selectedColumnId);
  const columnOptions = map(filter(columns, 'canSort'), (column) => ({
    key: column.id,
    value: column.id,
    text: column.Header,
  }));
  const sortOptions = [
    { key: SORT_ACTIONS.SORT_DESC, value: SORT_ACTIONS.SORT_DESC, text: 'Descending' },
    { key: SORT_ACTIONS.SORT_ASC, value: SORT_ACTIONS.SORT_ASC, text: 'Ascending' },
  ];
  const onSubmit = useCallback(() => {
    onClose();
    onCustomSortChange(selectedColumn, selectedSort);
  }, [onCustomSortChange, selectedColumn, selectedSort]);

  return <Form onSubmit={onSubmit} className="relatable__toolbar-sorting-form">
    <Form.Group>
      <Form.Field>
        <FormSelect
          options={columnOptions}
          value={selectedColumnId}
          search
          onChange={(_, { value }) => setSelectedColumnId(value)}/>
      </Form.Field>
      <Form.Field>
        <FormSelect
          options={sortOptions}
          value={selectedSort}
          search
          searchInput={{ autoFocus: true }}
          onChange={(_, { value }: any) => setSelectedSort(value)}/>
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
