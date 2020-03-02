import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      person: {},
      subjects: []
    };
  }

  receiveDatFromChild = data => {
    const { message, person, subjects } = data;
    this.setState({
      message,
      person,
      subjects
    });
  };
  render() {
    const { message, person, subjects } = this.state;
    return (
      <div>
        <h2>I am From Parent</h2>
        <p>Message Recived From Child :- {message}</p>

        <p>Object Recieved From Child : </p>
        <ul>
          {Object.values(person).map(val => {
            return <li key={val}>{val}</li>;
          })}
        </ul>
        <p>Subjects Received From Parent :-</p>
        <ul>
          {subjects.map(sub => {
            return <li key={sub}>{sub}</li>;
          })}
        </ul>
        <hr />
        <Child dataFunc={this.receiveDatFromChild} />
      </div>
    );
  }
}
