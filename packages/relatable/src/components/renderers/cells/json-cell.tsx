import React from 'react';

import { ICellProps } from '../index';

export default function JSONCell({ cell }: ICellProps) {
  const { value = '' } = cell;

  return <pre className="relatable__table-json-cell">
    <code>{JSON.stringify(value)}</code>
  </pre>;
}
