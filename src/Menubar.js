import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, NavLink, Link } from "react-router-dom";
import "./Gk.css";
import Home from "./Home";
import Pages from "./Pages";
import Vlog from "./Vlog";
import About from "./About";
import Contactus from "./Contactus";
import AddPage from "./Addpage";
import Pagesummary from "./PageSummary";
import Product from "./Product";
import Watch from "./Watch";
import Airpods from "./Airpods";

class Menubar extends React.Component {
  render() {
    return (
      <div className="main1">
        <div className="main2">
          <nav>
            <NavLink to="/" className="home1">
              Home
            </NavLink>

            <NavLink to="/Pages" className="menu">
              Pages
            </NavLink>

            <NavLink to="/Vlog">Blog</NavLink>

            <NavLink to="/product">Product</NavLink>

            <NavLink to="/About">About</NavLink>

            <NavLink to="/Contactus">Contact</NavLink>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pages" element={<Pages />} />
            <Route path="/Vlog" element={<Vlog />} />
            <Route path="/Product" element={<Product />}/>
            <Route path="/Watch" element={<Watch />} />
            <Route path="/Airpods" element={<Airpods/>}/> 
            <Route path="/About" element={<About />} />
            <Route path="/Contactus" element={<Contactus />} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default Menubar;
