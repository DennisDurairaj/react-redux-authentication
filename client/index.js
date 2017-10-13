import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Link, Redirect, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './rootReducer';

import App from './components/App';

const store = createStore(
  rootReducer,
  compose(
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

render((
  <Provider store={store}>
    <Router>
      <App />
    </Router> 
  </Provider>

), document.getElementById('app'));