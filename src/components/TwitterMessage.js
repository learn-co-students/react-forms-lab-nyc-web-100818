import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      maxChars: props.maxChars,
      input: ''
    };
  }



  handleChange = (event) => {
    this.setState({
      maxChars: this.state.maxChars - 1,
      input: event.target.value
    },()=>console.log(this.state))

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.input}/>

        <p>Remaining Characters: {this.state.maxChars}</p>


      </div>
    );
  }
}

export default TwitterMessage;
