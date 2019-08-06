import React from 'react';

import { AnyFunc, IScript } from './types';

import { ENTER_KEY_CODE } from './saved-scripts.constants';
import {getScriptDisplayName} from './saved-scripts.utils';
import { useCustomBlur, useScriptDrag, useNameUpdate } from './saved-scripts.hooks';

import SavedScriptsExecButton from './saved-scripts-exec-button';
import SavedScriptsEditButton from './saved-scripts-edit-button';
import SavedScriptsRemoveButton from './saved-scripts-remove-button';

import {
  SavedScriptsButtonWrapper,
  SavedScriptsInput,
  SavedScriptsListItemDisplayName,
  SavedScriptsListItemMain,
} from './saved-scripts.styled';

export interface ISavedScriptsListItemProps {
  isStatic?: boolean,
  script: IScript,
  onSelectScript: AnyFunc,
  onExecScript: AnyFunc,
  onUpdateScript: AnyFunc,
  onRemoveScript: AnyFunc,
}

export default function SavedScriptsListItem({
  isStatic,
  script,
  onSelectScript,
  onExecScript,
  onUpdateScript,
  onRemoveScript,
}: ISavedScriptsListItemProps) {
  const displayName = getScriptDisplayName(script);
  const [isEditing, nameValue, setIsEditing, setLabelInput] = useNameUpdate(
    displayName,
    name => onUpdateScript(script, { name }),
  );
  const [dragRef] = useScriptDrag(script);
  const [blurRef] = useCustomBlur(() => setIsEditing(false));

  return (
    <SavedScriptsListItemMain ref={blurRef} className='saved-scripts-list-item'>
      {isEditing ? (
        <SavedScriptsInput
          className='saved-scripts-list-item__name-input'
          type='text'
          autoFocus
          onKeyPress={({ charCode }) => {
            charCode === ENTER_KEY_CODE && setIsEditing(false);
          }}
          value={nameValue}
          onChange={({ target }) => setLabelInput(target.value)}
        />
      ) : (
        <SavedScriptsListItemDisplayName
          ref={dragRef}
          className='saved-scripts-list-item__display-name'
          onClick={() => !isEditing && onSelectScript(script)}
        >
          {displayName}
        </SavedScriptsListItemDisplayName>
      )}
      <SavedScriptsButtonWrapper className='saved-scripts__button-wrapper'>
        {isStatic || isEditing ? null : (
          <SavedScriptsEditButton onEdit={() => setIsEditing(!isEditing)}/>
        )}
        {isStatic || !isEditing ? null : (
          <SavedScriptsRemoveButton onRemove={() => onRemoveScript(script)}/>
        )}
        {script.isSuggestion || isEditing ? null : (
          <SavedScriptsExecButton onExec={() => onExecScript(script)}/>
        )}
      </SavedScriptsButtonWrapper>
    </SavedScriptsListItemMain>
  );
}
