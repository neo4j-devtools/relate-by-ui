import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import {TextBlock, MediaBlock, TextRow, RectShape, RoundShape} from 'react-placeholder/lib/placeholders';

const stories = storiesOf('Element/Segment', module);


stories.add('Segment', () => (
  <div>
    <div className="ui segment">
        <MediaBlock color='#E0E0E0' rows={4} />
    </div>
  </div>
));
