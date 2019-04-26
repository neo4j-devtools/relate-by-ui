import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';

const stories = storiesOf('Element/Header', module);


stories.add('Page Headers', () => (
  <div className="ui segment">
    <h1 className="ui header">First header</h1>
      <TextBlock color='#E0E0E0' rows={4} />
    <h2 className="ui header">Second header</h2>
      <TextBlock color='#E0E0E0' rows={4} />
    <h3 className="ui header">Third header</h3>
      <TextBlock color='#E0E0E0' rows={4} />
    <h4 className="ui header">Fourth header</h4>
      <TextBlock color='#E0E0E0' rows={4} />
    <h5 className="ui header">Fifth header</h5>
      <TextBlock color='#E0E0E0' rows={4} />
  </div>
));


stories.add('Content Headers', () => (
  <div class="ui segment">
    <div class="ui huge header">Huge Header</div>
      <TextBlock color='#E0E0E0' rows={4} />
    <div class="ui large header">Large Header</div>
      <TextBlock color='#E0E0E0' rows={4} />
    <div class="ui medium header">Medium Header</div>
      <TextBlock color='#E0E0E0' rows={4} />
    <div class="ui small header">Small Header</div>
      <TextBlock color='#E0E0E0' rows={4} />
    <div class="ui tiny header">Tiny Header</div>
      <TextBlock color='#E0E0E0' rows={4} />
  </div>
));


stories.add('Icon Headers', () => (
  <div className="ui segment">
    <h2 class="ui icon header">
      <i class="settings icon"></i>
      <div class="content">
        Account Settings
        <div class="sub header">Manage your account settings and set e-mail preferences.</div>
      </div>
    </h2>
    <div className="ui divider"/>
    <h2 class="ui center aligned icon header">
      <i class="circular users icon"></i>
      Friends
    </h2>
        <MediaBlock color='#E0E0E0' rows={4}/>
  </div>
));


stories.add('Sub Headers', () => (
  <div className="ui segments">
    <div class="ui segment">
      <h2 class="ui sub header">
        Price
      </h2>
      <span>$10.99</span>
    </div>
    <div className="ui segment">
      <div class="ui horizontal list">
        <div class="item">
          <img class="ui mini circular image" src="/images/avatar/avatar_1.png"/>
          <div class="content">
            <div class="ui sub header">Molly</div>
            Coordinator
          </div>
        </div>
        <div class="item">
          <img class="ui mini circular image" src="/images/avatar/avatar_2.png"/>
          <div class="content">
            <div class="ui sub header">Elyse</div>
            Developer
          </div>
        </div>
        <div class="item">
          <img src="/images/avatar/avatar_3.png" class="ui mini circular image"/>
          <div class="content">
            <div class="ui sub header">Eve</div>
            Project Manager
          </div>
        </div>
      </div>
    </div>
  </div>
));


stories.add('Content: Image', () => (
  <div className="ui segments">
    <div class="ui segment">
      <h2 class="ui header">
        <img class="ui image" src="/images/icons/hat tall.png"/>
        <div class="content">
          Learn More
        </div>
      </h2>
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
    <div className="ui segment">
      <h2 class="ui header">
        <img src="/images/avatar/avatar_8.png" class="ui circular image"/>
        Patrick
      </h2>
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
    <div className="ui segment">
      <h2 class="ui header">
        <img src="/images/icons/jigsaw.png"/>
        <div class="content">
          Plug-ins
          <div class="sub header">Check out our plug-in marketplace</div>
        </div>
      </h2>
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
  </div>
));


stories.add('Content: Icon', () => (
  <div className="ui segments">
    <div class="ui segment">
      <h2 class="ui header">
        <i class="plug icon"></i>
        <div class="content">
          Uptime Guarantee
        </div>
      </h2>
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
    <div className="ui segment">
      <h2 class="ui header">
        <i class="settings icon"></i>
        <div class="content">
          Account Settings
          <div class="sub header">Manage your preferences</div>
        </div>
      </h2>
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
  </div>
));


