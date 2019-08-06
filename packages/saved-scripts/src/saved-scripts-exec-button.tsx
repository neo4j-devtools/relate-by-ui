import React, { ReactEventHandler } from 'react';
import { Icon } from 'semantic-ui-react';

export interface ISavedScriptsExecButtonProps {
  onExec: ReactEventHandler;
}

export default function SavedScriptsExecButton({ onExec }: ISavedScriptsExecButtonProps) {
  return (
    <button
      className='saved-scripts__button saved-scripts__exec-button'
      onClick={onExec}
    >
      <Icon name="play"/>
    </button>
  );
}
