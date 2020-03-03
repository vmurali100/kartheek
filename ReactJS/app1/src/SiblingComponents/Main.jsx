import React, { Component } from "react";
import Sibling1 from "./Sibling1";
import Sibling2 from "./Sibling2";

export default class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      person: {},
      arr: []
    };
  }

  receiveDataFromSib2 = arr => {
    this.setState({ arr });
  };
  receiveMessageFromSib1 = (message, person) => {
    this.setState({ message, person });
  };
  render() {
    return (
      <div>
        <Sibling1 myFunc={this.receiveMessageFromSib1} arr={this.state.arr} />
        <hr />
        <Sibling2
          message={this.state.message}
          person={this.state.person}
          arrFunc={this.receiveDataFromSib2}
        />
      </div>
    );
  }
}
