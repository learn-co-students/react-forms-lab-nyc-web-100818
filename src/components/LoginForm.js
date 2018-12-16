import React from "react";

class LoginForm extends React.Component {
  // props are: {onSubmit: ƒ} so to access that it's this.props.onSubmit
  constructor(props) {
    super(props);

    // set initial state
    this.state = {
      username: '',
      password: ''
    };
  } // end constructor

  handleChg = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
      // () => console.log("new state is:", this.state)
  }

  onFormSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state);
    
  }


  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChg}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChg}/>
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
