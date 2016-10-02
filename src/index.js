import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Boostrap, {Modal} from 'bootstrap.native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { Router, browserHistory } from 'react-router';
import promise from 'redux-promise';


import reducers from './reducers';
import routes from './routes';

const middlewares = [promise];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = compose(middlewareEnhancer, window.devToolsExtension && window.devToolsExtension());

const store = createStore(reducers, {
    movies: null
  }, enhancers);


//const createStoreWithMiddleware = applyMiddleware(
//  promise
//)(createStore);

ReactDOM.render(
  <Provider store={store}>
    <Router history={ browserHistory } routes={routes} />
  </Provider>
  , document.querySelector('.content'));

