import React from 'react';

class NumberPrinter extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      start: '',
      end: '',
      numbers: [],
    };
  }
  
  handleStartChange = (event) => {
    this.setState({ start: event.target.value });
  }
  
  handleEndChange = (event) => {
    this.setState({ end: event.target.value });
  }
  
  handlePrintNumbers = () => {
    const { start, end } = this.state;
    const numbers = [];

    for (let i = parseInt(start ); i <= parseInt(end); i++) {
      numbers.push(i);
    }

    this.setState({ numbers });
  }
  
  render() {
    const { numbers } = this.state;
    
    return (
      <div>
        <input type="text" placeholder="Start" onChange={this.handleStartChange} />
        <input type="text" placeholder="End" onChange={this.handleEndChange} />
        <button onClick={this.handlePrintNumbers}>Print Numbers</button>
        
        {this.state.number.map((result, index ) => {
          <ul>
            <li> {result.i}</li>
          </ul>
        })}
      </div>
    );
  }
}

export default NumberPrinter;
