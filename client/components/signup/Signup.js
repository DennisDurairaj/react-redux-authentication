import React from 'react';
import SignupForm from './SignupForm';
import FlashMessagesList from '../flash/FlashMessagesList';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { userSignupRequest } from '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages'

class Signup extends React.Component {
    render() {
        return (
            <div className="row">
                <FlashMessagesList />
                <div className="col-md-4 col-md-offset-4">
                    <SignupForm userSignupRequest={this.props.userSignupRequest} addFlashMessage={this.props.addFlashMessage} />
                </div>
            </div>
        )
    }
}


Signup.PropTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage })(Signup);
