import React from 'react';
import Nav from './Nav';
import Greetings from './Greetings';
import Login from './login/Login';
import Signup from './signup/Signup';
// import FlashMessagesList from './flash/FlashMessagesList';
import NewEvent from './events/NewEvent';
import requireAuth from '../utils/requireAuth';
import { BrowserRouter as Router, Route, browserHistory, Link, Redirect, withRouter } from 'react-router-dom';

class App extends React.Component {
    render() {
        return (
            <div className="container">
                <Nav />
                <Route exact path='/' component={Greetings} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />
                <Route path='/new-event' component={requireAuth(NewEvent)} />
            </div>
        );
    }
}
export default App;