import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';

const typeStories = storiesOf('Element/Reveal/Types', module);

typeStories.add('Fade', () => (
  <div className="ui container">
    <div class="ui segment">
      <div class="ui fade reveal">
        <div class="visible content">
          <img src="/images/wireframe/square-image.png" class="ui small image"/>
        </div>
        <div class="hidden content">
          <img src="/images/avatar/square-sheriff.png" class="ui small image"/>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui small fade reveal image">
        <img class="visible content" src="/images/wireframe/square-image.png"/>
        <img class="hidden content" src="/images/avatar/square-farmer.png"/>
      </div>
    </div>
  </div>
));


typeStories.add('Move', () => (
  <div className="ui container">
    <div class="ui segment">
    <div class="ui move reveal">
      <div class="visible content">
        <img src="/images/wireframe/square-image.png" class="ui small image"/>
      </div>
      <div class="hidden content">
        <img src="/images/avatar/square-journalist.png" class="ui small image"/>
      </div>
    </div>
    </div>
    <div className="ui segment">
      <div class="ui move right reveal">
        <div class="visible content">
          <img src="/images/wireframe/square-image.png" class="ui small image"/>
        </div>
        <div class="hidden content">
          <img src="/images/avatar/square-pilot.png" class="ui small image"/>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui move up reveal">
        <div class="visible content">
          <img src="/images/wireframe/square-image.png" class="ui small image"/>
        </div>
        <div class="hidden content">
          <img src="/images/avatar/square-scientist.png" class="ui small image"/>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui move down reveal">
        <div class="visible content">
          <img src="/images/wireframe/square-image.png" class="ui small image"/>
        </div>
        <div class="hidden content">
          <img src="/images/avatar/square-teacher.png" class="ui small image"/>
        </div>
      </div>
    </div>
  </div>
));

typeStories.add('Rotate', () => (
  <div className="ui container">
    <div class="ui segment">
      <div class="ui small circular rotate reveal image">
        <img src="/images/wireframe/square-image.png" class="visible content"/>
        <img src="/images/avatar/square-cooker.png" class="hidden content"/>
      </div>
    </div>
    <div class="ui segment">
      <div class="ui small circular rotate left reveal image">
        <img src="/images/wireframe/square-image.png" class="visible content"/>
        <img src="/images/avatar/square-chef.png" class="hidden content"/>
      </div>
    </div>
  </div>
));


const contentStories = storiesOf('Element/Reveal/Content', module);

contentStories.add('Visible', () => (
  <div className="ui segment">
    <div class="ui small fade reveal image">
      <img class="visible content" src="/images/avatar/square-engineer.png"/>
      <img class="hidden content" src="/images/wireframe/square-image.png"/>
    </div>
  </div>
));

contentStories.add('Hidden', () => (
  <div className="ui segment">
    <div class="ui small fade reveal image">
      <img class="visible content" src="/images/wireframe/square-image.png"/>
      <img class="hidden content" src="/images/avatar/square-welder.png"/>
    </div>
  </div>
));


const stateStories = storiesOf('Element/Reveal/States', module);

stateStories.add('Visible', () => (
  <div className="ui segment">
    <div class="ui active move left reveal">
      <div class="visible content">
        <img src="/images/wireframe/square-image.png" class="ui small image"/>
      </div>
      <div class="hidden content">
        <img src="/images/avatar/square-writer.png" class="ui small image"/>
      </div>
    </div>

  </div>
));

stateStories.add('Disabled', () => (
  <div className="ui segment">
    <div class="ui disabled move reveal">
      <div class="visible content">
        <img src="/images/wireframe/square-image.png" class="ui small image"/>
      </div>
      <div class="hidden content">
        <img src="/images/avatar/square-postman.png" class="ui small image"/>
      </div>
    </div>
  </div>
));

const variationStories = storiesOf('Element/Reveal/Variations', module);

variationStories.add('Instant', () => (
  <div className="ui segment">
    <div class="ui instant move reveal">
      <div class="visible content">
        <img src="/images/wireframe/square-image.png" class="ui small image"/>
      </div>
      <div class="hidden content">
        <img src="/images/avatar/square-soldier.png" class="ui small image"/>
      </div>
    </div>
  </div>
));