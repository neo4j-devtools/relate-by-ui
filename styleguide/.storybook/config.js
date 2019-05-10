import React from 'react';

import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import '../../packages/css/semantic/dist/relate-by.css';

const req = require.context('../stories', true, /\.stories\.ts(x)$/);

addDecorator(storyFn => (
  <div className="ui container" style={{ margin: '3rem 0' }}>
    {storyFn()}
  </div>
));

configure(() => {
  addDecorator(withInfo);
  req.keys().forEach(req);
}, module);
