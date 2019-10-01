import React, { useCallback, useState } from 'react';
import { Pagination as SemanticPagination, Form, Popup, Label } from 'semantic-ui-react';
import { map } from 'lodash-es';

import { useRelatableStateContext } from '../states';
import { FormSelect } from '@relate-by-ui/form-elements';

export default function Pagination() {
  const {
    canPreviousPage,
    canNextPage,
    pageCount,
    gotoPage,
    onCustomPageChange,
    state: [{ pageIndex }],
  } = useRelatableStateContext();
  const pageSetter = onCustomPageChange || gotoPage;

  return <Form className="relatable__pagination">
    <Form.Group>
      <Form.Field>
        <SemanticPagination
          activePage={pageIndex + 1}
          onPageChange={(_, { activePage }: any) => pageSetter(activePage - 1)}
          size='small'
          boundaryRange={0}
          siblingRange={0}
          ellipsisItem={null}
          totalPages={pageCount}
          firstItem={{ disabled: !canPreviousPage, content: '⟨⟨' }}
          lastItem={{ disabled: !canNextPage, content: '⟩⟩' }}
          prevItem={{ disabled: !canPreviousPage, content: '⟨' }}
          nextItem={{ disabled: !canNextPage, content: '⟩' }}
          pageItem={<PaginationPopup activePage={pageIndex + 1} />}
        />
      </Form.Field>
    </Form.Group>
  </Form>;
}

function PaginationPopup(props: any) {
  const { activePage } = props;

  return <Popup
    on="click"
    position="top left"
    children={<PaginationForm/>}
    trigger={(
      <SemanticPagination.Item active className="relatable__pagination-popup-trigger">
        {activePage}
      </SemanticPagination.Item>
    )}/>;
}

function PaginationForm() {
  const {
    customPageSizeOptions,
    pageCount,
    gotoPage,
    setPageSize,
    onCustomPageSizeChange,
    onCustomPageChange,
    state: [{ pageIndex, pageSize }],
  } = useRelatableStateContext();
  const activePage = pageIndex + 1;
  const pageSetter = onCustomPageChange || gotoPage;
  const pageSizeSetter = onCustomPageSizeChange || setPageSize;
  const pageSizeOptions = map(customPageSizeOptions, (opt) => ({ key: opt, value: opt, text: opt }));
  const [selectedPage, setSelectedPage] = useState(activePage);
  const onPageSubmit = useCallback(() => {
    if (selectedPage && selectedPage !== activePage) {
      pageSetter(selectedPage - 1);
    }
  }, [selectedPage, pageSetter]);

  return <>
    <Form className="relatable__pagination-form" onSubmit={onPageSubmit}>
      <Form.Group>
        <Form.Input
          labelPosition='right'
          name='activePage'
          inline
          min={1}
          max={pageCount}
          onChange={(_, { value }: any) => setSelectedPage(value)}
          type='number'
          value={selectedPage}
        >
          <Label basic>Page</Label>
          <input autoFocus/>
          <Label basic>of {pageCount}</Label>
        </Form.Input>
      </Form.Group>
    </Form>
    <Form className="relatable__pagination-form">
      <Form.Group>
        <FormSelect
          label='Rows per page'
          inline
          search
          options={pageSizeOptions}
          value={pageSize}
          onChange={(_, { value }) => pageSizeSetter(value)}/>
      </Form.Group>
    </Form>
    </>;
}
