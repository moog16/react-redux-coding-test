/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

// Needed for redux-saga es6 generator support
import 'babel-polyfill';

// Import all the third party stuff
import React from 'react';
import ReactDOM from 'react-dom';
import { fromJS } from 'immutable';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware, routerReducer } from 'react-router-redux';
import FontFaceObserver from 'fontfaceobserver';


// Polyfill for native fetch api
// https://github.com/github/fetch
import 'whatwg-fetch';

// Polyfill for native Intl support
// https://github.com/andyearnshaw/Intl.js
import 'intl';
import 'intl/locale-data/jsonp/en';


// Import root app
import { AppContainer } from 'components/App';

/**
 * Create the store with asynchronously loaded reducers
 */

import appReducer from './reducers/app';
import thunk from 'redux-thunk';

const reducers = combineReducers({
  routing: routerReducer,
  app: appReducer
});
const middleware = applyMiddleware(thunk, routerMiddleware(browserHistory));
const store = createStore(reducers, middleware);
const history = syncHistoryWithStore(browserHistory, store);

// Observe loading of Open Sans (to remove open sans, remove the <link> tag in
// the index.html file and this observer)
const openSansObserver = new FontFaceObserver('Open Sans', {});

// When Open Sans is loaded, add a font-family using Open Sans to the body
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
}, () => {
  document.body.classList.remove('fontLoaded');
});


const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <Router
        history={history}>
        <Route path='/' component={AppContainer}></Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  );
};

render();

// Hot reloadable translation json files
if (module.hot) {
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(() => {
    render();
  });
}
