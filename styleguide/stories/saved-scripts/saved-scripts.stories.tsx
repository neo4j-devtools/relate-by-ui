import React from 'react';
import { storiesOf } from '@storybook/react';

import SavedScripts from '../../../packages/saved-scripts/src';
import { STATIC_SCRIPTS, STATIC_SCRIPTS_NAMESPACE } from './constants';

const stories = storiesOf('Saved Scripts', module);

const handlerFactory = (name: string) => (...args: any[]) => alert(`${name}:\n${args.map((arg) => JSON.stringify(arg)).join(',\n')}`);

stories.add(
  'Saved Scripts default',
  () => (
    <SavedScripts
      scripts={STATIC_SCRIPTS.filter(({ isSuggestion }) => !isSuggestion)}
      scriptsNamespace={STATIC_SCRIPTS_NAMESPACE}
      onSelectScript={handlerFactory('onSelectScript')}
      onExecScript={handlerFactory('onExecScript')}
      onExportScripts={handlerFactory('onExportScripts')}
      onRemoveScript={handlerFactory('onRemoveScript')}
      onUpdateFolder={handlerFactory('onUpdateFolder')}
      onRemoveFolder={handlerFactory('onRemoveFolder')}/>
  ),
);

stories.add(
  'Saved Scripts custom title',
  () => (
    <SavedScripts
      title="My custom title"
      scripts={STATIC_SCRIPTS.filter(({ isSuggestion }) => !isSuggestion)}
      scriptsNamespace={STATIC_SCRIPTS_NAMESPACE}
      onSelectScript={handlerFactory('onSelectScript')}
      onExecScript={handlerFactory('onExecScript')}
      onExportScripts={handlerFactory('onExportScripts')}
      onRemoveScript={handlerFactory('onRemoveScript')}
      onUpdateFolder={handlerFactory('onUpdateFolder')}
      onRemoveFolder={handlerFactory('onRemoveFolder')}/>
  ),
);

stories.add(
  'Saved Scripts static',
  () => (
    <SavedScripts
      isStatic
      scripts={STATIC_SCRIPTS}
      scriptsNamespace={STATIC_SCRIPTS_NAMESPACE}
      onSelectScript={handlerFactory('onSelectScript')}
      onExecScript={handlerFactory('onExecScript')}
      onExportScripts={handlerFactory('onExportScripts')}
      onRemoveScript={handlerFactory('onRemoveScript')}
      onUpdateFolder={handlerFactory('onUpdateFolder')}
      onRemoveFolder={handlerFactory('onRemoveFolder')}/>
  ),
);
