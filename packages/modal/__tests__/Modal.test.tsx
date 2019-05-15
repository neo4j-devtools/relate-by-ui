import 'react-testing-library/cleanup-after-each';
import 'jest-dom/extend-expect';
import React, { useState } from 'react';
import { render, fireEvent } from 'react-testing-library';
import { Modal } from '../src';
import { ButtonActionPrimary } from '@relate-by-ui/buttons';
import 'jest-dom/extend-expect';

const TestModal = (props: any) => {
  const { mockCallback, buttons } = props;
  const [open, setModalState] = useState(false);

  const modalState = (state: boolean) => {
    setModalState(state);
    mockCallback();
  };

  return (
    <Modal
      title="This is the title"
      icon="heart"
      contentClassName="test-modal"
      semanticModal={{
        className: 'test-semantic-modal',
        open,
        trigger: <ButtonActionPrimary title="Open modal" onClick={() => modalState(true)} />,
        onClose: () => modalState(false),
      }}
      buttons={buttons && <ButtonActionPrimary title="Close modal" onClick={() => modalState(false)} />}
    >
      This is the modal content
    </Modal>
  );
};

test('Modal with default button', () => {
  const mockCallback = jest.fn();
  const { container, getByText } = render(<TestModal mockCallback={mockCallback} />);

  expect(container.firstChild).toHaveTextContent('Open modal');

  fireEvent.click(getByText(/Open modal/));
  expect(mockCallback).toBeCalled();
  expect(document.body.children.length).toBe(2);

  expect(document.body.children[1].children[0].children[0]).toHaveTextContent('This is the title');
  expect(document.body.children[1].children[0].children[1]).toHaveTextContent('This is the modal content');

  expect(document.body.children[1].children[0].classList.contains('test-semantic-modal')).toBe(true);
  expect(document.body.children[1].children[0].children[1].classList.contains('test-modal')).toBe(true);

  fireEvent.click(getByText(/Close/));
  expect(document.body.children.length).toBe(1);
});

test('Modal with custom button', () => {
  const mockCallback = jest.fn();
  const { container, getByText } = render(<TestModal mockCallback={mockCallback} buttons />);

  expect(container.firstChild).toHaveTextContent('Open modal');

  fireEvent.click(getByText(/Open modal/));
  expect(mockCallback).toBeCalled();
  expect(document.body.children.length).toBe(2);

  expect(document.body.children[1].children[0].children[0]).toHaveTextContent('This is the title');
  expect(document.body.children[1].children[0].children[1]).toHaveTextContent('This is the modal content');

  expect(document.body.children[1].children[0].classList.contains('test-semantic-modal')).toBe(true);
  expect(document.body.children[1].children[0].children[1].classList.contains('test-modal')).toBe(true);

  fireEvent.click(getByText(/Close modal/));
  expect(document.body.children.length).toBe(1);
});
