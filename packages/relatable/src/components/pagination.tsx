import React from 'react';
import { Pagination as SemanticPagination, Form } from 'semantic-ui-react';
import { FormSelect } from '@relate-by-ui/form-elements';
import { map } from 'lodash-es';

import { useRelatableStateContext } from '../states';

export default function Pagination() {
  const {
    canPreviousPage,
    canNextPage,
    customPageSizeOptions,
    pageCount,
    gotoPage,
    setPageSize,
    onCustomPageSizeChange,
    onCustomPageChange,
    state: [{ pageIndex, pageSize }],
  } = useRelatableStateContext();
  const pageSetter = onCustomPageChange || gotoPage;
  const pageSizeSetter = onCustomPageSizeChange || setPageSize;
  const selectOptions = map(customPageSizeOptions, (opt) => ({ key: opt, value: opt, text: opt }));

  return <Form className="relatable__pagination">
    <Form.Group>
      <Form.Field>
        <SemanticPagination
          activePage={pageIndex + 1}
          onPageChange={(_, { activePage }: any) => pageSetter(activePage - 1)}
          size='small'
          totalPages={pageCount}
          firstItem={{ disabled: !canPreviousPage, content: '⟨⟨' }}
          lastItem={{ disabled: !canNextPage, content: '⟩⟩' }}
          prevItem={{ disabled: !canPreviousPage, content: '⟨' }}
          nextItem={{ disabled: !canNextPage, content: '⟩' }}
        />
      </Form.Field>
      <Form.Input
        label='Go to'
        name='activePage'
        inline
        min={1}
        max={pageCount}
        onChange={(_, { value }: any) => pageSetter(value - 1)}
        type='number'
        value={pageIndex + 1}
      />
      <FormSelect
        label='Size'
        inline
        options={selectOptions}
        value={pageSize}
        onChange={(_, { value }) => pageSizeSetter(value)}/>
    </Form.Group>
  </Form>;
}
