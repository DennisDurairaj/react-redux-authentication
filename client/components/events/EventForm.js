import React, {Component} from 'react'
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';

class EventForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            errors: {},
            isLoading: false
        };
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.createEvent(this.state);
    }

    render() {
        const {title, errors, isLoading} = this.state;
        return (
            <form onSubmit={this.onSubmit}>
                <h1>Create new event</h1>
                <TextFieldGroup
                    name="title"
                    value={title}
                    label=""
                    error={errors.title}
                    onChange={this.onChange}
                    type="text"/>
                <button type="submit" className="btn btn-primary">Create</button>
            </form>
        )
    }
}

EventForm.PropTypes = {
    createEvent: PropTypes.func.isRequired
}

export default connect(null, { createEvent })(EventForm);