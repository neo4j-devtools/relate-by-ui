import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder/lib/placeholders';

const stories = storiesOf('Semantic UI/Element/Button', module);

stories.add(
  'Button',
  () => (
    <div className="ui segments">
      <div className="ui segment">
        <button className="ui button">Follow</button>
      </div>
      <div className="ui segment">
        <button className="ui button">Button</button>
        <div className="ui button" tabindex="0">
          Focusable
        </div>
      </div>
    </div>
  ),
  {
    info: {
      text: `
          A standard button.
        `,
    },
  },
);

stories.add('Emphasis', () => (
  <div className="ui segment">
    <button className="ui primary button">Save</button>
    <button className="ui button">Discard</button>
  </div>
));

stories.add('Animated', () => (
  <div className="ui segment">
    <div class="ui animated button" tabindex="0">
      <div class="visible content">Next</div>
      <div class="hidden content">
        <i class="right arrow icon" />
      </div>
    </div>
    <div class="ui vertical animated button" tabindex="0">
      <div class="hidden content">Shop</div>
      <div class="visible content">
        <i class="shop icon" />
      </div>
    </div>
    <div class="ui animated fade button" tabindex="0">
      <div class="visible content">Sign-up for a Pro account</div>
      <div class="hidden content">$12.99 a month</div>
    </div>
  </div>
));

stories.add('Labeled', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui labeled button" tabindex="0">
        <div class="ui button">
          <i class="heart icon" /> Like
        </div>
        <a class="ui basic label">2,048</a>
      </div>
      <div class="ui left labeled button" tabindex="0">
        <a class="ui basic right pointing label">2,048</a>
        <div class="ui button">
          <i class="heart icon" /> Like
        </div>
      </div>
      <div class="ui left labeled button" tabindex="0">
        <a class="ui basic label">1,048</a>
        <div class="ui icon button">
          <i class="fork icon" />
        </div>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui labeled button" tabindex="0">
        <div class="ui red button">
          <i class="heart icon" /> Like
        </div>
        <a class="ui basic red left pointing label">1,048</a>
      </div>
      <div class="ui labeled button" tabindex="0">
        <div class="ui basic blue button">
          <i class="fork icon" /> Forks
        </div>
        <a class="ui basic left pointing blue label">1,048</a>
      </div>
    </div>
  </div>
));

stories.add('Icon', () => (
  <div className="ui segment">
    <button class="ui icon button">
      <i class="cloud icon" />
    </button>
  </div>
));

stories.add('Labeled Icon', () => (
  <div className="ui segment">
    <button class="ui labeled icon button">
      <i class="pause icon" />
      Pause
    </button>
    <button class="ui right labeled icon button">
      <i class="right arrow icon" />
      Next
    </button>
  </div>
));

stories.add('Basic', () => (
  <div className="ui segments">
    <div className="ui segment">
      <button class="ui basic button">
        <i class="icon user" />
        Add Friend
      </button>
    </div>
    <div className="ui segment">
      <button class="ui primary basic button">Primary</button>
      <button class="ui secondary basic button">Secondary</button>
      <button class="ui positive basic button">Positive</button>
      <button class="ui negative basic button">Negative</button>
    </div>
    <div className="ui segment">
      <button class="ui red basic button">Red</button>
      <button class="ui orange basic button">Orange</button>
      <button class="ui yellow basic button">Yellow</button>
      <button class="ui olive basic button">Olive</button>
      <button class="ui green basic button">Green</button>
      <button class="ui teal basic button">Teal</button>
      <button class="ui blue basic button">Blue</button>
      <button class="ui violet basic button">Violet</button>
      <button class="ui purple basic button">Purple</button>
      <button class="ui pink basic button">Pink</button>
      <button class="ui brown basic button">Brown</button>
      <button class="ui grey basic button">Grey</button>
      <button class="ui black basic button">Black</button>
    </div>
  </div>
));

