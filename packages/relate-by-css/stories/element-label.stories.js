import React from 'react';

import { storiesOf } from '@storybook/react';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';
import * as faker from "faker";

const stories = storiesOf('Element/Label', module);


stories.add('Label', () => (
  <div className="ui segment">
    <div class="ui label">
      <i class="mail icon"></i> 23
    </div>
  </div>
));

stories.add('Image', () => (
  <div className="ui segments">
    <div className="ui segment">
      <a class="ui image label">
        <img src="/images/avatar/avatar_11.png"/>
        Joe
      </a>
      <a class="ui image label">
        <img src="/images/avatar/avatar_10.png"/>
        Elliot
      </a>
      <a class="ui image label">
        <img src="/images/avatar/avatar_9.png"/>
        Stevie
      </a>
    </div>
    <div className="ui segment">
      <a class="ui blue image label">
        <img src="/images/avatar/avatar_8.png"/>
        Veronika
        <div class="detail">Friend</div>
      </a>
      <a class="ui teal image label">
        <img src="/images/avatar/avatar_7.png"/>
        Veronika
        <div class="detail">Student</div>
      </a>
      <a class="ui yellow image label">
        <img src="/images/avatar/avatar_6.png"/>
        Helen
        <div class="detail">Co-worker</div>
      </a>
    </div>
    <div className="ui segment">
      <div class="ui image label">
        <img src="/images/avatar/avatar_5.png"/>
        Adrienne
        <i class="delete icon"></i>
      </div>
      <div class="ui image label">
        <img src="/images/avatar/avatar_4.png"/>
        Zoe
        <i class="delete icon"></i>
      </div>
      <div class="ui image label">
        <img src="/images/avatar/avatar_3.png"/>
        Nan
        <i class="delete icon"></i>
      </div>
    </div>
  </div>
));

stories.add('Pointing', () => (
  <div className="ui segments">
    <div className="ui segment">
      <form class="ui fluid form">
        <div class="field">
          <input type="text" placeholder="First name"/>
          <div class="ui pointing label">
            Please enter a value
          </div>
        </div>
        <div class="ui divider"></div>
        <div class="field" placeholder="Last Name">
          <div class="ui pointing below label">
            Please enter a value
          </div>
          <input type="text"/>
        </div>
        <div class="ui divider"></div>
        <div class="inline field">
          <input type="text" placeholder="Username"/>
          <div class="ui left pointing label">
            That name is taken!
          </div>
        </div>
        <div class="ui divider"></div>
        <div class="inline field">
          <div class="ui right pointing label">
            Your password must be 6 characters or more
          </div>
          <input type="password"/>
        </div>
      </form>
    </div>
    <div className="ui segment">
      <form class="ui fluid form">
        <div class="field">
          <input type="text" placeholder="First name"/>
          <div class="ui pointing red basic label">
            Please enter a value
          </div>
        </div>
        <div class="ui divider"></div>
        <div class="field" placeholder="Last Name">
          <div class="ui pointing below red basic label">
            Please enter a value
          </div>
          <input type="text"/>
        </div>
        <div class="ui divider"></div>
        <div class="inline field">
          <input type="text" placeholder="Username"/>
          <div class="ui left pointing red basic label">
            That name is taken!
          </div>
        </div>
        <div class="ui divider"></div>
        <div class="inline field">
          <div class="ui right pointing red basic label">
            Your password must be 6 characters or more
          </div>
          <input type="password"/>
        </div>
      </form>
    </div>
  </div>
));

stories.add('Corner', () => (
  <div className="ui segment">
    <div class="ui two column grid">
      <div class="column">
        <div class="ui fluid image">
          <a class="ui left corner label">
            <i class="heart icon"></i>
          </a>
          <img src="/images/wireframe/image.png"/>
        </div>
      </div>
      <div class="column">
        <div class="ui fluid image">
          <a class="ui red right corner label">
            <i class="save icon"></i>
          </a>
          <img src="/images/wireframe/image.png"/>
        </div>
      </div>
    </div>
  </div>
))

