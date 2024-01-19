import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number1: "",
      number2: "",
    };
  }

  Calculate = () => {
    let n1 = parseInt(this.state.number1);
    let n2 = parseInt(this.state.number2);
    let ans = n1 + n2;
    document.getElementById("one").value = ans;
  };

  Calculate2 = () => {
    let n1 = parseInt(this.state.number1);
    let n2 = parseInt(this.state.number2);
    let ans = n1 - n2;
    document.getElementById("one").value = ans;
  };
  Calculate3 = () => {
    let n1 = parseInt(this.state.number1);
    let n2 = parseInt(this.state.number2);
    let ans = n1 * n2;
    document.getElementById("one").value = ans;
  };
  Calculate4 = () => {
    let n1 = parseInt(this.state.number1);
    let n2 = parseInt(this.state.number2);
    let ans = n1 / n2;
    document.getElementById("one").value = ans;
  };

  render() {
    console.log(this.state.Calculate);

    return (
      <div align='center'>
        Enter Value1: <input type="text"
          onChange={(e) => this.setState({ number1: e.target.value })} />

        Enter Value2: <input type="text"
          onChange={(e) => this.setState({ number2: e.target.value })} />
        <br></br>
        <br></br>
        <button onClick={this.Calculate}>Plus</button>
        <button onClick={this.Calculate2}>sub</button>
        <button onClick={this.Calculate3}>Multi</button>
        <button onClick={this.Calculate4}>Division</button>

        <div>
        <br></br>
          Answer: <input type="text" id="one" />
        </div>
      </div>
    );
  }
}
export default Calculator;
