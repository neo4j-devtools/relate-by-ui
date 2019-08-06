import React, { useState } from 'react';
import { lowerCase, map, sortBy } from 'lodash-es';

import { AnyFunc, IScript } from './types';

import { ENTER_KEY_CODE } from './saved-scripts.constants';
import {
  addScriptPathPrefix,
  getScriptDisplayName,
  omitScriptPathPrefix,
} from './saved-scripts.utils';
import { useCustomBlur, useFolderDrop, useNameUpdate } from './saved-scripts.hooks';

import SavedScriptsListItem from './saved-scripts-list-item';
import SavedScriptsEditButton from './saved-scripts-edit-button';
import SavedScriptsRemoveButton from './saved-scripts-remove-button';
import {
  CollapseMenuIcon,
  ExpandMenuRightIcon,
} from './icons';

import {
  SavedScriptsButtonWrapper,
  SavedScriptsFolderBody,
  SavedScriptsFolderCollapseIcon,
  SavedScriptsFolderHeader,
  SavedScriptsFolderLabel,
  SavedScriptsFolderMain,
  SavedScriptsInput,
} from './saved-scripts.styled';

export interface ISavedScriptsFolderProps {
  isRoot?: boolean,
  scriptsNamespace: string,
  allFolderNames: string[],
  folderName: string,
  scripts: IScript[],
  onSelectScript: AnyFunc,
  onExecScript: AnyFunc,
  onRemoveScript: AnyFunc,
  onUpdateFolder: AnyFunc,
  onRemoveFolder: AnyFunc,
  isStatic?: boolean
}

export default function SavedScriptsFolder({
  isRoot = false,
  scriptsNamespace,
  allFolderNames,
  folderName,
  scripts,
  isStatic,
  onSelectScript,
  onExecScript,
  onRemoveScript,
  onUpdateFolder,
  onRemoveFolder,
}: ISavedScriptsFolderProps) {
  const sortedScripts = sortBy(scripts, script =>
    lowerCase(getScriptDisplayName(script)),
  );
  const [isEditing, labelInput, setIsEditing, setLabelInput] = useNameUpdate(
    folderName,
    name =>
      onUpdateFolder(scripts, {
        path: addScriptPathPrefix(scriptsNamespace, name),
      }),
  );
  const [expanded, setExpanded] = useState(false);
  const [dropRef] = useFolderDrop(folderName, allFolderNames, onUpdateFolder);
  const [blurRef] = useCustomBlur(() => setIsEditing(false));

  if (isRoot) {
    return (
      <SavedScriptsFolderMain ref={dropRef} className='saved-scripts-folder saved-scripts-folder--root'>
        {map(sortedScripts, (script) => (
          <SavedScriptsListItem
            key={`my-script-${script.id}`}
            isStatic={isStatic}
            script={script}
            onSelectScript={onSelectScript}
            onExecScript={onExecScript}
            onUpdateScript={(script, payload) =>
              onUpdateFolder([script], payload)
            }
            onRemoveScript={onRemoveScript}
          />
        ))}
      </SavedScriptsFolderMain>
    );
  }

  return (
    <SavedScriptsFolderMain ref={dropRef} className='saved-scripts-folder'>
      <SavedScriptsFolderHeader ref={blurRef} className='saved-scripts-folder__header'>
        {isEditing ? (
          <SavedScriptsInput
            className='saved-scripts-folder__label-input'
            type='text'
            autoFocus
            onKeyPress={({ charCode }) => {
              charCode === ENTER_KEY_CODE && setIsEditing(false);
            }}
            value={omitScriptPathPrefix(scriptsNamespace, labelInput)}
            onChange={({ target }) => setLabelInput(target.value)}
          />
        ) : (
          <SavedScriptsFolderLabel
            className='saved-scripts-folder__label'
            onClick={() => setExpanded(!expanded)}
          >
            <SavedScriptsFolderCollapseIcon className='saved-scripts-folder__collapse-icon'>
              {expanded ? <CollapseMenuIcon/> : <ExpandMenuRightIcon/>}
            </SavedScriptsFolderCollapseIcon>
            {omitScriptPathPrefix(scriptsNamespace, folderName)}
          </SavedScriptsFolderLabel>
        )}
        <SavedScriptsButtonWrapper className='saved-scripts__button-wrapper'>
          {isStatic || isEditing ? null : (
            <SavedScriptsEditButton onEdit={() => setIsEditing(!isEditing)}/>
          )}
          {isStatic || !isEditing ? null : (
            <SavedScriptsRemoveButton onRemove={() => onRemoveFolder(scripts)}/>
          )}
        </SavedScriptsButtonWrapper>
      </SavedScriptsFolderHeader>
      {expanded ? (
        <SavedScriptsFolderBody className='saved-scripts-folder__body'>
          {map(sortedScripts, (script) => (
            <SavedScriptsListItem
              key={`my-script-${script.id}`}
              isStatic={isStatic}
              script={script}
              onSelectScript={onSelectScript}
              onExecScript={onExecScript}
              onUpdateScript={(script, payload) =>
                onUpdateFolder([script], payload)
              }
              onRemoveScript={onRemoveScript}
            />
          ))}
        </SavedScriptsFolderBody>
      ) : null}
    </SavedScriptsFolderMain>
  );
}
