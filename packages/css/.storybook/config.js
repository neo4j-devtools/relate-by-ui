import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import '../semantic/dist/relate-by.css';
// import '../semantic/dist/relate-by.js';

// automatically import all files ending in *.stories.js
const req = require.context('../stories', true, /\.stories\.js$/);

addDecorator(withInfo); //

addDecorator(storyFn => <div className="ui container">{storyFn()}</div>);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