stories.add('Inverted', () => (
  <div className="ui segments">
    <div className="ui inverted segment">
      <button class="ui inverted button">Standard</button>
      <button class="ui inverted primary button">Primary</button>
      <button class="ui inverted secondary button">Secondary</button>
      <button class="ui inverted red button">Red</button>
      <button class="ui inverted orange button">Orange</button>
      <button class="ui inverted yellow button">Yellow</button>
      <button class="ui inverted olive button">Olive</button>
      <button class="ui inverted green button">Green</button>
      <button class="ui inverted teal button">Teal</button>
      <button class="ui inverted blue button">Blue</button>
      <button class="ui inverted violet button">Violet</button>
      <button class="ui inverted purple button">Purple</button>
      <button class="ui inverted pink button">Pink</button>
      <button class="ui inverted brown button">Brown</button>
      <button class="ui inverted grey button">Grey</button>
      <button class="ui inverted black button">Black</button>
    </div>
    <div class="ui inverted segment">
      <button class="ui inverted basic button">Basic</button>
      <button class="ui inverted primary basic button">Primary</button>
      <button class="ui inverted secondary basic button">Secondary</button>
      <button class="ui inverted red basic button">Basic Red</button>
      <button class="ui inverted orange basic button">Basic Orange</button>
      <button class="ui inverted yellow basic button">Basic Yellow</button>
      <button class="ui inverted olive basic button">Basic Olive</button>
      <button class="ui inverted green basic button">Basic Green</button>
      <button class="ui inverted teal basic button">Basic Teal</button>
      <button class="ui inverted blue basic button">Basic Blue</button>
      <button class="ui inverted violet basic button">Basic Violet</button>
      <button class="ui inverted purple basic button">Basic Purple</button>
      <button class="ui inverted pink basic button">Basic Pink</button>
      <button class="ui inverted brown basic button">Basic Brown</button>
      <button class="ui inverted grey basic button">Basic Grey</button>
      <button class="ui inverted black basic button">Basic Black</button>
    </div>
  </div>
));

stories.add('Groups', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui buttons">
        <button class="ui button">One</button>
        <button class="ui button">Two</button>
        <button class="ui button">Three</button>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui icon buttons">
        <button class="ui button">
          <i class="align left icon" />
        </button>
        <button class="ui button">
          <i class="align center icon" />
        </button>
        <button class="ui button">
          <i class="align right icon" />
        </button>
        <button class="ui button">
          <i class="align justify icon" />
        </button>
      </div>
      <div class="ui icon buttons">
        <button class="ui button">
          <i class="bold icon" />
        </button>
        <button class="ui button">
          <i class="underline icon" />
        </button>
        <button class="ui button">
          <i class="text width icon" />
        </button>
      </div>
    </div>
  </div>
));

stories.add('Conditionals', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui buttons">
        <button class="ui button">Cancel</button>
        <div class="or" />
        <button class="ui positive button">Save</button>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui buttons">
        <button class="ui button">un</button>
        <div class="or" data-text="ou" />
        <button class="ui positive button">deux</button>
      </div>
    </div>
  </div>
));

stories.add('States', () => (
  <div className="ui segments">
    <div className="ui segment">
      <button class="ui active button">
        <i class="user icon" />
        Follow
      </button>
    </div>
    <div className="ui segment">
      <button class="ui disabled button">
        <i class="user icon" />
        Followed
      </button>
    </div>
    <div className="ui segment">
      <button class="ui loading button">Loading</button>
      <button class="ui basic loading button">Loading</button>
      <button class="ui primary loading button">Loading</button>
      <button class="ui secondary loading button">Loading</button>
    </div>
  </div>
));

