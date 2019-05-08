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
));


stories.add('Tag', () => (
  <div className="ui segment">
    <a class="ui tag label">New</a>
    <a class="ui red tag label">Upcoming</a>
    <a class="ui teal tag label">Featured</a>
  </div>
));


stories.add('Ribbon', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui two column grid">
        <div class="column">
          <div class="ui raised segment">
            <a class="ui red ribbon label">Overview</a>
            <span>Account Details</span>
            <p><TextBlock color='#E0E0E0' rows={4} /></p>
            <a class="ui blue ribbon label">Community</a> User Reviews
            <p><TextBlock color='#E0E0E0' rows={4} /></p>
          </div>
        </div>
        <div class="column">
          <div class="ui segment">
            <a class="ui orange right ribbon label">Specs</a>
            <p><TextBlock color='#E0E0E0' rows={4} /></p>
            <a class="ui teal right ribbon label">Reviews</a>
            <p><TextBlock color='#E0E0E0' rows={4} /></p>
          </div>
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui two column grid">
        <div class="column">
          <div class="ui fluid image">
            <div class="ui black ribbon label">
              <i class="hotel icon"></i> Hotel
            </div>
            <img src="/images/wireframe/image.png"/>
          </div>
        </div>
        <div class="column">
          <div class="ui fluid image">
            <div class="ui blue ribbon label">
              <i class="spoon icon"></i> Food
            </div>
            <img src="/images/wireframe/image.png"/>
          </div>
        </div>
      </div>
    </div>
  </div>
));

stories.add('Attached', () => (
  <div class="ui cards">
    <div class="card">
      <div class="ui top attached label">HTML</div>
      <div class="content">
        <p><TextBlock color='#E0E0E0' rows={4} /></p>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <p><TextBlock color='#E0E0E0' rows={4} /></p>
      </div>
      <div class="ui bottom attached label">CSS</div>
    </div>
    <div class="card">
      <div class="content">
        <div class="ui top right attached label">Code</div>
        <p><TextBlock color='#E0E0E0' rows={4} /></p>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <div class="ui top left attached label">View</div>
        <p><TextBlock color='#E0E0E0' rows={4} /></p>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <p><TextBlock color='#E0E0E0' rows={4} /></p>
        <div class="ui bottom left attached label">User View</div>
      </div>
    </div>
    <div class="card">
      <div class="content">
        <p><TextBlock color='#E0E0E0' rows={4} /></p>
        <div class="ui bottom right attached label">Admin View</div>
      </div>
    </div>
  </div>
));

stories.add('Horizontal', () => (
  <div className="ui segment">
    <div class="ui divided selection list">
      <a class="item">
        <div class="ui red horizontal label">Fruit</div>
        Kumquats
      </a>
      <a class="item">
        <div class="ui purple horizontal label">Candy</div>
        Ice Cream
      </a>
      <a class="item">
        <div class="ui red horizontal label">Fruit</div>
        Orange
      </a>
      <a class="item">
        <div class="ui horizontal label">Dog</div>
        Poodle
      </a>
    </div>
  </div>
));

stories.add('Floating', () => (
  <div className="ui segment">
    <div class="ui compact menu">
      <a class="item">
        <i class="icon mail"></i> Messages
        <div class="floating ui red label">22</div>
      </a>
      <a class="item">
        <i class="icon users"></i> Friends
        <div class="floating ui teal label">22</div>
      </a>
    </div>
  </div>
));


stories.add('Content:Detail', () => (
  <div className="ui segment">
    <div class="ui label">
      Dogs
      <div class="detail">214</div>
    </div>
  </div>
));

stories.add('Content:Icon', () => (
  <div className="ui segment">
    <a class="ui label">
      <i class="mail icon"></i>
      Mail
    </a>
    <a class="ui label">
      Tag
      <i class="delete icon"></i>
    </a>
  </div>
));

stories.add('Content:Image', () => (
  <div className="ui segment">
    <a class="ui label">
      <img class="ui right spaced avatar image" src="/images/avatar/avatar_1.png"/>
      Elliot
    </a>
    <a class="ui label">
      <img src="/images/avatar/avatar_2.png"/>
      Stevie
    </a>
  </div>
));


stories.add('Content:Link', () => (
  <div className="ui segment">
    <a class="ui label">
      <i class="mail icon"></i> 23
    </a>
    <div class="ui hidden divider"></div>
    <div class="ui label">
      <i class="mail icon"></i>
      23
      <a class="detail">View Mail</a>
    </div>
  </div>
));

