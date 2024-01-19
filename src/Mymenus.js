import React from 'react';
import './App.css';
import ReactDOM from 'react-dom';
import {BrowserRouter,Routes,Route,Link}from "react-router-dom";
import Home from './Home';
import Menu from './Pages';
import Contactus from './Contactus';
import About from './About';

 class Mymenus extends React.Component {
  render() {
    return (
      <div className='App'>
        <BrowserRouter>
            <Link to="" >Home</Link>
            <Link to="/Menu">Menu</Link>
            <Link to="/Contactus" style={{marginLeft:25,fontSize:15,fontWeight:"bold"}}>Contact Us</Link>
            <Link to="/About">About</Link> 
                <Routes>
                    <Route path="" element={<home/>}/>
                    <Route path="/Menu" element={<Menu/>} />
                    <Route path="/Contactus" element={<Contactus/>}/>
                    <Route path='/About' element={<About/>}/>
                </Routes>
              
        </BrowserRouter>

      </div>
    );
  }
}

export default Mymenus;