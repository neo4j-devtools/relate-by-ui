import React from 'react';
import { Modal, ModalProps } from 'semantic-ui-react';
import { Global, css } from '@emotion/core';
import styled from '@emotion/styled';
import { RelateByUIModal as RelateByUIModalTypes } from './Types';
import { ButtonDismissPrimary } from '@relate-by-ui/buttons';

const ModalHeader = ({ className, title, icon }: { title: string; icon?: string; className?: string }) => {
  const classNames = ['relate-by-ui-modal-header'];
  if (className) {
    classNames.push(className);
  }
  return title ? (
    <Modal.Header className={classNames.join(' ')}>
      {icon && <i className={`ui-icon ui-icon-${icon} dark icon-header-small`} />}
      <div className="relate-by-ui-modal-header-title">{title}</div>
    </Modal.Header>
  ) : null;
};

const ModalContent = ({
  className,
  contentClassName,
  children,
  scrolling,
}: {
  children: any;
  contentClassName?: string;
  className?: string;
  scrolling?: boolean;
}) => {
  const classNames = ['relate-by-ui-modal-content'];
  if (contentClassName) {
    classNames.push(contentClassName);
  }
  if (className) {
    classNames.push(className);
  }
  return (
    <Modal.Content scrolling={scrolling} className={classNames.join(' ')}>
      {children}
    </Modal.Content>
  );
};

const ModalActions = ({
  checkbox,
  buttons,
  className,
  semanticModal,
}: {
  checkbox?: any[] | any;
  buttons?: any[] | any;
  className?: string;
  semanticModal: ModalProps;
}) => {
  const { onClose } = semanticModal;

  const actions = buttons
    ? buttons
    : !!onClose &&
      buttons === undefined && (
        <ButtonDismissPrimary title="Close" onClick={(e: any) => onClose && onClose(e, semanticModal)} />
      );

  const classNames = ['relate-by-ui-modal-actions'];
  if (className) {
    classNames.push(className);
  }
  return actions ? (
    <Modal.Actions className={classNames.join(' ')}>
      {checkbox} {actions}
    </Modal.Actions>
  ) : null;
};

// Styles are added globally for specificity... looking into if it can be fixed here.
const StyledHeader = styled(ModalHeader)``;

const StyledContent = styled(ModalContent)``;

const StyledActions = styled(ModalActions)``;

const ModalWrapper = ({
  className,
  title,
  icon,
  scrolling,
  contentClassName,
  children,
  checkbox,
  buttons,
  semanticModal,
}: RelateByUIModalTypes) => {
  const modalClassName = ['relate-by-ui-modal'];
  if (semanticModal.className) {
    modalClassName.push(semanticModal.className);
  }
  if (className) {
    modalClassName.push(className);
  }

  if (!semanticModal.dimmer) {
    semanticModal.dimmer = 'inverted';
  }

  return (
    <Modal {...semanticModal} className={modalClassName.join(' ')}>
      <Global
        styles={css`
          .ui.modal.relate-by-ui-modal {
            box-shadow: 0px 0px 2px 0 rgba(52, 58, 67, 0.1), 0px 18px 38px 0 rgba(52, 58, 67, 0.08),
              0px 35px 65px 0 rgba(52, 58, 67, 0.08);
            border: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 2px;
          }

          .ui.modal.relate-by-ui-modal > .relate-by-ui-modal-header {
            background-color: initial;
            border: 0;
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
          }

          .ui.modal.relate-by-ui-modal > .relate-by-ui-modal-actions {
            background-color: initial;
            border: 0;
            display: flex;
            align-items: center;
            justify-content: flex-end;

            .ui.checkbox {
              margin-right: auto;
            }
          }
        `}
      />
      <StyledHeader title={title} icon={icon} />
      <StyledContent scrolling={scrolling} contentClassName={contentClassName}>
        {children}
      </StyledContent>
      <StyledActions checkbox={checkbox} buttons={buttons} semanticModal={semanticModal} />
    </Modal>
  );
};

const StyledModal = styled(ModalWrapper)`
  box-shadow: 0px 0px 2px 0 rgba(52, 58, 67, 0.1), 0px 18px 38px 0 rgba(52, 58, 67, 0.08),
    0px 35px 65px 0 rgba(52, 58, 67, 0.08);
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
`;

const RelateByUIModal = (props: RelateByUIModalTypes) => {
  return <StyledModal {...props} />;
};

export default RelateByUIModal;
