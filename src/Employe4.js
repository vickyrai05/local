import React, { Component } from "react";

class Employe4 extends Component {
  constructor() {
    super();
    this.state = {
      name: "Vicky",
      age: 21,
      surname: "Rai",

      // name:2
    };
  }
  changeName() {
    this.setState({
      name: "Welcome to my House",
      age: 22,
      surname: "Patel",
      // name:this.state.name +2
    });
  }
  render() {
    return (
      <div>
        <h1 style={{ color: "red", fontSize: "62px" }}>{this.state.name}</h1>
        <h1 style={{ color: "red", fontSize: "62px" }}>{this.state.age}</h1>
        <h1 style={{ color: "red", fontSize: "62px" }}>{this.state.surname}</h1>
        <input type="button"value="Click"style={{ backgroundColor: "green" }}
         onClick={() => this.changeName()}/>
      </div>
    );
  }
}

export default Employe4;