stories.add('Variations:Circular', () => (
  <div className="ui segment">
    <a class="ui red circular label">2</a>
    <a class="ui orange circular label">2</a>
    <a class="ui yellow circular label">2</a>
    <a class="ui olive circular label">2</a>
    <a class="ui green circular label">2</a>
    <a class="ui teal circular label">2</a>
    <a class="ui blue circular label">2</a>
    <a class="ui violet circular label">2</a>
    <a class="ui purple circular label">2</a>
    <a class="ui pink circular label">2</a>
    <a class="ui brown circular label">2</a>
    <a class="ui grey circular label">2</a>
    <a class="ui black circular label">2</a>
    <div class="ui hidden divider"></div>
    <a class="ui red empty circular label"></a>
    <a class="ui orange empty circular label"></a>
    <a class="ui yellow empty circular label"></a>
    <a class="ui olive empty circular label"></a>
    <a class="ui green empty circular label"></a>
    <a class="ui teal empty circular label"></a>
    <a class="ui blue empty circular label"></a>
    <a class="ui violet empty circular label"></a>
    <a class="ui purple empty circular label"></a>
    <a class="ui pink empty circular label"></a>
    <a class="ui brown empty circular label"></a>
    <a class="ui grey empty circular label"></a>
    <a class="ui black empty circular label"></a>
  </div>
));

stories.add('Variations:Basic', () => (
  <div className="ui segment">
    <a class="ui basic label">Basic</a>
    <a class="ui pointing basic label">Pointing</a>
    <a class="ui basic image label">
      <img src="/images/avatar/avatar_1.png"/>
      Elliot
    </a>
    <a class="ui pointing red basic label">Red Pointing</a>
    <a class="ui blue basic label">Blue</a>
  </div>
));

stories.add('Variations:Colored', () => (
  <div className="ui segment">
    <a class="ui red label">Red</a>
    <a class="ui orange label">Orange</a>
    <a class="ui yellow label">Yellow</a>
    <a class="ui olive label">Olive</a>
    <a class="ui green label">Green</a>
    <a class="ui teal label">Teal</a>
    <a class="ui blue label">Blue</a>
    <a class="ui violet label">Violet</a>
    <a class="ui purple label">Purple</a>
    <a class="ui pink label">Pink</a>
    <a class="ui brown label">Brown</a>
    <a class="ui grey label">Grey</a>
    <a class="ui black label">Black</a>
  </div>
));


stories.add('Variations:Size', () => (
  <div className="ui segment">
    <div class="ui mini label">
      Mini
    </div>
    <div class="ui tiny label">
      Tiny
    </div>
    <div class="ui small label">
      Small
    </div>
    <div class="ui label">
      Medium
    </div>
    <div class="ui large label">
      Large
    </div>
    <div class="ui big label">
      Big
    </div>
    <div class="ui huge label">
      Huge
    </div>
    <div class="ui massive label">
      Massive
    </div>
  </div>
));

stories.add('Group:Size', () => (
  <div className="ui segment">
    <div class="ui huge labels">
      <div class="ui label">
        Fun
      </div>
      <div class="ui label">
        Happy
      </div>
      <div class="ui label">
        Smart
      </div>
      <div class="ui label">
        Witty
      </div>
    </div>
  </div>
));


stories.add('Group:Colored', () => (
  <div className="ui segment">
    <div class="ui blue labels">
      <a class="ui label">
        Fun <i class="icon close"></i>
      </a>
      <a class="ui label">
        Happy
        <div class="detail">22</div>
      </a>
      <a class="ui label">
        Smart
      </a>
      <a class="ui label">
        Insane
      </a>
      <a class="ui label">
        Exciting
      </a>
    </div>
  </div>
));

stories.add('Group:Tag', () => (
  <div className="ui segment">
    <div class="ui tag labels">
      <a class="ui label">
        $10.00
      </a>
      <a class="ui label">
        $19.99
      </a>
      <a class="ui label">
        $24.99
      </a>
      <a class="ui label">
        $30.99
      </a>
      <a class="ui label">
        $10.25
      </a>
    </div>
  </div>
));


stories.add('Group:Circular', () => (
  <div className="ui segment">
    <div class="ui circular labels">
      <a class="ui label">
        11
      </a>
      <a class="ui label">
        22
      </a>
      <a class="ui label">
        33
      </a>
      <a class="ui label">
        44
      </a>
      <a class="ui label">
        141
      </a>
    </div>
  </div>
));





