import React, { ReactEventHandler } from 'react';
import { Icon } from 'semantic-ui-react';

export interface ISavedScriptsExportButtonProps {
  onExport: ReactEventHandler;
}

export default function SavedScriptsExportButton({ onExport }: ISavedScriptsExportButtonProps) {
  return (
    <button
      className='saved-scripts__button saved-scripts__export-button'
      onClick={onExport}
    >
      <Icon name="download"/>
    </button>
  );
}
