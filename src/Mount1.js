import React, { Component } from 'react';
import Mount2 from './Mount2';
export class Mount1 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Vicky"
      }
      console.log("Mount 1 constructor is invoked")
    }
    static getDerivedStateFromProps(props,state){
        console.log("Mount 1 getDerivedStateFromProps invoked... ");
        console.log(props);
        console.log(state);
        return null
    }
    componentDidMount(){
        console.log("componentdid mount");
    }
  render() {
    console.log("Mount 1 render is invoked")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
        <Mount2 city="chandigarh"/>
      </div>
    )
  }
}

export default Mount1
