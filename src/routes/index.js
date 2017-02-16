import React from 'react';
import { Route, IndexRoute } from 'react-router';

import * as urls from './urls';
import App from '../components/App.jsx';
import Main from '../components/Main.jsx';
import Posts from '../components/Posts/Posts.jsx';
import NotFound from '../components/NotFound.jsx';

const routes = () => (
  <Route path={urls.ROOT_PATH} component={App}>
    <Route component={Main}>
      <IndexRoute component={Posts} />
      <Route path={urls.POSTS_PATH} component={Posts} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

export default routes;
