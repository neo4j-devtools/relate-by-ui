import React from 'react';

import { Dropdown } from '../../../packages/dropdown/src';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Elements', module);

stories.add(
  'Dropdown',
  () => (
    <div className="ui">
      <Dropdown title='File' items={[
        { text: 'New' },
        { text: 'Open...', description: 'ctrl + o' },
        { text: 'Save as...', description: 'ctrl + s' },
        { text: 'Rename', description: 'ctrl + r' },
        { text: 'Make a copy' },
        { text: 'Move to folder', icon: 'folder' },
        { text: 'Move to trash', icon: 'trash' },
        {},
        { text: 'Download As...' },
        { text: 'Publish To Web' },
        { text: 'E-mail Collaborators' }
      ]} />
    </div>
  ),
  {
    info: {
      text: `Dropdown component.`,
      inline: true,
    },
  },
);
