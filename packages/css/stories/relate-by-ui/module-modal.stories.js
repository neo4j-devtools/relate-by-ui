import React, { useState } from 'react';

import { Modal } from '@relate-by-ui/modal';
import { ButtonActionPrimary } from '@relate-by-ui/buttons';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Relate by UI/Element/Modal', module);

const InternalModal = () => {
  const [open, setModalState] = useState(false);

  return (
    <div className="ui" style={{ margin: '3rem 0 5rem 0' }}>
      <h1 className="ui dividing header">Modal</h1>
      <Modal
        title="This is the title"
        icon="heart"
        contentClassName="test-modal"
        semanticModal={{
          className: 'test-semantic-modal',
          open,
          trigger: <ButtonActionPrimary title="Open modal" onClick={() => setModalState(true)} />,
          onClose: () => setModalState(false),
        }}
      >
        This is the modal content
      </Modal>
    </div>
  );
};

stories.add('Modal', () => <InternalModal />, {
  info: {
    text: `Primary.`,
  },
});
