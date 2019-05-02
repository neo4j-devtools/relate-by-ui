import React from 'react';

import { storiesOf } from '@storybook/react';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';
import * as faker from "faker";

const stories = storiesOf('Semantic UI/Element/Image', module);


stories.add('Image', () => (
  <div className="ui segments">
    <div className="ui segment">
      <img class="ui small image" src="/images/wireframe/image-square.png"/>
    </div>
    <div className="ui segment">
      <div class="ui small image">
        <img src="/images/wireframe/image-square.png"/>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui small image">
        <svg width="150" height="150">
          <image xlinkHref="/images/wireframe/image-square.png" x="0" y="0" width="100%" height="100%"></image>
        </svg>
      </div>
    </div>
  </div>
));

stories.add('Image Link', () => (
  <div className="ui segment">
    <a href="https://google.com" class="ui medium image">
      <img src="/images/wireframe/image-text.png"/>
    </a>
  </div>
));


stories.add('States:Hidden', () => (
  <div className="ui segment">
    <img class="hidden ui image" src="/images/wireframe/image.png"/>
  </div>
));

stories.add('States:Disabled', () => (
  <div className="ui segment">
    <img class="disabled medium ui image" src="/images/wireframe/image.png"/>
  </div>
));

stories.add('Variations:Avatar', () => (
  <div className="ui segment">
    <img class="ui avatar image" src="/images/wireframe/square-image.png"/>
    <span>Username</span>
  </div>
));

stories.add('Variations:Bordered', () => (
  <div className="ui segment">
    <img class="ui medium bordered image" src="/images/wireframe/white-image.png"/>
  </div>
));

stories.add('Variations:Fluid', () => (
  <div className="ui segment">
    <img class="ui fluid image" src="/images/wireframe/image.png"/>
  </div>
));

stories.add('Variations:Rounded', () => (
  <div className="ui segment">
    <img class="ui medium rounded image" src="/images/wireframe/square-image.png"/>
  </div>
));

stories.add('Variations:Circular', () => (
  <div className="ui segment">
    <img class="ui medium circular image" src="/images/wireframe/square-image.png"/>
  </div>
));

stories.add('Variations:Vertically Aligned', () => (
  <div className="ui segment">
    <img class="ui top aligned tiny image" src="/images/wireframe/square-image.png"/>
    <span>Top Aligned</span>
    <div class="ui divider"></div>
    <img class="ui middle aligned tiny image" src="/images/wireframe/square-image.png"/>
    <span>Middle Aligned</span>
    <div class="ui divider"></div>
    <img class="ui bottom aligned tiny image" src="/images/wireframe/square-image.png"/>
    <span>Bottom Aligned</span>
  </div>
));


stories.add('Variations:Centered', () => (
  <div class="ui segment">
    <img class="ui centered medium image" src="/images/wireframe/image.png"/>
    <p>{faker.lorem.lines(8)}</p>
    <p>{faker.lorem.lines(4)}</p>
    <img class="ui small centered image" src="/images/wireframe/text-image.png"/>
    <p>{faker.lorem.lines(4)}</p>
  </div>
));


stories.add('Variations:Spaced', () => (
  <div className="ui segments">
    <div class="ui segment">
      <p>{faker.lorem.words(4)} <img class="ui mini spaced image" src="/images/wireframe/image.png"/>
      {faker.lorem.words(2)}. {faker.lorem.lines(4)}</p>
    </div>
    <div className="ui segment">
      <p><img class="ui mini right spaced image" src="/images/wireframe/image.png"/>{faker.lorem.lines(8)}</p>
      <p>{faker.lorem.lines(4)}<img class="ui mini left spaced image" src="/images/wireframe/image.png"/></p>
    </div>
  </div>
));

stories.add('Variations:Floated', () => (
  <div class="ui segment">
    <img class="ui small left floated image" src="/images/wireframe/text-image.png"/>
    <p>{faker.lorem.lines(12)}</p>
    <img class="ui small right floated image" src="/images/wireframe/text-image.png"/>
    <p>{faker.lorem.lines(12)}</p>
    <p>{faker.lorem.lines(12)}</p>
  </div>
));

stories.add('Variations:Size', () => (
  <div className="ui segments">
    <div className="ui segment">
      <table class="ui definition table">
        <thead>
          <tr>
            <th>Class Name</th>
            <th>Size</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Mini</td>
            <td>35px</td>
          </tr>
          <tr>
            <td>Tiny</td>
            <td>80px</td>
          </tr>
          <tr>
            <td>Small</td>
            <td>150px</td>
          </tr>
          <tr>
            <td>Medium</td>
            <td>300px</td>
          </tr>
          <tr>
            <td>Large</td>
            <td>450px</td>
          </tr>
          <tr>
            <td>Big</td>
            <td>600px</td>
          </tr>
          <tr>
            <td>Huge</td>
            <td>800px</td>
          </tr>
          <tr>
            <td>Massive</td>
            <td>960px</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div className="ui segment">
      <img class="ui mini image" src="/images/wireframe/image.png"/>
      <div class="ui hidden divider"></div>
      <img class="ui tiny image" src="/images/wireframe/image.png"/>
      <div class="ui hidden divider"></div>
      <img class="ui small image" src="/images/wireframe/image.png"/>
      <div class="ui hidden divider"></div>
      <img class="ui medium image" src="/images/wireframe/image.png"/>
      <div class="ui hidden divider"></div>
      <img class="ui large image" src="/images/wireframe/image.png"/>
      <div class="ui hidden divider"></div>
      <img class="ui big image" src="/images/wireframe/image.png"/>
      <div class="ui hidden divider"></div>
      <img class="ui huge image" src="/images/wireframe/image.png"/>
      <div class="ui hidden divider"></div>
      <img class="ui massive image" src="/images/wireframe/image.png"/>
    </div>
  </div>
));

stories.add('Groups:Size', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui tiny images">
        <img class="ui image" src="/images/wireframe/image.png"/>
        <img class="ui image" src="/images/wireframe/image.png"/>
        <img class="ui image" src="/images/wireframe/image.png"/>
        <img class="ui image" src="/images/wireframe/image.png"/>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui small images">
        <img src="/images/wireframe/image.png"/>
        <img src="/images/wireframe/image.png"/>
        <img src="/images/wireframe/image.png"/>
        <img src="/images/wireframe/image.png"/>
      </div>
    </div>
  </div>
))