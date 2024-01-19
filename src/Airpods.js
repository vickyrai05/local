import React from "react";
import ReactDOM from "react-dom";
import air1 from "./air1.jpg";
import air2 from "./air2.jpg";
import air3 from "./air3.jpg";
import air4 from "./air4.jpg";
import air5 from  './air5.jpg'
class Watch extends React.Component {
  render() {
    return (
      <div className="mop">
        <div className="ui">
          <img src={air5} className="st" />
          <p className="yu">
                boAt Airpods 141<br></br>Bluetooth Wireless in
            <br></br> Headphones with 44H Playtime,<br></br>₹1,699{" "}
          </p>
        </div>
        <div className="ui">
          <img src={air1} className="st" />
          <p className="yu">
            Oneplus Nord Airpods <br></br>Bluetooth Wireless in
            <br></br> Headphones with 44H Playtime,<br></br>₹2,699{" "}
          </p>
        </div>
        <div className="ui">
          <img src={air2} className="st" />
          <p className="yu">
               Boult Audio Moverick<br></br>Bluetooth Wireless in
            <br></br> Headphones with 44H Playtime,<br></br>₹1,999{" "}
          </p>
        </div>
        <div className="ui">
          <img src={air3} className="st" />
          <p className="yu">
          boAt Airpods 142<br></br>Bluetooth Wireless in
            <br></br> Headphones with 44H Playtime,<br></br>₹1,699{" "}
          </p>
        </div>
        <div className="ui">
          <img src={air4} className="st" />
          <p className="yu">
          JBL Airpods 142<br></br>Bluetooth Wireless in
            <br></br> Headphones with 44H Playtime,<br></br>₹2,499{" "}
          </p>
        </div>
      </div>
    );
  }
}

export default Watch;
