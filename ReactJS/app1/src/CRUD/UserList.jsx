import React, { Component } from "react";
import axios from "axios";

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
    console.log(props);
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      console.log(res.data);
      this.setState({ users: res.data });
    });
  }
  render() {
    console.log(this.props.userListArray);
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Email</th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map(user => {
              return (
                <tr>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>{user.website}</td>
                  <td>
                    {Object.values(user.address).map(val => {
                      console.log(typeof val);
                      if (typeof val == "string") {
                        return <p>{val}</p>;
                      } else {
                        let ele = "Geo :-";
                        Object.values(val).map(v => {
                          ele += v + " - ";
                        });
                        return ele;
                      }
                    })}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