stories.add('Variations: Social', () => (
  <div className="ui segment">
    <button class="ui facebook button">
      <i class="facebook icon" />
      Facebook
    </button>
    <button class="ui twitter button">
      <i class="twitter icon" />
      Twitter
    </button>
    <button class="ui google plus button">
      <i class="google plus icon" />
      Google Plus
    </button>
    <button class="ui vk button">
      <i class="vk icon" />
      VK
    </button>
    <button class="ui linkedin button">
      <i class="linkedin icon" />
      LinkedIn
    </button>
    <button class="ui instagram button">
      <i class="instagram icon" />
      Instagram
    </button>
    <button class="ui youtube button">
      <i class="youtube icon" />
      YouTube
    </button>
  </div>
));

stories.add('Variations: Size', () => (
  <div className="ui segment">
    <button class="mini ui button">Mini</button>
    <button class="tiny ui button">Tiny</button>
    <button class="small ui button">Small</button>
    <button class="medium ui button">Medium</button>
    <button class="large ui button">Large</button>
    <button class="big ui button">Big</button>
    <button class="huge ui button">Huge</button>
    <button class="massive ui button">Massive</button>
  </div>
));

stories.add('Variations: Floated', () => (
  <div className="ui segment" style={{ height: '6em' }}>
    <button class="ui right floated button">Right Floated</button>
    <button class="ui left floated button">Left Floated</button>
  </div>
));

stories.add('Variations: Colored', () => (
  <div className="ui segment">
    <button class="ui red button">Red</button>
    <button class="ui orange button">Orange</button>
    <button class="ui yellow button">Yellow</button>
    <button class="ui olive button">Olive</button>
    <button class="ui green button">Green</button>
    <button class="ui teal button">Teal</button>
    <button class="ui blue button">Blue</button>
    <button class="ui violet button">Violet</button>
    <button class="ui purple button">Purple</button>
    <button class="ui pink button">Pink</button>
    <button class="ui brown button">Brown</button>
    <button class="ui grey button">Grey</button>
    <button class="ui black button">Black</button>
  </div>
));

stories.add('Variations: Compact', () => (
  <div className="ui segment">
    <button class="compact ui button">Hold</button>
    <button class="ui compact icon button">
      <i class="pause icon" />
    </button>
    <button class="ui compact labeled icon button">
      <i class="pause icon" />
      Pause
    </button>
  </div>
));

stories.add('Variations: Toggle', () => (
  <div className="ui segment" style={{ height: '6em' }}>
    <button class="ui toggle button">Vote</button>
  </div>
));

stories.add('Variations: Positive', () => (
  <div className="ui segment" style={{ height: '6em' }}>
    <button class="positive ui button">Positive Button</button>
  </div>
));

stories.add('Variations: Negative', () => (
  <div className="ui segment" style={{ height: '6em' }}>
    <button class="negative ui button">Negative Button</button>
  </div>
));

stories.add('Variations: Fluid', () => (
  <div className="ui segment" style={{ height: '6em' }}>
    <button class="fluid ui button">Fits container</button>
  </div>
));

stories.add('Variations: Circular', () => (
  <div className="ui segments">
    <div className="ui segment">
      <button class="circular ui icon button">
        <i class="icon settings" />
      </button>
    </div>
    <div className="ui segment">
      <button class="ui circular facebook icon button">
        <i class="facebook icon" />
      </button>
      <button class="ui circular twitter icon button">
        <i class="twitter icon" />
      </button>
      <button class="ui circular linkedin icon button">
        <i class="linkedin icon" />
      </button>
      <button class="ui circular google plus icon button">
        <i class="google plus icon" />
      </button>
    </div>
  </div>
));

stories.add('Variations: Vertically Attached', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui top attached button" tabindex="0">
        Top
      </div>
      <div class="ui attached segment">
        <p />
      </div>
      <div class="ui bottom attached button" tabindex="0">
        Bottom
      </div>
    </div>
    <div className="ui segment">
      <div class="ui two top attached buttons">
        <div class="ui button">One</div>
        <div class="ui button">Two</div>
      </div>
      <div class="ui attached segment">
        <p />
      </div>
      <div class="ui two bottom attached buttons">
        <div class="ui button">One</div>
        <div class="ui button">Two</div>
      </div>
    </div>
  </div>
));

