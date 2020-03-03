import React, { Component } from "react";

export default class Sibling2 extends Component {
  render() {
    return (
      <div>
        <h2>I am from Sibling2</h2>
        <h2>Message Received From Sibling1 : {this.props.message}</h2>
        <ul>
          <li>{this.props.person.fname}</li>
        </ul>
      </div>
    );
  }
  componentDidMount() {
    this.props.arrFunc(users);
  }
}
const users = [
  {
    fname: "Candelaria",
    lname: "Grimm",
    tel: "(992)406-7475",
    address: "3015 Placerat St",
    city: "Stoneham",
    state: "UT",
    zip: 50307
  },
  {
    fname: "Dwight",
    lname: "Googleanalytics",
    tel: "(458)082-9590",
    address: "2633 Risus Dr",
    city: "Chester Springs",
    state: "NC",
    zip: 71908
  },
  {
    fname: "Nidal",
    lname: "Culin",
    tel: "(156)900-7626",
    address: "5802 Tortor Ln",
    city: "Boston",
    state: "OH",
    zip: 95963
  },
  {
    fname: "Gary",
    lname: "Davila",
    tel: "(566)827-5486",
    address: "9372 Tortor Ln",
    city: "Columbus",
    state: "LA",
    zip: 80903
  },
  {
    fname: "Megan",
    lname: "Lichtenwalner",
    tel: "(652)142-2418",
    address: "6205 In Ave",
    city: "Camas",
    state: "TX",
    zip: 64361
  },
  {
    fname: "Imelda",
    lname: "Jellison",
    tel: "(771)395-6698",
    address: "964 Vitae Rd",
    city: "Union City",
    state: "NH",
    zip: 91239
  },
  {
    fname: "LuAnn",
    lname: "Boudreau",
    tel: "(116)995-7110",
    address: "8797 Placerat Ct",
    city: "Piedmont",
    state: "GA",
    zip: 94327
  },
  {
    fname: "Byron",
    lname: "Deskins",
    tel: "(806)238-2203",
    address: "9552 Morbi St",
    city: "Fort Campbell",
    state: "VA",
    zip: 30281
  },
  {
    fname: "Kosta",
    lname: "Lallemont",
    tel: "(539)480-6490",
    address: "429 Placerat Ln",
    city: "Malta",
    state: "MN",
    zip: 64271
  },
  {
    fname: "Melgema",
    lname: "Marton",
    tel: "(439)800-4168",
    address: "2489 Ipsum Ln",
    city: "Lake Lillian",
    state: "AK",
    zip: 43767
  }
];
