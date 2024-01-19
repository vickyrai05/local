import React, { Component } from 'react';



const Demo = ({name,age})=>{
    var myStyle={
        fontSize:30,
        color:'#FF0000'
    }
    return(
        <div style={myStyle}>
         <h1>{name}</h1>
         <h1>{age}</h1>
         <p>This is paragraph</p>
        </div>
    );
}


// function Demo(props){
//     return(
//         <div>
//             <h1>Good Job {props.name}</h1>
//             <p>This is paragraph</p>
//         </div>
//     )
// }
  
// class Demo extends Component{
//     render() {
//       return (
//         <div>
          
//           <h1>Good Job {this.props.name}</h1>
//           <h1>Your Age {this.props.age}</h1>
//             <p>This is paragraph</p>
//         </div>
//       );
//     }
// }

export default Demo;