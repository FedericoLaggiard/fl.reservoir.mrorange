import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Boostrap, {Modal} from 'bootstrap.native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';


import reducers from './reducers';
import routes from './routes';

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={ browserHistory } routes={routes} />
  </Provider>
  , document.querySelector('.content'));

