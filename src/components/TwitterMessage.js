import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: ""
  }

  onChange = (e) => {
    this.setState({
      message: e.target.value
    })
  }

  get remainingCharacters() {
    return this.props.maxChars - this.state.message.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.onChange} type="text" name="message" value={this.state.message} />
        <div>Remaining characters: {this.remainingCharacters}</div>
      </div>
    );
  }
}

export default TwitterMessage;
