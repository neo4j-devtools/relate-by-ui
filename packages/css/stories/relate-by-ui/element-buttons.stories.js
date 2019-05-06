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

const stories = storiesOf('Relate by UI/Element/Buttons', module);

stories.add(
  'Buttons',
  () => (
    <div className="ui segments">
      <div className="ui segment">
        <h2>Primary</h2>
        <ButtonActionPrimary title="Action" />
        <ButtonApprovePrimary title="Approve" />
        <ButtonDestructivePrimary title="Destructive" />
        <ButtonDismissPrimary title="Dismiss" />
      </div>
      <div className="ui segment">
        <h2>Secondary</h2>
        <ButtonActionSecondary title="Action" />
        <ButtonApproveSecondary title="Approve" />
        <ButtonDestructiveSecondary title="Destructive" />
        <ButtonDismissSecondary title="Dismiss" />
      </div>
      <div className="ui segment">
        <h2>Text</h2>
        <ButtonActionText title="Action" />
        <ButtonApproveText title="Approve" />
        <ButtonDestructiveText title="Destructive" />
        <ButtonDismissText title="Dismiss" />
      </div>
      <div className="ui segment">
        <h2>Primary - Disabled</h2>
        <ButtonActionPrimary title="Action" disabled />
        <ButtonApprovePrimary title="Approve" disabled />
        <ButtonDestructivePrimary title="Destructive" disabled />
        <ButtonDismissPrimary title="Dismiss" disabled />
      </div>
      <div className="ui segment">
        <h2>Secondary - Disabled</h2>
        <ButtonActionSecondary title="Action" disabled />
        <ButtonApproveSecondary title="Approve" disabled />
        <ButtonDestructiveSecondary title="Destructive" disabled />
        <ButtonDismissSecondary title="Dismiss" disabled />
      </div>
      <div className="ui segment">
        <h2>Text - Disabled</h2>
        <ButtonActionText title="Action" disabled />
        <ButtonApproveText title="Approve" disabled />
        <ButtonDestructiveText title="Destructive" disabled />
        <ButtonDismissText title="Dismiss" disabled />
      </div>
    </div>
  ),
  {
    info: {
      text: `Primary.`,
    },
  },
);
