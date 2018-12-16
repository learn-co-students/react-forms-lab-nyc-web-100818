import React from "react";

class TwitterMessage extends React.Component {
  // props = {maxChars: 140} so this.props.maxChars
  constructor(props) {
    super(props);
    // set initial state:
    this.state = { msg: '' };
  }

  handleInput = (e) => {
    // console.log(e.target.value);
    this.setState({ msg: e.target.value })
  }

  // the number we want to render will be the maxChars minus the length of our current message
  render() {
    return (
      <div>
        <strong>Your message: {this.props.maxChars - this.state.msg.length}</strong>
        <input type="text" value={this.state.msg} onChange={this.handleInput}/>
      </div>
    );
  }
}

export default TwitterMessage;
