import React from "react";
import './App.css';
class Setstate4 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            header:""

        }
        
    }
   
    render(){
        const{header}=this.state;
        console.log(this.state.header)
         return(
            <div align="center">
                Enter Colour<input type ="text" placeholder="Enter the Colour Name" onChange={e=>this.setState({header:e.target.value})}/>
                 <div style={{backgroundColor:this.state.header, height:"50vh"}}>
                 <h1> React</h1>
                 <h1>{this.state.header}</h1>
                 </div>
             
            </div>
         );
            
         
    }
}
  export default Setstate4;