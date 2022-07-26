import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import Application from './Application';
import { store } from './store';

ReactDom.render(
  <Provider store={store}>
  <React.StrictMode>
    <Application />
  </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);