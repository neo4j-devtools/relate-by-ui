import React from 'react';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { map, first, last, sortBy, lowerCase, compact } from 'lodash-es';

import { AnyFunc, IScript } from './types';

import { arrayHasItems } from './generic.utils';
import { useEmptyFolders, useScriptsFolders } from './saved-scripts.hooks';

import SavedScriptsFolder from './saved-scripts-folder';
import SavedScriptsNewFolderButton from './saved-scripts-new-folder-button';
import SavedScriptsExportButton from './saved-scripts-export-button';

import './saved-scripts.css';

export interface ISavedScriptsProps {
  title?: string;
  isStatic?: boolean;
  scriptsNamespace: string;
  scripts: IScript[];
  onSelectScript: AnyFunc;
  onExportScripts: AnyFunc;
  onExecScript: AnyFunc;
  onRemoveScript: AnyFunc;
  onUpdateFolder: AnyFunc;
  onRemoveFolder: AnyFunc;
}

export default function SavedScripts(props: ISavedScriptsProps) {
  const {
    title,
    isStatic,
    scriptsNamespace,
    scripts,
    onExportScripts,
    onExecScript,
    onSelectScript,
    onRemoveScript,
    onUpdateFolder,
    onRemoveFolder,
  } = props;
  const [rootFolder, subFolders] = useScriptsFolders(scriptsNamespace, scripts);
  // lodash-es typings cant handle tuples
  const allSavedFolderNames = compact([first(rootFolder), ...map(subFolders, first)]) as string[];
  const [
    emptyFolders,
    canAddFolder,
    addEmptyFolder,
    updateEmptyFolder,
    removeEmptyFolder,
  ] = useEmptyFolders(scriptsNamespace, allSavedFolderNames);
  const allFolderNames = [...allSavedFolderNames, ...emptyFolders];
  const sortedSubFolders = sortBy(subFolders, folder =>
    // lodash-es typings cant handle tuples
    lowerCase(first(folder) as string | undefined),
  );

  return (
    <div className="saved-scripts">
      <DndProvider backend={HTML5Backend}>
        <div className="saved-scripts__body">
          <div className="saved-scripts__body-section">
            <h5 className="saved-scripts__header">
              {title}
              <div className="saved-scripts__button-wrapper">
                {isStatic ? null : (
                  <>
                    <SavedScriptsExportButton onExport={() => onExportScripts()}/>
                    <SavedScriptsNewFolderButton
                      disabled={!canAddFolder}
                      onAdd={() => addEmptyFolder()}
                    />
                  </>
                )}
              </div>
            </h5>
            <SavedScriptsFolder
              isRoot
              isStatic={isStatic}
              scriptsNamespace={scriptsNamespace}
              allFolderNames={allFolderNames}
              folderName={first(rootFolder) as string}
              scripts={last(rootFolder) as IScript[]}
              onSelectScript={onSelectScript}
              onExecScript={onExecScript}
              onRemoveScript={onRemoveScript}
              onUpdateFolder={onUpdateFolder}
              onRemoveFolder={Function.prototype}
            />
            {map(sortedSubFolders, ([folderName, subScripts]) => (
              <SavedScriptsFolder
                key={`my-folder-${folderName}`}
                isStatic={isStatic}
                scriptsNamespace={scriptsNamespace}
                allFolderNames={allFolderNames}
                folderName={folderName}
                scripts={subScripts}
                onSelectScript={onSelectScript}
                onExecScript={onExecScript}
                onRemoveScript={onRemoveScript}
                onUpdateFolder={onUpdateFolder}
                onRemoveFolder={onRemoveFolder}
              />
            ))}
            {map(emptyFolders, folderName => (
              <SavedScriptsFolder
                key={`my-empty-folder-${folderName}`}
                isStatic={isStatic}
                scriptsNamespace={scriptsNamespace}
                allFolderNames={allFolderNames}
                folderName={folderName}
                scripts={[]}
                onSelectScript={Function.prototype}
                onExecScript={Function.prototype}
                onRemoveScript={Function.prototype}
                onUpdateFolder={(folderScripts, { path }) =>
                  arrayHasItems(folderScripts)
                    ? onUpdateFolder(folderScripts, { path })
                    : updateEmptyFolder(folderName, path)
                }
                onRemoveFolder={() => removeEmptyFolder(folderName)}
              />
            ))}
          </div>
        </div>
      </DndProvider>
    </div>
  );
}

SavedScripts.defaultProps = {
  title: 'Saved Scripts',
};
