import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';

const typeStories = storiesOf('Element/Rail/Types', module);

typeStories.add('Rail', () => (
  <div class="ui segment">
    <div class="ui left rail">
      <div class="ui segment">
        Left Rail Content
      </div>
    </div>
    <div class="ui right rail">
      <div class="ui segment">
        Right Rail Content
      </div>
    </div>
    <p><TextBlock color='#E0E0E0' rows={6} /></p>
    <p><TextBlock color='#E0E0E0' rows={6} /></p>
  </div>
));


typeStories.add('Internal', () => (
  <div class="ui segment">
    <div class="ui left internal rail">
      <div class="ui segment">
        Left Rail Content
      </div>
    </div>
    <div class="ui right internal rail">
      <div class="ui segment">
        Right Rail Content
      </div>
    </div>
    <p><TextBlock color='#E0E0E0' rows={6} /></p>
    <p><TextBlock color='#E0E0E0' rows={6} /></p>
  </div>
));

typeStories.add('Dividing', () => (
  <div class="ui segment">
    <div class="ui left dividing rail">
      <div class="ui segment">
        Left Rail Content
      </div>
    </div>
    <div class="ui right dividing rail">
      <div class="ui segment">
        Right Rail Content
      </div>
    </div>
    <p><TextBlock color='#E0E0E0' rows={6} /></p>
    <p><TextBlock color='#E0E0E0' rows={6} /></p>
  </div>
));

const variationStories = storiesOf('Element/Rail/Variations', module);

variationStories.add('Attached', () => (
  <div class="ui container">
    <div class="ui segment">
      <div class="ui left attached rail">
        <div class="ui segment">
          Left Rail Content
        </div>
      </div>
      <div class="ui right attached rail">
        <div class="ui segment">
          Right Rail Content
        </div>
      </div>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
    </div>

    <div class="ui hidden divider"></div>

    <div class="ui segment">
      <div class="ui left internal attached rail">
        <div class="ui segment">
          Left Rail Content
        </div>
      </div>
      <div class="ui right internal attached rail">
        <div class="ui segment">
          Right Rail Content
        </div>
      </div>

      <p><TextBlock color='#E0E0E0' rows={6} /></p>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
    </div>
  </div>
));


variationStories.add('Close', () => (
  <div class="ui container">
    <div class="ui segment">
      <div class="ui left close rail">
        <div class="ui segment">
          Left Rail Content
        </div>
      </div>
      <div class="ui right close rail">
        <div class="ui segment">
          Right Rail Content
        </div>
      </div>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
    </div>

    <div class="ui hidden divider"></div>

    <div class="ui segment">
      <div class="ui left very close rail">
        <div class="ui segment">
          Left Rail Content
        </div>
      </div>
      <div class="ui right very close rail">
        <div class="ui segment">
          Right Rail Content
        </div>
      </div>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
    </div>

  </div>
));


variationStories.add('Size', () => (
  <div class="ui container">
    <div class="ui segment">
      <div class="ui left mini rail">
        Mini
      </div>
      <div class="ui right tiny rail">
        Tiny
      </div>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
    </div>
    <div class="ui segment">
      <div class="ui left small rail">
        Small
      </div>
      <div class="ui right large rail">
        Large
      </div>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
    </div>
    <div class="ui segment">
      <div class="ui left big rail">
        Big
      </div>
      <div class="ui right huge rail">
        Huge
      </div>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
    </div>
    <div class="ui segment">
      <div class="ui right massive rail">
        Massive
      </div>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
      <p><TextBlock color='#E0E0E0' rows={6} /></p>
    </div>
  </div>
));
