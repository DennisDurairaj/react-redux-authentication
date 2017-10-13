import React, { Component } from 'react'

export default class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    }
  render() {
    return (
      <div>
        <form action="">
            <h1>Login</h1>
            <div className="form-group">
                <label className="control-label">Username</label>
                <input onChange="" value="this.state.username" type="text" name="username" className="form-control" />
                <label className="control-label">Password</label>
                <input onChange="" value="this.state.username" type="password" name="password" className="form-control" />
            </div>
            <div className="form-group">
                <button className="btn btn-primary btn-lg">
                    Login
                </button>
            </div>
        </form>
      </div>
    )
  }
}
