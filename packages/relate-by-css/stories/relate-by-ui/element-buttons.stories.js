import React from 'react';

import {
  ButtonActionPrimary,
  ButtonApprovePrimary,
  ButtonDestructivePrimary,
  ButtonDismissPrimary,
  ButtonActionSecondary,
  ButtonApproveSecondary,
  ButtonDestructiveSecondary,
  ButtonDismissSecondary,
  ButtonActionText,
  ButtonApproveText,
  ButtonDestructiveText,
  ButtonDismissText,
} from '@relate-by-ui/buttons';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { TextBlock, MediaBlock, TextRow, RectShape, RoundShape } from 'react-placeholder/lib/placeholders';

const stories = storiesOf('Relate by UI/Element/Buttons', module);

stories.add(
  'Buttons',
  () => (
    <div>
      <h1>Buttons</h1>
      <div>
        <h2>Primary</h2>
        <ButtonActionPrimary title="Action" />
        <ButtonApprovePrimary title="Approve" />
        <ButtonDestructivePrimary title="Destructive" />
        <ButtonDismissPrimary title="Dismiss" />
      </div>
      <div>
        <h2>Secondary</h2>
        <ButtonActionSecondary title="Action" />
        <ButtonApproveSecondary title="Approve" />
        <ButtonDestructiveSecondary title="Destructive" />
        <ButtonDismissSecondary title="Dismiss" />
      </div>
      <div>
        <h2>Text</h2>
        <ButtonActionText title="Action" />
        <ButtonApproveText title="Approve" />
        <ButtonDestructiveText title="Destructive" />
        <ButtonDismissText title="Dismiss" />
      </div>
    </div>
  ),
  {
    info: {
      text: `Primary.`,
    },
  },
);
