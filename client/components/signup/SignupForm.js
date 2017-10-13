import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';
import { Redirect } from 'react-router-dom';

export default class SignupForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordConfirm: '',
            errors: {},
            isLoading: false,
            success: false
        }
    }

    onInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
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
        if (this.isValid()) {
            this.setState({ errors: {}, isLoading: true });
            this.props.userSignupRequest(this.state).then(
                () => {
                    this.props.addFlashMessage({
                        type: 'success',
                        text: 'You have signed up successfully'
                    })
                    this.context.router.history.push('/');
                },
                ({ data }) => {
                    this.setState({ errors: data, isLoading: false })
                }
            );
        }
    }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <h1>Sign Up</h1>
            <TextFieldGroup 
                name="username" 
                type="text" value={this.state.username} 
                onChange={this.onInput} 
                error={errors.username} label="Username" 
            />
            <TextFieldGroup 
                name="email" 
                type="text" value={this.state.email} 
                onChange={this.onInput} 
                error={errors.email} label="Email" 
            />
            <TextFieldGroup 
                name="password" 
                type="password" value={this.state.password} 
                onChange={this.onInput} 
                error={errors.password} label="Password" 
            />
            <TextFieldGroup 
                name="passwordConfirm" 
                type="password" value={this.state.passwordConfirm} 
                onChange={this.onInput} 
                error={errors.passwordConfirm} label="Confirm Password" 
            />
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

SignupForm.contextTypes = {
    router: PropTypes.object.isRequired
}

SignupForm.PropTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired
}
