import React from 'react';
import LoginForm from './LoginForm';
import { connect } from 'react-redux';
import { login } from '../../actions/login';


class Login extends React.Component {
    render() {
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4">
                    <LoginForm login={this.props.login} />
                </div>
            </div>
        )
    }
}

export default connect(null, { login })(Login);