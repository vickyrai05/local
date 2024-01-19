import React from "react";
import ReactDOM from "react-dom";
import "./Gk.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Pages from "./Pages";
import Vlog from "./Vlog";
import About from "./About";
import Contactus from "./Contactus";
import h1 from "./h1.png";
import Header from "./Header";
import Menubar from "./Menubar";
import Sidebar from "./Sidebar";
import Footer from "./Footer";

class Mymenu extends React.Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>

        <BrowserRouter>
          <Menubar />
          <Sidebar />
        </BrowserRouter>

        <Footer />
      </div>
    );
  }
}

export default Mymenu;
