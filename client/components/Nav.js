import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { logout } from '../actions/authActions';

class Nav extends React.Component {
  logout = (e) => {
    e.preventDefault();
    this.props.logout();
  }

  render() {
    const {isAuthenticated} = this.props.auth;

    const userLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <a onClick={this.logout} href="#">Logout</a>
        </li>
      </ul>
    );

    const guestLinks = (
      <ul className="nav navbar-nav navbar-right">
        <li>
          <Link to='/login' href="#">Login</Link>
        </li>
        <li>
          <Link to='/signup' href="#">Sign Up</Link>
        </li>
      </ul>
    );

    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to='/' className="navbar-brand" href="#">Challenge</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            { isAuthenticated ? userLinks : guestLinks }
          </div>
        </div>
      </nav>
    )
  }
}

Nav.PropTypes = {
  auth: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {auth: state.auth};
}

export default connect(mapStateToProps, { logout })(Nav);