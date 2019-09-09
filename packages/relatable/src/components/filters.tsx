import React, { useState } from 'react';
import { Form } from 'semantic-ui-react';
import { compact, find, map } from 'lodash-es';
import { FormInput, FormSelect } from '@relate-by-ui/form-elements';

import { useStateValue } from '../constants';
import isDefined from '../utils/is-defined';

export default function Filters() {
  const { flatColumns, onSetCustomFilter } = useStateValue();
  const [selectedColumnId, setSelectedColumnId] = useState(undefined);
  const columnOptions = compact(map(flatColumns, (column) => column.canFilter
    ? ({
      key: column.id,
      value: column.id,
      text: column.Header,
    })
    : null,
  ));
  const selectedColumn = selectedColumnId && find(flatColumns, ({ id }) => id === selectedColumnId);

  return <Form className="relatable__filters">
    <Form.Group widths="equal">
      <FormInput
        className="relatable__filters-global-search"
        onChange={({ target }) => onSetCustomFilter('*', target.value || undefined)}
        placeholder="Search..."
      />
    </Form.Group>
    <Form.Group widths="equal">
      <Form.Field>
        <FormSelect
          placeholder="Column"
          options={columnOptions}
          value={selectedColumnId}
          onChange={(_, data) => setSelectedColumnId(data.value || undefined)}/>
      </Form.Field>
      <SelectedColumnFilter column={selectedColumn} setFilter={onSetCustomFilter}/>
    </Form.Group>
  </Form>;
}

function SelectedColumnFilter({ column, setFilter }: any) {
  if (!column) return null;

  const { Filter } = column;
  const filterSetter = isDefined(setFilter)
    ? (val: any) => setFilter(column, val)
    : column.setFilter;

  return <Form.Field>
    <Filter column={column} onFilterSet={filterSetter}/>
  </Form.Field>;
}
