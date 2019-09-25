import React from 'react';

export default function TextCell({ cell }: any) {
  const { value = '' } = cell;

  return <span className="relatable__table-text-cell">
    {String(value)}
  </span>;
}
