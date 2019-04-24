import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';
import ButtonTemplate from '../src/ButtonTemplate';
import { ButtonConfirm, ButtonDismiss } from '../src';
import 'jest-dom/extend-expect';

test('Button — Template', () => {
  const { container } = render(<ButtonTemplate title="Click Here" icon="heart" />);
  expect(container.children[0].children[0]).toHaveAttribute('class', 'ui-icon-heart');
  expect(container.firstChild).toHaveAttribute('class', 'ui button relate-by-ui-button');
  expect(container.firstChild).toHaveTextContent('Click Here');
});

test('Button — Confirm', () => {
  const { container } = render(<ButtonConfirm title="Click Here" showIcon />);
  expect(container.children[0].children[0]).toHaveAttribute('class', 'ui-icon-confirm');
  expect([].slice.call(container.children[0].classList)).toEqual(
    expect.arrayContaining(['ui', 'button', 'relate-by-ui-button', 'primary', expect.stringMatching(/^css-(.*)/)]),
  );
  expect(container.firstChild).toHaveTextContent('Click Here');
});

test('Button — Dismiss', () => {
  const { container } = render(<ButtonDismiss title="Click Here" showIcon />);
  expect(container.children[0].children[0]).toHaveAttribute('class', 'ui-icon-dismiss');
  expect([].slice.call(container.children[0].classList)).toEqual(
    expect.arrayContaining(['ui', 'button', 'relate-by-ui-button', 'secondary', expect.stringMatching(/^css-(.*)/)]),
  );
  expect(container.firstChild).toHaveTextContent('Click Here');
});
