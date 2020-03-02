import React, { Component } from "react";

export default class Kartheek extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    console.log(props);
  }

  render() {
    return (
      <div>
        <h2>{this.props.msg}</h2>
        {/* <ul>
          <li>{this.props.obj.fname}</li>
          <li>{this.props.obj.lname}</li>
        </ul> */}
        <ul>
          {Object.values(this.props.obj).map((val, index) => {
            return <li key={index}>{val}</li>;
          })}
        </ul>

        {this.props.users.map(obj => {
          return (
            <ul>
              {Object.values(obj).map(val => {
                return <li>{val}</li>;
              })}
            </ul>
          );
        })}
      </div>
    );
  }
}
