import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import SavedScripts from '../../../packages/saved-scripts/src';
import { STATIC_SCRIPTS, STATIC_SCRIPTS_NAMESPACE } from './constants';

const stories = storiesOf('Saved Scripts', module);

stories.add(
  'Saved Scripts default',
  () => (
    <SavedScripts
      scripts={STATIC_SCRIPTS.filter(({ isSuggestion }) => !isSuggestion)}
      scriptsNamespace={STATIC_SCRIPTS_NAMESPACE}
      onSelectScript={action('onSelectScript')}
      onExecScript={action('onExecScript')}
      onExportScripts={action('onExportScripts')}
      onRemoveScript={action('onRemoveScript')}
      onUpdateFolder={action('onUpdateFolder')}
      onRemoveFolder={action('onRemoveFolder')}/>
  ),
);

stories.add(
  'Saved Scripts custom title',
  () => (
    <SavedScripts
      title="My custom title"
      scripts={STATIC_SCRIPTS.filter(({ isSuggestion }) => !isSuggestion)}
      scriptsNamespace={STATIC_SCRIPTS_NAMESPACE}
      onSelectScript={action('onSelectScript')}
      onExecScript={action('onExecScript')}
      onExportScripts={action('onExportScripts')}
      onRemoveScript={action('onRemoveScript')}
      onUpdateFolder={action('onUpdateFolder')}
      onRemoveFolder={action('onRemoveFolder')}/>
  ),
);

stories.add(
  'Saved Scripts static',
  () => (
    <SavedScripts
      isStatic
      scripts={STATIC_SCRIPTS}
      scriptsNamespace={STATIC_SCRIPTS_NAMESPACE}
      onSelectScript={action('onSelectScript')}
      onExecScript={action('onExecScript')}
      onExportScripts={action('onExportScripts')}
      onRemoveScript={action('onRemoveScript')}
      onUpdateFolder={action('onUpdateFolder')}
      onRemoveFolder={action('onRemoveFolder')}/>
  ),
);
