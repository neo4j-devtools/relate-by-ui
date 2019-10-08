import React, { useCallback, useState } from 'react';
import { Button, Divider, Form, Icon, Label, Menu } from 'semantic-ui-react';
import { FormSelect } from '@relate-by-ui/form-elements';
import { entries, filter, find, flatMap, get, head, map } from 'lodash-es';

import { FILTER_ACTIONS } from '../../relatable.types';

import { useRelatableStateContext, useRelatableToolbarContext } from '../../states';
import arrayHasItems from '../../utils/array-has-items';
import { getToolbarStateClass } from '../../utils/relatable-state-classes';
import { isSelectedRowsFilter, makeColumnFilter } from '../../utils/filters';
import { getRelatableAction } from '../../utils/relatable-actions';
import { columnHasAction } from '../../utils/column-actions';
import { withFilters } from '../../add-ons';

import { ToolbarPopup } from './toolbar-popup';
import { Filter } from '../renderers';

export default function FiltersToolbar() {
  const { flatColumns: columns, state: { filters }, onCustomFilterChange } = useRelatableStateContext();
  const [selectedToolbarAction, setToolbar, clearToolbar] = useRelatableToolbarContext();
  const appliedFilters = entries(filters);
  const appliedFilterValues = flatMap(appliedFilters, ([, values]) => values);
  const isFiltered = arrayHasItems(appliedFilterValues);

  return <ToolbarPopup
    name={withFilters.name}
    content={<FiltersPopup
      columns={columns}
      selectedToolbarAction={selectedToolbarAction}
      appliedFilters={appliedFilters}
      isFiltered={isFiltered}
      onClose={clearToolbar}
      onCustomFilterChange={onCustomFilterChange}/>}
    selectedToolbarAction={selectedToolbarAction}
    onClose={clearToolbar}>
    <Menu.Item name="filter" onClick={() => setToolbar(withFilters.name)}>
      <Icon name='filter' className="relatable__toolbar-icon"/>
      Filters
      {isFiltered &&
      <Label className={isFiltered ? getToolbarStateClass('filterValue') : ''}>{appliedFilterValues.length}</Label>}
    </Menu.Item>
  </ToolbarPopup>;
}

function FiltersPopup({ columns, selectedToolbarAction, isFiltered, onClose, appliedFilters, onCustomFilterChange }: any) {
  return <div className="relatable__toolbar-popup relatable__toolbar-filters-popup">
    {isFiltered && <>
      {flatMap(appliedFilters, ([id, values]) => {
        const column = find(columns, (column) => column.id === id);

        return map(values, (value) => <Label key={`${id}: ${value.value}`} className="relatable__toolbar-value">
          <FilterItem column={column} value={value}/>
          <Icon name="close" onClick={() => onCustomFilterChange(column, FILTER_ACTIONS.FILTER_REMOVE, [value])}/>
        </Label>);
      })}
      <Divider/>
    </>}
    <FiltersForm
      columns={columns}
      selectedToolbarAction={selectedToolbarAction}
      onCustomFilterChange={onCustomFilterChange}
      onClose={onClose}/>
  </div>;
}

function FiltersForm({ columns, selectedToolbarAction, onCustomFilterChange, onClose }: any) {
  const {availableActions} = useRelatableStateContext();
  const relatableAction = getRelatableAction(availableActions, selectedToolbarAction.name);
  const columnsToUse = filter(columns, (column) => relatableAction && columnHasAction(column, relatableAction));
  const firstId = selectedToolbarAction.column
    ? selectedToolbarAction.column.id
    : get(head(columnsToUse), 'id', undefined);
  const [filterValue, onFilterValueChange] = useState<any>();
  const [selectedColumnId, setSelectedColumnId] = useState<any>(firstId);
  const selectedColumn = find(columnsToUse, ({ id }) => id === selectedColumnId);
  const columnOptions = map(filter(columnsToUse, 'canFilter'), (column) => ({
    key: column.id,
    value: column.id,
    text: column.Header,
  }));
  const onSubmit = useCallback(() => {
    onClose();
    onCustomFilterChange(selectedColumn, FILTER_ACTIONS.FILTER_ADD, [makeColumnFilter(filterValue)]);
  }, [onCustomFilterChange, selectedColumn, filterValue]);

  return <Form onSubmit={onSubmit} className="relatable__toolbar-filters-form">
    <h3>Add filter</h3>
    <Form.Group>
      <Form.Field>
        <FormSelect
          options={columnOptions}
          value={selectedColumnId}
          search
          onChange={(_, { value }) => setSelectedColumnId(value)}/>
      </Form.Field>
      <Filter column={selectedColumn} onChange={onFilterValueChange}/>
      <Button
        basic
        icon
        color="black"
        className="relatable__toolbar-popup-button"
        title="Add"
        disabled={!filterValue}>
        <Icon name="check"/>
      </Button>
    </Form.Group>
  </Form>;
}

function FilterItem({ column, value }: any) {
  if (isSelectedRowsFilter(value)) {
    return <span className="relatable__toolbar-filters-item">
     {value.value.length} rows from selection.
    </span>;
  }

  return <span className="relatable__toolbar-filters-item">
    {column.render('Header')}: {value.value}
  </span>;
}
