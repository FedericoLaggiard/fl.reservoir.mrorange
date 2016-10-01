import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import MoviesIndex from './components/movies_index';

export default (
  <Route path="/" component={App}> // path '/' is base
    <IndexRoute component={MoviesIndex} />
  </Route>

);
