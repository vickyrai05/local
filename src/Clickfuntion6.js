import React from 'react'
import './App.css';


function Clickfuntion6(props) {
    
const HelloFunction=(name)=>{
  alert("hello"  + name)
}

  return(
    <button onClick={()=>HelloFunction(props.name)}>Click</button>
  );
  }
// import React, { Component } from 'react'
// import './App.css';

//  class Clickfuntion6 extends Component {
//        HelloFunction(){
//         alert("hello World")
//        }
//   render() {
//     return (
//       <div className='App'>
//         <button onClick={this.HelloFunction}>Click</button>
//       </div>
//     )
//   }
// }

// import React from 'react'
// import './App.css';


// function Clickfuntion6() {
//     function HelloFunction(){
//         alert("Hello Brother"); 
//     }

//   return (
//     <div className='App'>
//       <button onClick={HelloFunction}>Click</button>
//     </div>
//   )
// }

export default Clickfuntion6
