import React, { Component } from "react";
import { render } from "react-dom";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  incrementCount() {
    // this.setState({
    //   count: this.state.count + 1
    // });

    this.setState(previousState => ({
      count: previousState.count + 1
    }));
  }

  incrementFive() {
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
    this.incrementCount();
  }

  render() {
    return (
      <div>
        <h1>Counter - {this.state.count}</h1>
        <button onClick={() => this.incrementFive()}>Increment</button>
      </div>
    );
  }
}
export default Counter;
