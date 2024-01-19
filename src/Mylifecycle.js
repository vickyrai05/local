import React  from 'react'

class Mylifecycle extends React.Component{
    constructor(props){
        super(props);
        this.state={
         data:0
        }
         this.setNewNumber=this.setNewNumber.bind(this)
    }; 
   setNewNumber(){
    this.setState({data:this.state.data + 1})
   }
   render(){
      return(
        <div style={{color:"green",fontSize:20,textAlign:"center"}}>
        <button onClick={this.setNewNumber}>INCREMENT</button> 
        <Content myNumber = { this.state.data} ></Content>

        </div>
      );
   }    
}

class Content extends React.Component{
     componentWillMount(){
        console.log ('Component WILL MOUNT'); /* excuted before the component is mounted..*/
     }

     componentDidMount(){
        console.log("Component DID MOUNT!"); /* excuted after the component is mounted..  */ 
     }

     componentWillReceiveProps(newProps){
        console.log ('Component WILL RECIEVE PROPS');
     }
     
     shouldComponentUpdate(newProps,newState){
        return true;
     }
     
     componentWillUpdate(nextProps,nextState){
        console.log ('Component WILL UPDATE')
     }
    
     componentDidUpdate(prevProps,prevState){
        console.log ('Component DID UPDATE')
     }

     componentWillUnmount(){
        console.log ('Component WILL Unmount')
     }

     render(){
          return(
            <div>
              <h3>{this.props.myNumber}</h3>
            </div>
          );
     }
}

 export default Mylifecycle;