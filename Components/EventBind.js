import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "Hello"
    };

    // this.changeMessage = this.changeMessage.bind(this)
  }

  changeMessage = () => {
    this.setState({
      message: "Good bye!😘"
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.changeMessage}>Click</button>
      </div>
    );
  }
}
export default EventBind;
