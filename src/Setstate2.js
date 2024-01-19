import React from "react";
 
class setState2 extends React.Component{
    constructor(props){

        super(props);
        this.state={
           a:"Hello  React",
           b:"Hello  Javascript",
          
        }
        this.show = this.show.bind(this)
        this.show1 = this.show1.bind(this)
       
    }
    show()
    {
        this.setState({a:"I' am Vicky"})
       
    };
    show1()
    {
        this.setState({b:"Good Morning"})
       
    };

    
    render(){
         return(
            <div>
                <button style={{color:"red"}} onClick={this.show}>click</button>
                <h1 style={{color:"green"}}>{this.state.a}</h1>
                <button style={{color:"red"}} onClick={this.show1}>click1</button>
                <h1 style={{color:"green"}}>{this.state.b}</h1>
           
            </div>
         );
            
         
    }
}
  export default setState2;
 