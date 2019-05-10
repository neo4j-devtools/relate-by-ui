import React from 'react';
import * as faker from "faker";

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';

const typeStories = storiesOf('Element/Divider/Types', module);

typeStories.add('Divider', () => (
  <div className="ui segment">
    <TextBlock color='#E0E0E0' rows={4} />
    <div class="ui divider" />
    <TextBlock color='#E0E0E0' rows={4} />
  </div>
));


typeStories.add('Vertical Divider', () => (
  <div className="ui segment">
    <div class="ui segment">
      <div class="ui two column very relaxed grid">
        <div class="column">
          <TextBlock color='#E0E0E0' rows={4} />
        </div>
        <div class="column">
          <TextBlock color='#E0E0E0' rows={4} />
        </div>
      </div>
      <div class="ui vertical divider">
        and
      </div>
    </div>
  </div>
));


typeStories.add('Horizontal Divider', () => (
  <div className="ui segment">
    <h4 class="ui horizontal divider header">
      <i class="tag icon"></i>
      Description
    </h4>
    <p>Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs worldwide.</p>
    <h4 class="ui horizontal divider header">
      <i class="bar chart icon"></i>
      Specifications
    </h4>
    <table class="ui definition table">
      <tbody>
        <tr>
          <td class="two wide column">Size</td>
          <td>1" x 2"</td>
        </tr>
        <tr>
          <td>Weight</td>
          <td>6 ounces</td>
        </tr>
        <tr>
          <td>Color</td>
          <td>Yellowish</td>
        </tr>
        <tr>
          <td>Odor</td>
          <td>Not Much Usually</td>
        </tr>
      </tbody>
    </table>
  </div>
));

const variationStories = storiesOf('Element/Divider/Variations', module);

variationStories.add('Inverted', () => (
  <div class="ui inverted segment">
  <TextBlock color='#E0E0E0' rows={4} />
    <div class="ui inverted divider"></div>
    <TextBlock color='#E0E0E0' rows={4} />
    <h4 class="ui horizontal inverted divider">
      Horizontal
    </h4>
  </div>
));

variationStories.add('Fitted', () => (
  <div class="ui segment">
    {faker.lorem.lines(8)}
    <div class="ui fitted divider"></div>
    {faker.lorem.lines(8)}
  </div>
));


variationStories.add('Hidden', () => (
  <div class="ui segment">
    <h3 class="ui header">Section One</h3>
    <TextBlock color='#E0E0E0' rows={3} />
    <div class="ui hidden divider"></div>
    <h3 class="ui header">Section Two</h3>
    <TextBlock color='#E0E0E0' rows={3} />
  </div>
));

variationStories.add('Section', () => (
  <div class="ui segment">
    <h3 class="ui header">Section One</h3>
    <TextBlock color='#E0E0E0' rows={3} />
    <div class="ui section divider"></div>
    <h3 class="ui header">Section Two</h3>
    <TextBlock color='#E0E0E0' rows={3} />
  </div>
));


variationStories.add('Clearing', () => (
  <div class="ui segment">
    <h2 class="ui right floated header">Floated Content</h2>
    <div class="ui clearing divider"></div>
    <TextBlock color='#E0E0E0' rows={3} />
  </div>
));