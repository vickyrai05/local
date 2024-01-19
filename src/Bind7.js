 import React from 'react'
 

 
 export default class Bind7 extends React.Component {
        constructor(){
            
            super()
            this.state={
                name:"Vicky",
            
            }
             this.functionhello = this.functionhello.bind(this)
        }

        functionhello() {
            this.setState({
                name:"Rai"
            });
            
        }
   render() {
     return (
       <div>
         <h1>{this.state.name}</h1>
         <button onClick={this.functionhello}>Click</button>
       </div>
     )
   }
 }
 
