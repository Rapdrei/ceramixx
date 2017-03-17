import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, createStore, compose } from 'redux'
import createLogger from 'redux-logger'
import { Provider } from 'react-redux'
import {Route, IndexRoute} from 'react-router'

import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

// Components used by the router
import App from './components/App'

//import reducers from './reducers'
import allReducers from './reducers/index.js'

// Add bootstrap
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-theme.css'

// Add stylesheets
import './stylesheets/layout.scss'

// logger for development modus @see redux-logger
const logger = createLogger()
// This implements Redux dev tools into our project
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

// create store and register all available reducers
let store = createStore(
  allReducers, composeEnhancers(
  applyMiddleware(logger)
  )
);

store.subscribe(() => {
  //not needed anymore as we use the logger now
  //console.log("store changed", store.getState());
});

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
