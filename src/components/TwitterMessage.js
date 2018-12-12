import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      charsLeft: 140,
      maxlength: "",
      tweet: ''
    };
  }

  checkLength = event => {
    this.setState({
      tweet: event.target.value
    })
    if (event.target.value.length > 0) {
      let charsRemaining = 140 - event.target.value.length
      this.setState({
        charsLeft: charsRemaining
      }, () => console.log(this.state.charsLeft))
    }
    else if (event.target.value.length === 0) {
      this.setState({
        charsLeft: 140
      })
    }

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="tweet" onChange={this.checkLength} placeholder={this.state.charsLeft} value={this.state.tweet} />
        <p>{this.state.charsLeft}</p>
      </div>
    );
  }
}

export default TwitterMessage;
