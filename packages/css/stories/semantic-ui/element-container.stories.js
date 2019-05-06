import React from 'react';
import * as faker from 'faker';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder/lib/placeholders';

const stories = storiesOf('Semantic UI/Element/Container', module);

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
