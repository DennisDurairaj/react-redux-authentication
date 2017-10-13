import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, browserHistory, Link, Redirect, withRouter } from 'react-router-dom';

import App from './components/App';
// import SignupPage from './components/signup/SignupPage';

render((
  <Router>
    <App />
  </Router>
), document.getElementById('app'));