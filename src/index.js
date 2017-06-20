import React from 'react';
import ReactDOM from 'react-dom';
import Transis from 'transis'

import registerServiceWorker from './registerServiceWorker';

import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
registerServiceWorker();
