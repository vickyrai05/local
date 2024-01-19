import React from "react";
import ReactDOM from "react-dom";
import "./Gk.css";
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import PageSummary from "./PageSummary";
import AddPage from "./Addpage";
import Home from "./Home";

class Sidebar extends React.Component {
  render() {
    return (
      <div className="inn1">
        <div className="mn">
          <ul className="leftlist">
            <nav>
              <NavLink to="/PageSummary">
                <li>PageSummary</li>
              </NavLink>
              <NavLink to="/AddPage">
                <li>Add Page</li>
              </NavLink>
            </nav>

            <li>Event Summary</li>
            <li>Add Event</li>
            <li>Change Password</li>
            <li>Module Summary</li>
            <li>
              Login information<br></br> username: Vicky<br></br> Email:Vickyrai
              <br></br> @gmail.com
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/PageSummary" element={<PageSummary />} />
          <Route path="/AddPage" element={<AddPage />} />
        </Routes>
      
      </div>
    );
  }
}

export default Sidebar;
