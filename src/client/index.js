import React from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from 'redux';
import { Provider } from 'react-redux';
import App from './App';

const state = window.__STATE__;
delete window.__STATE__;
const store = configureStore(state);

ReactDOM.hydrate(
  <Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root')
);
