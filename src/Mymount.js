import React, { Component } from 'react'

class Mount extends React.Component{
    constructor(props){
        super(props);
        this.state={
         data:"not updated"
        }
        console.log("constructor is calling"); 
    };

componentDidMount(){
    this.setState({
        data:"updated"
    })
    console.log("componentDidMount is calling");
}

render(){
    console.log("render is calling");
     return(
        <div style={{color:"green",fontSize:20,textAlign:"center"}}>
            <h1>life Cycle Method:componentDidMount</h1>
            <p>{this.state.data}</p>
        </div>
     );
  }

}

export default Mount;