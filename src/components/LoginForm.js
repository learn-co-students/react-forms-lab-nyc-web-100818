import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (this.state.username.length > 0 && this.state.password.length > 0){
      console.log(this.props.onSubmit(this.state))
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  render() {
    console.log(this.props)
    return (
      <form onSubmit={e => this.handleSubmit(e)}>
        <div>
          <label>
            Username
            <input onChange={e=> this.handleInput(e)} id="username" 
            name="username" 
            type="text" 
            value={this.state.username}
            />
            
          </label>
        </div>
        <div>
          <label>
            Password
            <input  onChange={e => this.handleInput(e)}id="password" 
            name="password" 
            type="password" 
            value={this.state.password}
            />
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
