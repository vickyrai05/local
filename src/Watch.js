import React from "react";
import ReactDOM from "react-dom";
import watch from "./watch.png";
import watch1 from "./watch1.jpg";
import watch6 from "./watch6.jpg";
import watch7 from "./watch7.jpg";
import watch4 from "./watch4.jpg";
class Watch extends React.Component {
  render() {
    return (
      <div className="mop">
        <div className="ui">
          <img src={watch} className="st" />
          <p className="yu">
            Fire-Boltt Quantam <br></br> Luxury Steel Design
            <br></br> Calling Smartwatch<br></br>₹2,999{" "}
          </p>
        </div>
        <div className="ui">
          <img src={watch1} className="st" />
          <p className="yu">
            Fire-Boltt Quantam <br></br> Luxury Gold Design
            <br></br> Calling Smartwatch<br></br>₹3,499{" "}
          </p>
        </div>
        <div className="ui">
          <img src={watch6} className="st" />
          <p className="yu">
          Fire-Boltt Quantam<br></br> Luxury Steel Design
            <br></br> Premium Blue<br></br>₹ 5,999{" "}
          </p>
        </div>
        <div className="ui">
          <img src={watch7} className="st" />
          <p className="yu">
          Fire-Boltt Quantam<br></br> Luxury Steel Design
            <br></br> Premium Blue<br></br>₹ 4,999{" "}
          </p>
        </div>
        <div className="ui">
          <img src={watch4} className="st" />
          <p className="yu">
            Fire-Boltt Quantam <br></br> Luxury Steel Design
            <br></br> Calling Smartwatch<br></br>₹2,999{" "}
          </p>
        </div>
    </div>
    );
  }
}

export default Watch;
