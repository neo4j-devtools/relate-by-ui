import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';

const stories = storiesOf('Global/Variables', module);


stories.add('Brand Colors', () => (
  <div className="ui segment">
    <a className="ui primary button">Primary Brand Color</a>
    <a className="ui secondary button">Secondary Brand Color</a>
  </div>
));

stories.add('Colors', () => (
  <div className="ui segment">
    <div className="ui five column stackable padded grid">
      <div className="red column">Red</div>
      <div className="orange column">Orange</div>
      <div className="yellow column">Yellow</div>
      <div className="olive column">Olive</div>
      <div className="green column">Green</div>
      <div className="teal column">Teal</div>
      <div className="blue column">Blue</div>
      <div className="violet column">Violet</div>
      <div className="purple column">Purple</div>
      <div className="pink column">Pink</div>
      <div className="brown column">Brown</div>
      <div className="grey column">Grey</div>
      <div className="black column">Black</div>
    </div>
  </div>
));

stories.add('Border Styles', () => (
  <div className="ui segment">
    <h3 className="ui header">Examples of UI that inherit border styles</h3>
    <div className="ui segment">Segment</div>
    <div className="ui button">Button</div>
    <div className="ui menu">
      <div className="item">One</div>
      <div className="item">Two</div>
    </div>
    <table className="ui definition table">
      <thead>
        <tr><th></th>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr></thead>
      <tbody>
        <tr>
          <td>Definition</td>
          <td>1A</td>
          <td>1B</td>
        </tr>
        <tr>
          <td>Definition</td>
          <td>2A</td>
          <td>2B</td>
        </tr>
      </tbody>
    </table>
  </div>
));

stories.add('Size', () => (
  <div className="ui segment">
    <h3 className="ui header">Examples of Absolutely Sized UI</h3>
      <div className="ui button">
        Button
      </div>
      <div className="ui input">
        <input type="text" placeholder="Input"/>
      </div>
      <h3 className="ui header">Examples of Relative Sized UI</h3>
      <div>
        <p>Larger content container</p>
        <div className="ui bulleted link list">
          <a className="item">List Item</a>
          <a className="item">List Item</a>
          <a className="item">List Item</a>
          <a className="item">List Item</a>
          <a className="item">List Item</a>
        </div>
        <div className="ui message">
          <p>Message</p>
        </div>
      </div>
  </div>
))
