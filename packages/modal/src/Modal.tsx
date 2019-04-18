import React from 'react';
import { Modal } from 'semantic-ui-react';
import { RelateByUIModal } from './Types';
import { ButtonConfirm } from '@relate-by-ui/buttons';

const InternalModal = ({
  title,
  icon,
  scrolling,
  contentClassName,
  children,
  buttons,
  semanticModal,
}: RelateByUIModal) => {
  const { onClose } = semanticModal;

  const modalClassName = ['relate-by-ui-modal'];
  if (semanticModal.className) {
    modalClassName.push(semanticModal.className);
  }

  const modalContentClassName = ['relate-by-ui-modal-content'];
  if (contentClassName) {
    modalContentClassName.push(contentClassName);
  }

  const actions = buttons
    ? buttons
    : !!onClose &&
      buttons === undefined && (
        <ButtonConfirm title="Close" onClick={(e: any) => onClose && onClose(e, semanticModal)} />
      );

  return (
    <Modal {...semanticModal} className={modalClassName.join(' ')}>
      {title && (
        <Modal.Header>
          <div className="relate-by-ui-modal-header">
            {icon && <i className={`ui-icon ui-icon-${icon} dark icon-header-small`} />}
            <div className="relate-by-ui-modal-header-title">{title}</div>
          </div>
        </Modal.Header>
      )}
      <Modal.Content scrolling={scrolling} className={modalContentClassName.join(' ')}>
        {children}
      </Modal.Content>
      {actions && <Modal.Actions className="relate-by-ui-modal-actions">{actions}</Modal.Actions>}
    </Modal>
  );
};

export default InternalModal;
