import React from 'react';

import { storiesOf } from '@storybook/react';
import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder/lib/placeholders';
import * as faker from 'faker';

const stories = storiesOf('Module/Dropdown', module);

stories.add('Dropdown', () => (
  <div className="ui segment">
    <div class="ui dropdown">
      <div class="text">File</div>
      <i class="dropdown icon" />
      <div class="menu">
        <div class="item">New</div>
        <div class="item">
          <span class="description">ctrl + o</span>
          Open...
        </div>
        <div class="item">
          <span class="description">ctrl + s</span>
          Save as...
        </div>
        <div class="item">
          <span class="description">ctrl + r</span>
          Rename
        </div>
        <div class="item">Make a copy</div>
        <div class="item">
          <i class="folder icon" />
          Move to folder
        </div>
        <div class="item">
          <i class="trash icon" />
          Move to trash
        </div>
        <div class="divider" />
        <div class="item">Download As...</div>
        <div class="item">
          <i class="dropdown icon" />
          Publish To Web
          <div class="menu">
            <div class="item">Google Docs</div>
            <div class="item">Google Drive</div>
            <div class="item">Dropbox</div>
            <div class="item">Adobe Creative Cloud</div>
            <div class="item">Private FTP</div>
            <div class="item">Another Service...</div>
          </div>
        </div>
        <div class="item">E-mail Collaborators</div>
      </div>
    </div>
  </div>
));
