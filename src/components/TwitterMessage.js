import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  handleFormText = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input name='input' type="text" onChange={this.handleFormText} value={this.state.input} />
        <p>Characters remaining: {140 - this.state.input.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
