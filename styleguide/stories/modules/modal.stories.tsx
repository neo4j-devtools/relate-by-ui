import React, { useState } from 'react';
import { Checkbox } from 'semantic-ui-react';

import { Modal as OriginalModal, RelateByUIModalPropTypes } from '../../../packages/modal/src';
import { ButtonActionPrimary, ButtonDismissPrimary, ButtonApproveSecondary } from '../../../packages/buttons/src';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Modules', module);

let closeModal;

const Modal = (props: RelateByUIModalPropTypes) => {
  const [open, setModalState] = useState(false);

  closeModal = () => setModalState(false);

  props.semanticModal.open = open;
  props.semanticModal.trigger = <ButtonActionPrimary title="Open modal" onClick={() => setModalState(true)} />;
  props.semanticModal.onClose = () => setModalState(false);

  if (!props.buttons.length) {
    props.buttons.push(<ButtonDismissPrimary title="Cancel" onClick={closeModal} key="cancel" />);
    props.buttons.push(<ButtonApproveSecondary title="Continue" onClick={closeModal} key="continue" />);
  }

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
      checkbox={<Checkbox type="radio" label="Checkbox here" />}
      buttons={[]}
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
