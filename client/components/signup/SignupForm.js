import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    }

    onInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.userSignupRequest(this.state);
    }

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <h1>Sign Up</h1>
            <div className="form-group">
                <label className="control-label">Username</label>
                <input onChange={this.onInput} value={this.state.username} type="text" name="username" className="form-control" />
            </div>
            <div className="form-group">
                <label className="control-label">Email</label>
                <input onChange={this.onInput} value={this.state.email} type="email" name="email" className="form-control" />
            </div>
            <div className="form-group">
                <label className="control-label">Password</label>
                <input onChange={this.onInput} value={this.state.password} type="password" name="password" className="form-control" />
            </div>
            <div className="form-group">
                <label className="control-label">Confirm Password</label>
                <input onChange={this.onInput} value={this.state.passwordConfirm} type="password" name="passwordConfirm" className="form-control" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-lg">
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
