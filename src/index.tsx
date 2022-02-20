import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux';
import { store } from './store';
import GlobalStyles from './styles/global';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    <GlobalStyles />
  </Provider>,
  document.getElementById('root')
);

