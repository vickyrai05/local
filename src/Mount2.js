import React, { Component } from 'react'

export class Mount2 extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:"Vicky rai"
      }
      console.log("Mount 2 constructor is invoked")
    }
    static getDerivedStateFromProps(props,state){
        console.log("Mount 2 getDerivedStateFromProps invoked... ");
        console.log(props);
        console.log(state);
        return null
    }
    componentDidMount(){
        console.log("componentdid mount 2");
    }
  render() {
    console.log("Mount 2 render is invoked")
    return (
      <div>
        <h1>{this.state.name}</h1>
        <h1>{this.props.city}</h1>
      </div>
    )
  }
}

export default Mount2;
