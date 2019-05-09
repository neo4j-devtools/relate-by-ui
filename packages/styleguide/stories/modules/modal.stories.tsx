import React, { useState } from 'react';

import { Modal as OriginalModal, RelateByUIModalPropTypes } from '../../../modal/src';
import { ButtonActionPrimary } from '../../../buttons/src';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Modules', module);

const Modal = (props: RelateByUIModalPropTypes) => {
  const [open, setModalState] = useState(false);

  props.semanticModal.open = open;
  props.semanticModal.trigger = <ButtonActionPrimary title="Open modal" onClick={() => setModalState(true)} />;
  props.semanticModal.onClose = () => setModalState(false);

  return <OriginalModal {...props}>{props.children}</OriginalModal>;
};

stories.add(
  'Modal',
  () => (
    <Modal
      title="This is the title"
      contentClassName="test-modal"
      semanticModal={{
        className: 'test-semantic-modal',
      }}
    >
      <p>This is the modal content</p>
    </Modal>
  ),
  {
    info: {
      text: `The modal component.`,
      inline: true,
    },
  },
);
