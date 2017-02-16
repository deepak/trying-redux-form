import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import store from './store';
import { LOGIN_PATH } from './routes/urls';
import routes from './routes';

const container = document.getElementById('app');

render(
  <Provider store={store}>
    <Router history={browserHistory}>
      { routes() }
    </Router>
  </Provider>,
  container
);


