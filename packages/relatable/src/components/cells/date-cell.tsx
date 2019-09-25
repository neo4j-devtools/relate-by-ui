import React from 'react';

export default function DateCell({ cell }: any) {
  const { value = '' } = cell;

  return <span className="relatable__table-date-cell">
    {(new Date(value)).toLocaleString()}
  </span>;
}
