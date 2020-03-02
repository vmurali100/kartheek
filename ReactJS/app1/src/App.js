import React from "react";
// import Kartheek from "./Kartheek";
import Parent from "./ChildToParent/Parent";

//functional or stateless Component
function App() {
  let message = "Hello React From App.js";
  let person = {
    fname: "Murali",
    lname: "Krishna"
  };
  let users = [
    {
      fname: "Samuel",
      lname: "Finn"
    },
    {
      fname: "Tina",
      lname: "Armstrong"
    },
    {
      fname: "Edward",
      lname: "Sweeney"
    },
    {
      fname: "Anwar",
      lname: "David"
    },
    {
      fname: "Alejandro",
      lname: "Primavera"
    }
  ];
  return (
    <div className="App">
      <h2>Hello world</h2>
      {/* <Kartheek msg={message} obj={person} users={users} /> */}
      <Parent />
    </div>
  );
}

export default App;
