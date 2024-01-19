                                           
import React, { Component } from 'react'

export default class Controlform extends Component {
    constructor(props) {
      super(props)
      this.state = {
        data:""
      }
    }
    handleform = (e) => {
        this.setState({
           data:e.target.value.toUpperCase()
        });
       
    }
    handledata = (e) => {
        e.preventDefault();
        console.log(e.target[0].value.toUpperCase());
    }
    
  render() {
    return (
      <div>
        <form onSubmit={this.handledata}>
        <center>
        <h1 style={{color:"green"}}>{this.state.data}</h1>
            <label htmlFor="">Enter Name : </label>
            <input type="text" value={this.state.data} onChange={this.handleform}/>
            <br></br>
            <input type="submit" value="Submit"/>
        </center>
        </form>
      </div>
    )
  }
}
