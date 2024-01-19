 import React, { Component } from 'react';

 
 


//   class Propwithclass3 extends Component {
//    render() {
//      return (
//        <div>
//          <h1>My Name is  {this.props.name}</h1>
//          {this.props.children}
//        </div>
//      )
//    }
//  }
   
 

 
//  function Propwithclass3(props) {

//    return (
//      <div>
//         <h1>My Name is  {props.name}</h1>         
//      </div>
//    )
//  }
 


const Propwithclass3 = ({name}) => {
  return (
    <div>
       <h1>{name}</h1>
    </div>
  )
}




 
 export default Propwithclass3;