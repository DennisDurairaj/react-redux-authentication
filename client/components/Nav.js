import React from 'react';
import { Link } from 'react-router-dom';

export default () => {
    return (
        <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to='/' className="navbar-brand" href="#">Challenge</Link>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li><Link to='/login' href="#">Sign Up</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    )
}