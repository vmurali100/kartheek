import React, { Component } from "react";
import User from "./User";
import UserList from "./UserList";

export default class Crud extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {},
      userListArray: []
    };
  }

  recieveUser = user => {
    let users = this.state.userListArray;
    users.push(user);
    this.setState({ userListArray: users });
  };

  render() {
    return (
      <div>
        <div className="container">
          <h2>Welcome to CRUD APP</h2>

          <div className="row">
            <div className="col-md-12">
              <UserList userListArray={this.state.userListArray} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
