import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      value: ''
    };
  }

  handleChange = (event) => {
    if (this.state.value.length < this.props.maxChars) {
      this.setState({
        value: event.target.value
      })
    }
  }

  charsLeft = () => {
    return this.props.maxChars - this.state.value.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
        type="text"
        value={this.state.value}
        onChange={this.handleChange}
        />
        <label>{this.charsLeft()} characters remaining</label>
      </div>
    );
  }
}

export default TwitterMessage;
