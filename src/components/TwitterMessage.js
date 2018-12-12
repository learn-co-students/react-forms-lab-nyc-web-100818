import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);
    
    this.state = {
      message: ""
    };
  }
  
  handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
      })
  }


  

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input name="message" onChange={this.handleChange} type="textArea" value={this.state.message} />
        {this.props.maxChars-this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