stories.add('Content: Subheader', () => (
  <div className="ui segments">
    <div class="ui segment">
      <h2 class="ui header">
        Account Settings
        <div class="sub header">Manage your account settings and set e-mail preferences.</div>
      </h2>
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
    <div className="ui segment">
      <h1 class="ui header">
        H1
        <div class="sub header">Sub Header</div>
      </h1>
      <h2 class="ui header">
        H2
        <div class="sub header">Sub Header</div>
      </h2>
      <h3 class="ui header">
        H3
        <div class="sub header">Sub Header</div>
      </h3>
      <h4 class="ui header">
        H4
        <div class="sub header">Sub Header</div>
      </h4>
      <h5 class="ui header">
        H5
        <div class="sub header">Sub Header</div>
      </h5>
    </div>
  </div>
));


stories.add('Disabled', () => (
  <div class="ui segment">
    <div class="ui disabled header">Disabled Header</div>
    <TextBlock color='#E0E0E0' rows={4} />
  </div>
));


stories.add('Variations: Dividing', () => (
  <div class="ui segment">
    <TextBlock color='#E0E0E0' rows={4} />
    <h3 class="ui dividing header">
      Dividing Header
    </h3>
    <TextBlock color='#E0E0E0' rows={4} />
  </div>
));

stories.add('Variations: Block', () => (
  <div class="ui segment">
    <h3 class="ui block header">
      Block Header
    </h3>
    <MediaBlock color='#E0E0E0' rows={4}/>
  </div>
));


stories.add('Variations: Attached', () => (
  <div class="ui segment">
    <h3 class="ui top attached header">
      Top Attached
    </h3>
    <div class="ui attached segment">
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
    <h3 class="ui attached header">
      Attached
    </h3>
    <div class="ui attached segment">
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
    <h3 class="ui bottom attached header">
      Bottom Attached
    </h3>
  </div>
));


stories.add('Variations: Floating', () => (
  <div class="ui clearing segment">
    <h3 class="ui right floated header">
      Go Forward
    </h3>
    <h3 class="ui left floated header">
      Go Back
    </h3>
  </div>
));

stories.add('Variations: Text Alignment', () => (
  <div class="ui segment">
    <h3 class="ui right aligned header">
      Right
    </h3>
    <h3 class="ui left aligned header">
      Left
    </h3>
    <h3 class="ui justified header">
      This should take up the full width even if only one line
    </h3>
    <h3 class="ui center aligned header">
      Center
    </h3>
  </div>
));


stories.add('Variations: Colored', () => (
  <div class="ui clearing segment">
    <h4 class="ui red header">Red</h4>
    <h4 class="ui orange header">Orange</h4>
    <h4 class="ui yellow header">Yellow</h4>
    <h4 class="ui olive header">Olive</h4>
    <h4 class="ui green header">Green</h4>
    <h4 class="ui teal header">Teal</h4>
    <h4 class="ui blue header">Blue</h4>
    <h4 class="ui purple header">Purple</h4>
    <h4 class="ui violet header">Violet</h4>
    <h4 class="ui pink header">Pink</h4>
    <h4 class="ui brown header">Brown</h4>
    <h4 class="ui grey header">Grey</h4>
  </div>
));


stories.add('Variations: Inverted', () => (
  <div class="ui inverted segment">
    <h4 class="ui red inverted header">Red</h4>
    <h4 class="ui orange inverted header">Orange</h4>
    <h4 class="ui yellow inverted header">Yellow</h4>
    <h4 class="ui olive inverted header">Olive</h4>
    <h4 class="ui green inverted header">Green</h4>
    <h4 class="ui teal inverted header">Teal</h4>
    <h4 class="ui blue inverted header">Blue</h4>
    <h4 class="ui purple inverted header">Purple</h4>
    <h4 class="ui violet inverted header">Violet</h4>
    <h4 class="ui pink inverted header">Pink</h4>
    <h4 class="ui brown inverted header">Brown</h4>
    <h4 class="ui grey inverted header">Grey</h4>
  </div>
));