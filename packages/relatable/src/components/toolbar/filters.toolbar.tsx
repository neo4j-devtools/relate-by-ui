import React, { useCallback, useState } from 'react';
import { Button, Divider, Form, Icon, Label, List, Menu } from 'semantic-ui-react';
import { entries, filter, find, get, head, map } from 'lodash-es';
import { FormSelect } from '@relate-by-ui/form-elements';

import { useRelatableStateContext, useRelatableToolbarContext } from '../../states';
import arrayHasItems from '../../utils/array-has-items';
import { withFilters } from '../../add-ons';

import { ToolbarPopup } from './toolbar-popup';
import { Filter } from '../renderers';
import { getToolbarStateClass } from '../../utils/column-state-classes';

export default function FiltersToolbar() {
  const { flatColumns: columns, state: [{ filters }], onCustomFilterChange } = useRelatableStateContext();
  const [selectedToolbarAction, setToolbar, clearToolbar] = useRelatableToolbarContext();
  const appliedFilters = entries(filters);
  const isFiltered = arrayHasItems(appliedFilters);

  return <ToolbarPopup
    name={withFilters.name}
    content={<FiltersPopup
      columns={columns}
      selectedToolbarAction={selectedToolbarAction}
      appliedFilters={appliedFilters}
      onCustomFilterChange={onCustomFilterChange}/>}
    selectedToolbarAction={selectedToolbarAction}
    onClose={clearToolbar}>
    <Menu.Item name="filter" onClick={() => setToolbar(withFilters.name)}>
      <Icon name='filter' className="relatable__toolbar-icon"/>
      Filters
      {isFiltered &&
      <Label className={isFiltered ? getToolbarStateClass('filterValue') : ''}>{appliedFilters.length}</Label>}
    </Menu.Item>
  </ToolbarPopup>;
}

function FiltersPopup({ columns, selectedToolbarAction, appliedFilters, onCustomFilterChange }: any) {
  const [showForm, setShowForm] = useState(Boolean(selectedToolbarAction.column));

  return <div className="relatable__toolbar-filters-popup">
    {arrayHasItems(appliedFilters) && <>
      <List>
        {map(appliedFilters, ([id, val]) => {
          const column = find(columns, (column) => column.id === id);

          return <List.Item key={id}>
            <List.Content floated="right">
              <Icon name="close" onClick={() => {
                if (onCustomFilterChange) {
                  onCustomFilterChange([column], undefined);
                  return;
                }

                column.setFilter(undefined);
              }}/>
            </List.Content>
            <List.Content>
              {column.render('Header')}: {val}
            </List.Content>
          </List.Item>;
        })}
      </List>
      <Divider/>
    </>}

    {showForm
      ? <FiltersForm
        columns={columns}
        selectedToolbarAction={selectedToolbarAction}
        onCustomFilterChange={onCustomFilterChange}
        onClose={() => setShowForm(false)}/>
      : <Button onClick={() => setShowForm(true)} inverted icon color="green" title="Add filter">
        Add filter <Icon name="plus"/>
      </Button>
    }
  </div>;
}

function FiltersForm({ columns, selectedToolbarAction, onCustomFilterChange, onClose }: any) {
  const firstId = selectedToolbarAction.column
    ? selectedToolbarAction.column.id
    : get(head(columns), 'id', undefined);
  const [filterValue, onFilterValueChange] = useState<any>();
  const [selectedColumnId, setSelectedColumnId] = useState<any>(firstId);
  const selectedColumn = find(columns, ({ id }) => id === selectedColumnId);
  const columnOptions = map(filter(columns, 'canFilter'), (column) => ({
    key: column.id,
    value: column.id,
    text: column.Header,
  }));
  const onSubmit = useCallback(() => {
    onClose();

    if (onCustomFilterChange) {
      onCustomFilterChange([selectedColumn], filterValue);
      return;
    }

    selectedColumn.setFilter(filterValue);
  }, [onCustomFilterChange, selectedColumn, filterValue]);

  return <Form onSubmit={onSubmit} className="relatable__toolbar-filters-form">
    <h3>Add filter</h3>
    <Form.Group>
      <Form.Field>
        <FormSelect
          options={columnOptions}
          value={selectedColumnId}
          onChange={(_, { value }) => setSelectedColumnId(value)}/>
      </Form.Field>
      <Filter column={selectedColumn} onChange={onFilterValueChange}/>
      <Button
        inverted
        icon
        color="blue"
        title="Add"
        disabled={!filterValue}>
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
