import React from 'react';

export default function NumberCell({ cell }: any) {
  const { value = '' } = cell;

  return <span className="relatable__table-number-cell">
    {Number(value).toLocaleString()}
  </span>;
}
