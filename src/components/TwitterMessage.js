import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: props.maxChars,
      value: ""
    };
  }

  handleChange = (e) => {
      this.setState({
        value: e.target.value
      })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={e => this.handleChange(e)} type="text"
        value={this.state.value.slice(0, this.state.maxChars)} />
        <h2>Characters left? {parseInt(this.state.maxChars) - this.state.value.length} </h2>
      </div>
    );
  }
}

export default TwitterMessage;
