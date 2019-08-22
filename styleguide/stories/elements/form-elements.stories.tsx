import React from 'react';

import { Form } from 'semantic-ui-react';

import { FormInput, FormTextArea, FormSelect } from '../../../packages/form-elements/src';

import { storiesOf } from '@storybook/react';

const stories = storiesOf('Elements', module);

stories.add(
  'Form elements',
  () => (
    <div className="ui">
      <Form>
        <Form.Field>
          <FormInput label="Input" placeholder="Placeholder text" />
        </Form.Field>
        <Form.Field>
          <FormInput error label="Input (with error)" placeholder="Placeholder text" />
        </Form.Field>
        <Form.Field>
          <FormInput disabled label="Input (disabled)" placeholder="Placeholder text" />
        </Form.Field>
        <Form.Field>
          <FormInput icon="search" label="Input (with icon)" placeholder="Placeholder text" />
        </Form.Field>
        <Form.Field>
          <FormSelect label="Select" placeholder="Placeholder text" options={[
            { key: 'foo', value: 'foo', text: 'Foo' },
            { key: 'bar', value: 'bar', text: 'Bar' }
          ]} />
        </Form.Field>
        <Form.Field>
          <FormTextArea label="TextArea" placeholder="Placeholder text" />
        </Form.Field>
      </Form>
    </div>
  ),
  {
    info: {
      text: `Form element components.`,
      inline: true,
    },
  },
);
