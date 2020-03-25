import React from 'react';
import ReactDOM from 'react-dom';
import App, { App1, App2, App3, App4 } from './App';

ReactDOM.render(
  [<App />,
  <App1 />,
  <App2 />,
  <App3 />,
  <App4 />],
  document.getElementById('root'));
