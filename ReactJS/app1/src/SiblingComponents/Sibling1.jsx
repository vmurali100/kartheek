import React, { Component } from "react";

export default class Sibling1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Hello World from Sibling1",
      person: {
        fname: "Candelaria",
        lname: "Grimm",
        tel: "(992)406-7475",
        address: "3015 Placerat St",
        city: "Stoneham",
        state: "UT",
        zip: 50307
      },

      fnames: [],
      multi: []
    };
  }

  getSomData = () => {
    console.log("getSomData called");
  };
  render() {
    let multi = [];
    let arrValu = [];
    return (
      <div>
        <h2>I am From Sibling 1</h2>
        {this.props.arr.map(obj => {
          arrValu.push(obj.fname.slice(0, 1));
        })}
        {arrValu.map(val => {
          let filterValues = arrValu.filter(v => {
            return v == val;
          });
          if (filterValues.length > 1) {
            multi.push(val);
          }
        })}
        {this.props.arr.map(obj => {
          if (obj.fname.slice(0, 1) == multi[0]) {
            return <li>{obj.fname}</li>;
          }
        })}
      </div>
    );
  }

  componentDidMount() {
    this.props.myFunc(this.state.message, this.state.person);
  }

  componentDidUpdate() {
    // console.log(multi);
  }
}
