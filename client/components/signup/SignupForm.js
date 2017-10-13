import React, { Component } from 'react';
import PropTypes from 'prop-types';
import validateInput from '../../../server/shared/validations/signup';
import TextFieldGroup from '../common/TextFieldGroup';

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
                () => {},
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
                error={errors.username} label="Username" />
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
