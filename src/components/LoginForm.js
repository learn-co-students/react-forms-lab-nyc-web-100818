import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  submittable = event => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      this.props.onSubmit(this.state)
    }
  }

  updateInput = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.submittable}>
        <div>
          <label>
            Username
            <input
              id="username"
              name="username"
              type="text" value={this.state.username}
              onChange={this.updateInput} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.updateInput}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
