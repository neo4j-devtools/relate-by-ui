import React, { ReactEventHandler } from 'react';
import { Icon } from 'semantic-ui-react';

export interface ISavedScriptsEditButtonProps {
  onEdit: ReactEventHandler;
}

export default function SavedScriptsEditButton({ onEdit }: ISavedScriptsEditButtonProps) {
  return (
    <button
      className='saved-scripts__button saved-scripts__edit-button'
      title='Edit'
      onClick={onEdit}
    >
      <Icon name="pencil"/>
    </button>
  );
}
