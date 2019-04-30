import React from 'react';

import { storiesOf } from '@storybook/react';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';
import * as faker from "faker";

const stories = storiesOf('Element/Input', module);


stories.add('States:Focus', () => (
  <div className="ui segment">
    <div class="ui input focus">
      <input type="text" placeholder="Search..."/>
    </div>
  </div>
));


stories.add('States:Loading', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui left icon input loading">
        <input type="text" placeholder="Search..."/>
        <i class="search icon"></i>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui icon input loading">
        <input type="text" placeholder="Search..."/>
        <i class="search icon"></i>
      </div>
    </div>
  </div>
));

stories.add('States:Disabled', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui disabled input">
        <input type="text" placeholder="Search..."/>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui disabled icon input">
        <i class="search icon"></i>
        <input type="text" placeholder="Search..."/>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui input">
        <input type="text" placeholder="Search..." disabled=""/>
      </div>
    </div>
  </div>
));

stories.add('States:Error', () => (
  <div className="ui segment">
    <div class="ui input error">
      <input type="text" placeholder="Search..."/>
    </div>
  </div>
));

stories.add('Variations:Icon', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search icon"></i>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui left icon input">
        <input type="text" placeholder="Search users..."/>
        <i class="users icon"></i>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i class="circular search link icon"></i>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui icon input">
        <input type="text" placeholder="Search..."/>
        <i class="inverted circular search link icon"></i>
      </div>
    </div>
  </div>
));


stories.add('Variations:Labeled', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui labeled input">
        <div class="ui label">
          http://
        </div>
        <input type="text" placeholder="mysite.com"/>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui right labeled input">
        <input type="text" placeholder="Find domain"/>
        <div class="ui dropdown label">
          <div class="text">.com</div>
          <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item">.com</div>
            <div class="item">.net</div>
            <div class="item">.org</div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui right labeled input">
        <input type="text" placeholder="Enter weight.."/>
        <div class="ui basic label">
          kg
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui right labeled input">
        <label for="amount" class="ui label">$</label>
        <input type="text" placeholder="Amount" id="amount"/>
        <div class="ui basic label">.00</div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui right labeled left icon input">
        <i class="tags icon"></i>
        <input type="text" placeholder="Enter tags"/>
        <a class="ui tag label">
          Add Tag
        </a>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui left corner labeled input">
        <input type="text" placeholder="Search..."/>
        <div class="ui left corner label">
          <i class="asterisk icon"></i>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui corner labeled input">
        <input type="text" placeholder="Search..."/>
        <div class="ui corner label">
          <i class="asterisk icon"></i>
        </div>
      </div>
    </div>
  </div>
));

stories.add('Variations:Action', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui action input">
        <input type="text" placeholder="Search..."/>
        <button class="ui button">Search</button>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui left action input">
        <button class="ui teal labeled icon button">
          <i class="cart icon"></i>
          Checkout
        </button>
        <input type="text" value="$52.03"/>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui right action left icon input">
        <i class="search icon"></i>
        <input type="text" placeholder="Search"/>
        <div class="ui basic floating dropdown button">
          <div class="text">This Page</div>
          <i class="dropdown icon"></i>
          <div class="menu">
            <div class="item">This Organization</div>
            <div class="item">Entire Site</div>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui action input">
        <input type="text" placeholder="Search..."/>
        <select class="ui compact selection dropdown">
          <option value="all">All</option>
          <option selected="" value="articles">Articles</option>
          <option value="products">Products</option>
        </select>
        <div class="ui button">Search</div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui action input">
        <input type="text" value="http://ww.short.url/c0opq"/>
        <button class="ui teal right labeled icon button">
          <i class="copy icon"></i>
          Copy
        </button>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui action input">
        <input type="text" placeholder="Search..."/>
        <button class="ui icon button">
          <i class="search icon"></i>
        </button>
      </div>
    </div>
  </div>
));


stories.add('Variations:Transparent', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui transparent input">
        <input type="text" placeholder="Search..."/>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui transparent icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search icon"></i>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui transparent left icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search icon"></i>
      </div>
    </div>
  </div>
));


stories.add('Variations:Inverted', () => (
  <div className="ui segment">
    <div class="ui inverted segment">
      <div class="ui inverted input">
        <input type="text" placeholder="Search..."/>
      </div>
      <div class="ui inverted divider"></div>
      <div class="ui inverted left icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search icon"></i>
      </div>
      <div class="ui inverted divider"></div>
      <div class="ui inverted transparent icon input">
        <input type="text" placeholder="Search..."/>
        <i class="search icon"></i>
      </div>
    </div>
  </div>
));

stories.add('Variations:Fluid', () => (
  <div className="ui segment">
    <div class="ui fluid icon input">
      <input type="text" placeholder="Search a very wide input..."/>
      <i class="search icon"></i>
    </div>
    <div class="ui fluid action input">
      <input type="text" placeholder="Search..."/>
      <div class="ui button">Search</div>
    </div>
  </div>
));


stories.add('Variations:Size', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui mini icon input">
        <input type="text" placeholder="Search mini..."/>
        <i class="search icon"></i>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui small icon input">
        <input type="text" placeholder="Search small..."/>
        <i class="search icon"></i>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui large icon input">
        <input type="text" placeholder="Search large..."/>
        <i class="search icon"></i>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui big icon input">
        <input type="text" placeholder="Search big..."/>
        <i class="search icon"></i>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui huge icon input">
        <input type="text" placeholder="Search huge..."/>
        <i class="search icon"></i>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui massive icon input">
        <input type="text" placeholder="Search massive..."/>
        <i class="search icon"></i>
      </div>
    </div>
  </div>
));


stories.add('Variations:Password', () => (
  <div className="ui segment">
    <div class="ui input">
      <input type="password" placeholder={faker.internet.password()}/>
    </div>
  </div>
));

