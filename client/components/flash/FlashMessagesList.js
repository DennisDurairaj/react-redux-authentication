import React, { Component } from 'react';
import { connect } from 'react-redux';
import Proptypes from 'prop-types';
import FlashMessage from './FlashMessage';
import { deleteFlashMessage } from '../../actions/flashMessages';

class FlashMessagesList extends Component {
  componentWillMount() {
    console.log("going to mount")
}
  render() {
    const messages = this.props.messages.map(message =>
        <FlashMessage key={message.id} message={message} deleteFlashMessage={this.props.deleteFlashMessage} />
    )
    return (
      <div>
        {messages}
      </div>
    )
  }
}

FlashMessagesList.propTypes = {
    messages: Proptypes.array.isRequired,
    deleteFlashMessage: Proptypes.func.isRequired
}

function mapStatetoProps(state) {
    return {
        messages: state.flashMessages
    }
}

export default connect(mapStatetoProps, { deleteFlashMessage })(FlashMessagesList);