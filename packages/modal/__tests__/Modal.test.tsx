import 'react-testing-library/cleanup-after-each';
import React, { useState } from 'react';
import { render, fireEvent } from 'react-testing-library';
import { Modal } from '../src';
import 'jest-dom/extend-expect';

const TestModal = () => {
  const [modalState, setModalState] = useState(false);

  return (
    <Modal
      title="This is the title"
      icon="heart"
      semanticModal={{ open: modalState, trigger: <button onClick={() => setModalState(true)}>Click Me</button> }}
    >
      This is the modal content
    </Modal>
  );
};

test('Modal', () => {
  const { container, getByText, asFragment } = render(<TestModal />);
  const firstRender = asFragment();
  fireEvent.click(getByText(/Click Me/));
  console.log('🍅', firstRender, container.innerHTML);
  // expect(container.firstChild).toHaveTextContent('Click Here');
});
