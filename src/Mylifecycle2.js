import React, { Component } from "react";
import "./App.css";

class Mylifecycle2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: 0,
    };
    this.hellofunction = this.hellofunction.bind(this);
  }

  hellofunction() {
    this.setState({ data: this.state.data + 2 });
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.hellofunction}>Click</button>
        <Content myNumber={this.state.data}></Content>
      </div>
    );
  }
}

class Content extends React.Component {
  componentWillMount() {
    console.log("Component Will Mount");
  }

  componentDidMount() {
    console.log("Component DID Mount!");
  }

  componentWillReceiveProps(newProps) {
    console.log("Component Will Recieve Props");
  }

  shouldComponentUpdate(newProps, newState) {
    return true;
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Component Will Update");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component Did Update");
  }

  componentWillUnmount() {
    console.log("Component Will Unmount");
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

export default Mylifecycle2;