stories.add('Variations: Horizonally Attached', () => (
  <div className="ui segment">
    <button class="ui left attached button">Left</button>
    <button class="right attached ui button">Right</button>
  </div>
));

stories.add('Variations: Vertical Buttons', () => (
  <div className="ui segment">
    <div class="ui vertical buttons">
      <button class="ui button">Feed</button>
      <button class="ui button">Messages</button>
      <button class="ui button">Events</button>
      <button class="ui button">Photos</button>
    </div>
  </div>
));

stories.add('Variations: Icon Buttons', () => (
  <div className="ui segment">
    <div class="ui icon buttons">
      <button class="ui button">
        <i class="play icon" />
      </button>
      <button class="ui button">
        <i class="pause icon" />
      </button>
      <button class="ui button">
        <i class="shuffle icon" />
      </button>
    </div>
  </div>
));

stories.add('Variations: Labeled Icon Buttons', () => (
  <div className="ui segment">
    <div class="ui vertical labeled icon buttons">
      <button class="ui button">
        <i class="pause icon" />
        Pause
      </button>
      <button class="ui button">
        <i class="play icon" />
        Play
      </button>
      <button class="ui button">
        <i class="shuffle icon" />
        Shuffle
      </button>
    </div>
  </div>
));

stories.add('Variations: Mixed Group', () => (
  <div className="ui segment">
    <div class="ui buttons">
      <button class="ui labeled icon button">
        <i class="left chevron icon" />
        Back
      </button>
      <button class="ui button">
        <i class="stop icon" />
        Stop
      </button>
      <button class="ui right labeled icon button">
        Forward
        <i class="right chevron icon" />
      </button>
    </div>
  </div>
));

stories.add('Variations: Equal Width', () => (
  <div className="ui segment">
    <div class="five ui buttons">
      <button class="ui button">Overview</button>
      <button class="ui button">Specs</button>
      <button class="ui button">Warranty</button>
      <button class="ui button">Reviews</button>
      <button class="ui button">Support</button>
    </div>
    <div class="three ui buttons">
      <button class="ui button">Overview</button>
      <button class="ui button">Specs</button>
      <button class="ui button">Support</button>
    </div>
  </div>
));

stories.add('Variations: Colored Buttons', () => (
  <div className="ui segment">
    <div class="orange ui buttons">
      <button class="ui button">One</button>
      <button class="ui button">Two</button>
      <button class="ui button">Three</button>
    </div>
  </div>
));

stories.add('Variations: Basic Buttons', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="ui basic buttons">
        <div class="ui button">One</div>
        <div class="ui button">Two</div>
        <div class="ui button">Three</div>
      </div>
      <div class="ui divider" />
      <div class="ui vertical basic buttons">
        <button class="ui button">One</button>
        <button class="ui button">Two</button>
        <button class="ui button">Three</button>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui buttons">
        <button class="ui red basic button">One</button>
        <button class="ui blue basic button">Two</button>
        <button class="ui green basic button">Three</button>
      </div>
    </div>
  </div>
));

stories.add('Variations: Group Sizes', () => (
  <div className="ui segments">
    <div className="ui segment">
      <div class="large ui buttons">
        <button class="ui button">One</button>
        <button class="ui button">Two</button>
        <button class="ui button">Three</button>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui small basic icon buttons">
        <button class="ui button">
          <i class="file icon" />
        </button>
        <button class="ui button">
          <i class="save icon" />
        </button>
        <button class="ui button">
          <i class="upload icon" />
        </button>
        <button class="ui button">
          <i class="download icon" />
        </button>
      </div>
    </div>
    <div className="ui segment">
      <div class="ui large buttons">
        <button class="ui button">One</button>
        <div class="or" />
        <button class="ui button">Two</button>
      </div>
    </div>
  </div>
));
