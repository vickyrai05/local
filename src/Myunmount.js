import React from 'react';

class Unmount extends React.Component{
    constructor(props){
        super(props);
        this.state={
         show:false
        }
    }; 
   render(){
      return(
        <div style={{color:"green",fontSize:20,textAlign:"center"}}>
        <h1>Component Will unmount</h1>
        {this.state.show ? <Child/>:null}
        <button onClick={()=>{this.setState({show:!this.state.show})}}>Toggle</button> 
        </div>
      );
   }    
}
 class Child extends React.Component {
    componentWillUnmount(){
      console.log('Component Will Unmount')  
    }
    render(){
        return(
            <div>
                <h3>Child Component</h3>
            </div>
        );  
    }
 }


export default Unmount;