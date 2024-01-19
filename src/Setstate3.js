import React from "react";


class Setstate3 extends React.Component{
    constructor(props){
        super(props);
        this.state={
            header:""
        }  
    }
    render(){
         return(
            <div>
               Enter Number1:<input type ="text" onChange={e=>this.setState({header:e.target.value})}/>
               <div>
               <p>{this.state.header}</p>
               </div>
             
            </div>
         );
            
         
    }
}
  export default Setstate3;