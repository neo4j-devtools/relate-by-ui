import React from 'react';
import * as faker from 'faker';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder/lib/placeholders';

const stories = storiesOf('Element/Container', module);

stories.add('Container', () => (
  <div>
    <div className="ui container">
      <MediaBlock color="#E0E0E0" rows={4} />
    </div>
  </div>
));

stories.add('Text Container', () => (
  <div>
    <div className="ui text container">
      <p>{faker.lorem.lines(12)}</p>
    </div>
  </div>
));

stories.add('Text Alignment', () => (
  <div className="ui segment">
    <div class="ui left aligned container">
      <p>Left. {faker.lorem.lines(1)}</p>
    </div>
    <div class="ui center aligned container">
      <p>Center. {faker.lorem.lines(1)}</p>
    </div>
    <div class="ui right aligned container">
      <p>Right. {faker.lorem.lines(1)}</p>
    </div>
    <div class="ui justified container">
      <p>Justified. {faker.lorem.lines(6)}</p>
    </div>
  </div>
));

stories.add('Fluid', () => (
  <div>
    <div className="ui fluid container">
      <p>{faker.lorem.lines(12)}</p>
    </div>
  </div>
));

const exampleStories = storiesOf('Element/Container/Examples', module);

exampleStories.add('Using Grids', () => (
  <div class="ui four column doubling stackable grid container">
    <div class="column">
      <p><MediaBlock color="#E0E0E0" rows={4} /></p>
      <p><TextBlock style={{height:'4em'}} color='#E0E0E0' rows={4} /></p>
      <p><TextBlock style={{height:'4em'}} color='#E0E0E0' rows={4} /></p>
    </div>
    <div class="column">
      <p><MediaBlock color="#E0E0E0" rows={4} /></p>
      <p><TextBlock style={{height:'4em'}} color='#E0E0E0' rows={4} /></p>
      <p><TextBlock style={{height:'4em'}} color='#E0E0E0' rows={4} /></p>
    </div>
    <div class="column">
      <p><MediaBlock color="#E0E0E0" rows={4} /></p>
      <p><TextBlock style={{height:'4em'}} color='#E0E0E0' rows={4} /></p>
      <p><TextBlock style={{height:'4em'}} color='#E0E0E0' rows={4} /></p>
    </div>
    <div class="column">
      <p><MediaBlock color="#E0E0E0" rows={4} /></p>
      <p><TextBlock style={{height:'4em'}} color='#E0E0E0' rows={4} /></p>
      <p><TextBlock style={{height:'4em'}} color='#E0E0E0' rows={4} /></p>
    </div>
  </div>
));

exampleStories.add('Centered Menu', () => (
  <div class="ui attached stackable menu">
    <div class="ui container">
      <a class="item">
        <i class="home icon"></i> Home
      </a>
      <a class="item">
        <i class="grid layout icon"></i> Browse
      </a>
      <a class="item">
        <i class="mail icon"></i> Messages
      </a>
      <div class="ui simple dropdown item">
        More
        <i class="dropdown icon"></i>
        <div class="menu">
          <a class="item"><i class="edit icon"></i> Edit Profile</a>
          <a class="item"><i class="globe icon"></i> Choose Language</a>
          <a class="item"><i class="settings icon"></i> Account Settings</a>
        </div>
      </div>
      <div class="right item">
        <div class="ui input"><input type="text" placeholder="Search..."/></div>
      </div>
    </div>
  </div>
));


exampleStories.add('Centered Menu', () => (
  <div class="ui raised very padded text container segment">
    <h2 class="ui header">Dogs Roles with Humans</h2>
    <p>{faker.lorem.lines(8)}</p>
    <p>{faker.lorem.lines(12)}</p>
  </div>
));
