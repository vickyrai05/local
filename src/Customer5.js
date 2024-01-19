//import React from 'react'

import React, { Component } from "react";

// class Customer5 extends Component {
//   constructor() {
//     super();
//     this.state = {
//       name: "vicky",
//       age: 25,
//     };
//   }

//   render() {
//     const { name, age } = this.state;
//     return (
//       <div>
//         <h2>{name}</h2>
//         <h3>{age}</h3>
//       </div>
//     );
//   }
// }

class Customer5 extends Component {
  render() {
    const { name, age } = this.props;

    return (
      <div>
        <h2>{name}</h2>
        <h3>{age}</h3>
      </div>
    );
  }
}

//  function Customer5({name,age}) {
//   return (
//     <div>
//       <h1>{name}</h1>
//       <h1>{age}</h1>
//     </div>
//   );
// }

//  function Customer5(props) {
//     const {name, age} = props;
//       return (
//         <div>
//           <h1>{name}</h1>
//           <h3>{age}</h3>
//         </div>
//       );
//      }

export default Customer5;
