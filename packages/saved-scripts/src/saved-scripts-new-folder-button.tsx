import React, { ReactEventHandler } from 'react';
import { Icon } from 'semantic-ui-react';

export interface ISavedScriptsNewFolderButtonProps {
  disabled?: boolean,
  onAdd: ReactEventHandler
}

export default function SavedScriptsNewFolderButton({ disabled, onAdd }: ISavedScriptsNewFolderButtonProps) {
  return (
    <button
      className='saved-scripts__button saved-scripts__new-folder-button'
      disabled={Boolean(disabled)}
      title='Add folder'
      onClick={onAdd}
    >
      <Icon name="folder open outline"/>
    </button>
  );
}

