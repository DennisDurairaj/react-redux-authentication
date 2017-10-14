import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import validateInput from '../../../server/shared/validations/login';

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            errors: {},
            isLoading: false
        }
    }

    isValid() {
        const { errors, isValid } = validateInput(this.state);

        if(!isValid) {
            this.setState({ errors });
        }

        return isValid;
    }

    onSubmit = (e) => {
        e.preventDefault();

        if(this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.login(this.state).then(
                (res) => this.context.router.history.push('/'),
                (err) => {
                    debugger;
                    this.setState({ errors: err.data.errors, isLoading: false });
                } 
            )
        }
    }

    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

  render() {
      const { errors, username, password, isLoading } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <h1>Login</h1>
            { errors.form && <div className="alert alert-danger">{errors.form}</div> }
            <TextFieldGroup 
                label="Username / Email"
                value={username}
                name="username"
                error={errors.username}
                type="text"
                onChange={this.onChange}
            />
            <TextFieldGroup 
                label="Password"
                value={password}
                name="password"
                error={errors.password}
                type="password"
                onChange={this.onChange}
            />
            
            <div className="form-group">
                <button className="btn btn-primary btn-lg" disabled={isLoading}>
                    Login
                </button>
            </div>
        </form>
      </div>
    )
  }
}

LoginForm.contextTypes = {
    router: PropTypes.object.isRequired
}

LoginForm.PropTypes = {
    login: PropTypes.func.isRequired
}