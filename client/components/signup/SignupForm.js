import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classname from 'classnames';

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            errors: {},
            isLoading: false
        }
    }

    onInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        this.setState({ errors: {}, isLoading: true });
        e.preventDefault();
        this.props.userSignupRequest(this.state).then(
            () => {},
            ({ data }) => {
                this.setState({ errors: data, isLoading: false })
            }
        );
    }

  render() {
      const { errors } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <h1>Sign Up</h1>
            <div className={classname("form-group", {"has-error": errors.username})}>
                <label className="control-label">Username</label>
                <input onChange={this.onInput} value={this.state.username} type="text" name="username" className="form-control" />
                {errors.username && <span className="help-block">{errors.username}</span>}
            </div>
            <div className={classname("form-group", {"has-error": errors.email})}>
                <label className="control-label">Email</label>
                <input onChange={this.onInput} value={this.state.email} type="email" name="email" className="form-control" />
                {errors.email && <span className="help-block">{errors.email}</span>}                
            </div>
            <div className={classname("form-group", {"has-error": errors.password})}>
                <label className="control-label">Password</label>
                <input onChange={this.onInput} value={this.state.password} type="password" name="password" className="form-control" />
                {errors.password && <span className="help-block">{errors.password}</span>}                
            </div>
            <div className={classname("form-group", {"has-error": errors.passwordConfirm})}>
                <label className="control-label">Confirm Password</label>
                <input onChange={this.onInput} value={this.state.passwordConfirm} type="password" name="passwordConfirm" className="form-control" />
                {errors.passwordConfirm && <span className="help-block">{errors.passwordConfirm}</span>}                
            </div>
            <div className="form-group">
                <button disabled={this.state.isLoading} className="btn btn-primary btn-lg">
                    Sign Up
                </button>
            </div>
        </form>
      </div>
    )
  }
}

SignupForm.PropTypes = {
    userSignupRequest: PropTypes.func.isRequired
}
