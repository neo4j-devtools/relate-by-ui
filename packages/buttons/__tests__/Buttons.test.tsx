import 'react-testing-library/cleanup-after-each';
import React from 'react';
import { render } from 'react-testing-library';
import ButtonTemplate from '../src/ButtonTemplate';
import {
  ButtonActionPrimary,
  ButtonActionSecondary,
  ButtonActionText,
  ButtonApprovePrimary,
  ButtonApproveSecondary,
  ButtonApproveText,
  ButtonDestructivePrimary,
  ButtonDestructiveSecondary,
  ButtonDestructiveText,
  ButtonDismissPrimary,
  ButtonDismissSecondary,
  ButtonDismissText,
} from '../src';
import 'jest-dom/extend-expect';

/**
 * Template
 */

test('Button — Template', () => {
  const { container } = render(<ButtonTemplate title="Click Here" icon="heart" />);
  expect(container.children[0].children[0]).toHaveAttribute('class', 'ui-icon-heart');
  expect(container.firstChild).toHaveAttribute('class', 'ui button relate-by-ui-button');
  expect(container.firstChild).toHaveTextContent('Click Here');
});

const testStyledButton = (container: any, icon: string) => {
  expect(container.children[0].children[0]).toHaveAttribute('class', icon);
  expect([].slice.call(container.children[0].classList)).toEqual(
    expect.arrayContaining(['ui', 'button', 'relate-by-ui-button', expect.stringMatching(/^css-(.*)/)]),
  );
  expect(container.firstChild).toHaveTextContent('Click Here');
};

/**
 * Primary
 */

test('Button — Action - Primary', () => {
  const { container } = render(<ButtonActionPrimary title="Click Here" showIcon />);
  testStyledButton(container, 'ui-icon-confirm');
});

test('Button — Approve - Primary', () => {
  const { container } = render(<ButtonApprovePrimary title="Click Here" showIcon />);
  testStyledButton(container, 'ui-icon-confirm');
});

test('Button — Destructive - Primary', () => {
  const { container } = render(<ButtonDestructivePrimary title="Click Here" showIcon />);
  testStyledButton(container, 'ui-icon-dismiss');
});

test('Button — Dismiss - Primary', () => {
  const { container } = render(<ButtonDismissPrimary title="Click Here" showIcon />);
  testStyledButton(container, 'ui-icon-dismiss');
});

/**
 * Secondary
 */

test('Button — Action - Secondary', () => {
  const { container } = render(<ButtonActionSecondary title="Click Here" showIcon />);
  testStyledButton(container, 'ui-icon-confirm');
});

test('Button — Approve - Secondary', () => {
  const { container } = render(<ButtonApproveSecondary title="Click Here" showIcon />);
  testStyledButton(container, 'ui-icon-confirm');
});

test('Button — Destructive - Secondary', () => {
  const { container } = render(<ButtonDestructiveSecondary title="Click Here" showIcon />);
  testStyledButton(container, 'ui-icon-dismiss');
});

test('Button — Dismiss - Secondary', () => {
  const { container } = render(<ButtonDismissSecondary title="Click Here" showIcon />);
  testStyledButton(container, 'ui-icon-dismiss');
});

/**
 * Text
 */

test('Button — Action - Text', () => {
  const { container } = render(<ButtonActionText title="Click Here" showIcon />);
  testStyledButton(container, 'ui-icon-confirm');
});

test('Button — Approve - Text', () => {
  const { container } = render(<ButtonApproveText title="Click Here" showIcon />);
  testStyledButton(container, 'ui-icon-confirm');
});

test('Button — Destructive - Text', () => {
  const { container } = render(<ButtonDestructiveText title="Click Here" showIcon />);
  testStyledButton(container, 'ui-icon-dismiss');
});

test('Button — Dismiss - Text', () => {
  const { container } = render(<ButtonDismissText title="Click Here" showIcon />);
  testStyledButton(container, 'ui-icon-dismiss');
});
