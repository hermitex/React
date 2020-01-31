import React, { Component } from "react";

class UserGreetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true
    };
  }

  render() {
    return this.state.isLoggedIn ? (
      <div>Welcome Tiberius!</div>
    ) : (
      <div>Welcome Guest!</div>
    );

    // let message;
    // if (this.state.isLoggedIn) {
    //   message = <div>Welcome Tiberius!</div>;
    // } else {
    //   message = <div>Welcome Guest!</div>;
    // }
    // return message;

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Tiberius!</div>;
    // } else {
    //   return <div>Welcome Guest!</div>;
    // }
    // return (
    //   <div>
    //     <h1>Welcome Tiberius!</h1>
    //     <h1>Welcome Guest!</h1>
    //   </div>
    // );
  }
}

export default UserGreetings;
