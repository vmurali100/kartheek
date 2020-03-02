import React, { Component } from "react";

export default class Child extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "I am from Child",
      person: { fname: "Kartheek", lname: "Porigi" },
      subjects: ["Javascript", "ReactJS", "Node", "MongoDB"]
    };
    console.log("Constructor Called");
  }
  componentDidMount() {
    console.log("componentDidMount called");
    this.props.dataFunc(this.state);
  }
  render() {
    console.log("render Called");
    return (
      <div>
        <p>I am From Child</p>
      </div>
    );
  }
}
