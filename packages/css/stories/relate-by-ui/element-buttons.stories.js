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

const stories = storiesOf('Relate by UI/Elements', module);

stories.add(
  'Buttons',
  () => (
    <div className="ui" style={{ margin: '3rem 0 5rem 0' }}>
      <h1 className="ui dividing header">Buttons</h1>
      <h2 className="ui dividing header">Primary</h2>
      <div className="ui segment">
        <p className="ui container">
          <ButtonActionPrimary title="Action" />
          <ButtonApprovePrimary title="Approve" />
          <ButtonDestructivePrimary title="Destructive" />
          <ButtonDismissPrimary title="Dismiss" />
        </p>
        <p className="ui container">
          <ButtonActionPrimary title="Action" disabled />
          <ButtonApprovePrimary title="Approve" disabled />
          <ButtonDestructivePrimary title="Destructive" disabled />
          <ButtonDismissPrimary title="Dismiss" disabled />
        </p>
      </div>

      <h2 className="ui dividing header">Secondary</h2>
      <div className="ui segment">
        <p className="ui container">
          <ButtonActionSecondary title="Action" />
          <ButtonApproveSecondary title="Approve" />
          <ButtonDestructiveSecondary title="Destructive" />
          <ButtonDismissSecondary title="Dismiss" />
        </p>
        <p className="ui container">
          <ButtonActionSecondary title="Action" disabled />
          <ButtonApproveSecondary title="Approve" disabled />
          <ButtonDestructiveSecondary title="Destructive" disabled />
          <ButtonDismissSecondary title="Dismiss" disabled />
        </p>
      </div>

      <h2 className="ui dividing header">Text</h2>
      <div className="ui segment">
        <p className="ui container">
          <ButtonActionText title="Action" />
          <ButtonApproveText title="Approve" />
          <ButtonDestructiveText title="Destructive" />
          <ButtonDismissText title="Dismiss" />
        </p>
        <p className="ui container">
          <ButtonActionText title="Action" disabled />
          <ButtonApproveText title="Approve" disabled />
          <ButtonDestructiveText title="Destructive" disabled />
          <ButtonDismissText title="Dismiss" disabled />
        </p>
      </div>
    </div>
  ),
  {
    info: {
      text: `Primary.`,
    },
  },
);
