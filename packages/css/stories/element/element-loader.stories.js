import React from 'react';

import { storiesOf } from '@storybook/react';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';
import * as faker from "faker";

const typeStories = storiesOf('Element/Loader/Types', module);

typeStories.add('Loader', () => (
  <div className="ui segment">
    <TextBlock color='#E0E0E0' rows={4} />
    <div class="ui active dimmer">
      <div class="ui loader"></div>
    </div>
  </div>
));

typeStories.add('Text Loader', () => (
  <div className="ui segments">
    <div class="ui segment">
      <div class="ui active dimmer">
        <div class="ui text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
    <div class="ui hidden divider"></div>
    <div class="ui segment">
      <div class="ui active inverted dimmer">
        <div class="ui text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
  </div>
));



const stateStories = storiesOf('Element/Loader/States', module);

stateStories.add('Indeterminate', () => (
  <div class="ui segment">
    <div class="ui active dimmer">
      <div class="ui indeterminate text loader">Preparing Files</div>
    </div>
      <TextBlock color='#E0E0E0' rows={4} />
  </div>
));

stateStories.add('Active', () => (
  <div class="ui segment">
    <div class="ui active loader"></div>
      <TextBlock color='#E0E0E0' rows={4} />
  </div>
));

stateStories.add('Active', () => (
  <div class="ui segment">
    <div class="ui disabled loader"></div>
      <TextBlock color='#E0E0E0' rows={4} />
  </div>
));

const variationStories = storiesOf('Element/Loader/Variations', module);

variationStories.add('Inline', () => (
  <div class="ui segment">
    <div class="ui active inline loader"></div>
  </div>
));

variationStories.add('Inline Center', () => (
  <div class="ui segment">
    <div class="ui active centered inline loader"></div>
  </div>
));

variationStories.add('Size', () => (
  <div className="ui segments">
    <div class="ui segment">
      <div class="ui active dimmer">
        <div class="ui mini text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={2} />
    </div>
    <div class="ui segment">
      <div class="ui active dimmer">
        <div class="ui tiny text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={3} />
    </div>
    <div class="ui segment">
      <div class="ui active dimmer">
        <div class="ui small text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
    <div class="ui segment">
      <div class="ui active dimmer">
        <div class="ui medium text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={4} />
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
    <div class="ui segment">
      <div class="ui active dimmer">
        <div class="ui large text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={4} />
      <TextBlock color='#E0E0E0' rows={4} />
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
    <div class="ui segment">
      <div class="ui active dimmer">
        <div class="ui big text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={6} />
      <TextBlock color='#E0E0E0' rows={6} />
      <TextBlock color='#E0E0E0' rows={6} />
    </div>
    <div class="ui segment">
      <div class="ui active dimmer">
        <div class="ui huge text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={8} />
      <TextBlock color='#E0E0E0' rows={8} />
      <TextBlock color='#E0E0E0' rows={8} />
    </div>
    <div class="ui segment">
      <div class="ui active dimmer">
        <div class="ui massive text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={10} />
      <TextBlock color='#E0E0E0' rows={10} />
      <TextBlock color='#E0E0E0' rows={10} />
    </div>
  </div>
));

variationStories.add('Inverted', () => (
  <div className="ui segments">
    <div class="ui segment">
      <div class="ui active inverted dimmer">
        <div class="ui mini text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={2} />
    </div>
    <div class="ui segment">
      <div class="ui active inverted dimmer">
        <div class="ui small text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
    <div class="ui segment">
      <div class="ui active inverted dimmer">
        <div class="ui medium text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={4} />
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
    <div class="ui segment">
      <div class="ui active inverted dimmer">
        <div class="ui large text loader">Loading</div>
      </div>
      <TextBlock color='#E0E0E0' rows={4} />
      <TextBlock color='#E0E0E0' rows={4} />
      <TextBlock color='#E0E0E0' rows={4} />
    </div>
  </div>
));