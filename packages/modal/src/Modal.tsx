import React from 'react';
import { Modal, ModalProps } from 'semantic-ui-react';
import { ButtonConfirm } from '@relate-by-ui/buttons';

// import './Modal.scss';

interface PropTypes {
  title: string;
  icon?: string;
  contentClassName?: string;
  scrolling?: boolean;
  children?: any[] | any;
  buttons?: any[] | any;
  semanticModal: ModalProps;
}

const InternalModal = ({ title, icon, scrolling, contentClassName, children, buttons, semanticModal }: PropTypes) => {
  const { onClose } = semanticModal;

  const modalClassName = ['ui-modal'];
  if (semanticModal.className) {
    modalClassName.push(semanticModal.className);
  }

  const modalContentClassName = ['ui-modal-content'];
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
          <div className="ui-modal-header">
            {icon && <i className={`ui-icon ui-icon-${icon} dark icon-header-small`} />}
            <div className="ui-modal-header-title">{title}</div>
          </div>
        </Modal.Header>
      )}
      <Modal.Content scrolling={scrolling} className={modalContentClassName.join(' ')}>
        {children}
      </Modal.Content>
      {actions && <Modal.Actions className="ui-modal-actions">{actions}</Modal.Actions>}
    </Modal>
  );
};

export default InternalModal;
