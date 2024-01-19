import React from "react";
import "./Gk.css";
import h1 from "./h1.png";

class Header extends React.Component{
  render(){
    return(
      <div>
          <div className="main">
            <div className="App">
              <img src={h1} className="pk" />
              <button className="se">Search</button>
              <input type="text" placeholder="Type Here..." className="input" />
          </div>
        </div>
      </div>
    )
  }
}
export default Header;

