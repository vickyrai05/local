import React from "react";
import ReactDOM from "react-dom";
import { Link, Outlet } from "react-router-dom";
class Product extends React.Component {
  render() {
    return (
      <>
        <div className="coo">
         <Link to='/Watch'>Watch</Link>
         <Outlet/> 
        </div>
        <div className="coo">
        <Link to='/Airpods'>Airpods</Link> 
        <Outlet/>
        </div>
      </>
    );
  }
}

export default Product;
