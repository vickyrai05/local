import React, { Component } from 'react'

export default class Colorchange extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         header:""
      }
    }
    coluorchange=(e)=>{
        this.setState({
            header:e.target.value
        })
    }
  render() {
    return (
      <div>
        <input type="text" onChange={this.coluorchange}/>
        <div style={{backgroundColor:this.state.header}}>
       <h1>vickyrai</h1>
        </div>
      </div>
    )
  }
}
