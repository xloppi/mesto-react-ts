import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import {Provider} from 'react-redux';
import { store } from './store';
import GlobalStyles from './components/styles/global';

ReactDOM.render(
  <Provider store={store}>
    <App />
    <GlobalStyles />
  </Provider>,
  document.getElementById('root')
);

