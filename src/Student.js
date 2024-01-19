import React from 'react';

class Student extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: "",
    };
  }

  render() {
    let a = parseInt(this.state.header); 
    let sum = [];

    while (a <= 10) {
      sum.push(a);
      a++;
    }

    return (
      <div>
        Enter Value1 <input
          type="text"
          onChange={(e) => this.setState({ header: e.target.value })}
        />
        <div>
          <ul>
            {sum.map((num) => (
              <li>{num}</li>
            ))}

          </ul>
   {sum}
        </div>
        
      </div>
    );
  }
}

export default Student;
