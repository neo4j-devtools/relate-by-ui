import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';
import ButtonTemplate from '../src/ButtonTemplate';
import { ButtonConfirm, ButtonDismiss } from '../src';
import 'jest-dom/extend-expect';

test('Button — Template', () => {
  const { container } = render(<ButtonTemplate title="Click Here" icon="heart" />);
  expect(container.children[0].children[0]).toHaveAttribute('class', 'ui-icon-heart');
  expect(container.firstChild).toHaveAttribute('class', 'ui button');
  expect(container.firstChild).toHaveTextContent('Click Here');
});

test('Button — Confirm', () => {
  const { container } = render(<ButtonConfirm title="Click Here" showIcon />);
  expect(container.children[0].children[0]).toHaveAttribute('class', 'ui-icon-confirm');
  expect(container.children[0]).toHaveAttribute('class', 'ui button primary');
  expect(container.firstChild).toHaveTextContent('Click Here');
});

test('Button — Dismiss', () => {
  const { container } = render(<ButtonDismiss title="Click Here" showIcon />);
  expect(container.children[0].children[0]).toHaveAttribute('class', 'ui-icon-dismiss');
  expect(container.children[0]).toHaveAttribute('class', 'ui button secondary');
  expect(container.firstChild).toHaveTextContent('Click Here');
});
