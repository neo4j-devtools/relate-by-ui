import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import '../../css/semantic/dist/relate-by.css';

const req = require.context('../stories', true, /\.stories\.ts(x)$/);

addDecorator(withInfo);
// addDecorator(storyFn => (
//   <div className="ui container" style={{ margin: '3rem 0 5rem 0' }}>
//     {storyFn()}
//   </div>
// ));

configure(() => {
  req.keys().forEach(req);
}, module);
