import React from 'react'
import {Link, Navigate } from 'react-router-dom';



class Admin extends React. Component {
    constructor() {
      super();
      const token = localStorage.getItem('token');
      let loggedIn = true;
      if(token==null){
        loggedIn=false;
      }
    
      this.state = {
        loggedIn 
      }
      console.log(token,"<----------admin");
    }
    
  render() {
    if (this.state.loggedIn == false){
        return<Navigate to='/'/>
    }
    return (
      <div>
        <h1>This is an Admin Page only auth people can see this</h1>
        <Link to ='/Logout'>Logout</Link>
      </div>
    )
  }
}

export default Admin;
