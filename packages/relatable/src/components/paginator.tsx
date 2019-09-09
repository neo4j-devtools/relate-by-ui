import React from 'react';

import { useStateValue } from '../constants';

export default function Paginator() {
  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    setPageSize,
    onSetCustomPageSize,
    onSetCustomPage,
    state: [{ pageIndex, pageSize }],
  } = useStateValue();
  const pageSetter = onSetCustomPage || gotoPage;
  const pageSizeSetter = onSetCustomPageSize || setPageSize;

  return <div className="relatable__pagination">
    <button onClick={() => pageSetter(0)} disabled={!canPreviousPage}>
      {'<<'}
    </button>
    {' '}
    <button onClick={() => pageSetter(pageIndex - 1)} disabled={!canPreviousPage}>
      {'<'}
    </button>
    {' '}
    <span>
          Page{' '}
      <strong>
            {pageIndex + 1} of {pageOptions.length}
          </strong>{' '}
        </span>
    <button onClick={() => pageSetter(pageIndex + 1)} disabled={!canNextPage}>
      {'>'}
    </button>
    {' '}
    <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
      {'>>'}
    </button>
    {' '}
    <span>
          | Go to page:{' '}
      <input
        type="number"
        defaultValue={pageIndex + 1}
        onChange={e => {
          const page = e.target.value ? Number(e.target.value) - 1 : 0;
          gotoPage(page);
        }}
        style={{ width: '100px' }}
      />
        </span>{' '}
    <select
      value={pageSize}
      onChange={e => {
        pageSizeSetter(Number(e.target.value));
      }}
    >
      {[10, 20, 30, 40, 50].map(pageSize => (
        <option key={pageSize} value={pageSize}>
          Show {pageSize}
        </option>
      ))}
    </select>
  </div>;
}
