import React from "react";
import ReactDOM from "react-dom";

class Map1 extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [
        { name: "Harry", contact_no: "1", email: "harry@gmail.com" },
        { name: "Vicky", contact_no: "5", email: "Vicky@gmail.com" },
        { name: "Sunny", contact_no: "3", email: "Sunny@gmail.com" },
      ],
    };
  }

  render() {
    return (
      <div style={{ color: "forestgreen", fontSize: 20, textAlign: "center" }}>
        <h1>Listing With Map</h1>
        {this.state.list.map((item) => (
          <div>
            <span>{item.contact_no}</span>
          </div>
        ))}
      </div>
    );
  }
}

export default Map1;
