import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        fname: "",
        lname: "",
        email: ""
      }
    };
  }

  handleChange = e => {
    // let user = this.state.user;
    let user = Object.assign({}, this.state.user);
    user[e.target.name] = e.target.value;
    this.setState({ user });
  };

  handleSubmit = () => {
    this.props.receiveUser(this.state.user);
  };
  render() {
    const { fname, lname, email } = this.state.user;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="fname">First Name</label>
          <input
            type="email"
            className="form-control"
            value={fname}
            name="fname"
            onChange={event => {
              this.handleChange(event);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="lname">Last Name</label>
          <input
            type="email"
            className="form-control"
            value={lname}
            name="lname"
            onChange={event => {
              this.handleChange(event);
            }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            className="form-control"
            value={email}
            name="email"
            onChange={event => {
              this.handleChange(event);
            }}
          />
        </div>

        <button
          type="button"
          className="btn btn-primary"
          onClick={this.handleSubmit}
        >
          Submit
        </button>
      </form>
    );
  }
}
