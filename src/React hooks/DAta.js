import React from "react";

class DAta extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      a: 100,
      b: 50,
      header: "",
    };

    this.show = this.show.bind(this);
    this.show1 = this.show1.bind(this);
    this.show2 = this.show2.bind(this);
    this.show3 = this.show3.bind(this);
  }

  show() {

    const headerValue = this.state.a + this.state.b;
    this.setState({ header: headerValue });
  }

  show1() {
    const headerValue = this.state.a - this.state.b;
    this.setState({ header: headerValue });

  }
  show2() {
    const headerValue = this.state.a * this.state.b;
    this.setState({ header: headerValue });

  }
  show3() {
    const headerValue = this.state.a / this.state.b;
    this.setState({ header: headerValue });

  }
  render() {
    return (
      <div align="center">
        <h2>{this.state.a}</h2>
        <h2>{this.state.b}</h2>

        <button onClick={this.show}>Plus</button>
        <button onClick={this.show1}>Sub</button>
        <button onClick={this.show2}>Multiple</button>
        <button onClick={this.show3}>Devide</button>
        <h1>{this.state.header}</h1>
      </div>
    );
  }
}

export default DAta;
