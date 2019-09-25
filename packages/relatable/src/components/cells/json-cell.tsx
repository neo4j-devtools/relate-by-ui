import React from 'react';

export default function JSONCell({ cell }: any) {
  const { value = '' } = cell;

  return <pre className="relatable__table-json-cell">
    <code>{JSON.stringify(value)}</code>
  </pre>;
}
