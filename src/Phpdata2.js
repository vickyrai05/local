import React from "react";
import axios from "axios";
import Swal from "sweetalert2";

class Phpdata2 extends React.Component {
  constructor() {
    super();

    this.state = {
      data:[],
      result:[],
    };
    this.addData = this.addData.bind(this);
  }



  addData(event){
     event.preventDefault();
    let fd = new FormData();
    fd.append("name", this.state.name);
    fd.append("qualification", this.state.qualification);
    fd.append("hobbies", this.state.hobbies);
    fd.append("country", this.state.country);
    axios.post("http://localhost/php/Phpdata3.php",fd)
      .then((res) => {
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Your Detail has been saved',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(function (res) {
        console.log(res);
      });
  }
  componentDidMount() {
    axios.get('http://localhost/php/dataget.php').then(response => {
            this.setState({ data: response.data });
        });
        console.log('this is mount')
        
  }

  render() {
    const{data}= this.state;
    console.log(1,data);
    return (
      <div>
      <center>
        <form>
          <label>Name : </label>
          <input type="text" placeholder="Enter Name" onChange={event => this.setState({ name: event.target.value })} />
          <br></br>
         
          <br></br>
          Qualification : <input type="radio" name="r"  value="MCA"onChange={event => this.setState({ qualification: event.target.value })}/>
          MCA
          <input type="radio" name="r" value="BCA" onChange={event => this.setState({ qualification: event.target.value })}/>
          BCA
          <br></br>
          
          <br></br>
          Hobbies : <input type="checkbox" name="h1" value="Reading" onChange={event => this.setState({ hobbies: event.target.value })}/>
          Reading
          <input type="checkbox" name="h2" value="Singing"onChange={event => this.setState({ hobbies: event.target.value })}/>
          Singing
          <input type="checkbox" name="h3" value="Cricket"onChange={event => this.setState({ hobbies: event.target.value })}/>
          Cricket
          <br></br>
          <br></br>
          <select name="Country" onChange={event => this.setState({ country: event.target.value })}>
            <option value="india">india</option>
            <option value="Canada">Canada</option>
            <option value="China">China</option>
            <option value="Nepal">Nepal</option>
          </select>
          <br></br>
          <br></br>
          <button type="submit"  onClick={this.addData}>Submit</button>
        </form>
        
        <h3><b> DATA OF STUDENT</b></h3>
                    <table border="1" width="50%">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Qaulification</th>
                            <th>hobbies</th>
                            <th>country</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                        </thead>
                      
                        {this.state.data.map((result, index ) => {
                            return (
                              <tbody key={index }>
                                <tr >
                                <td>{index+1}</td>
                                <td>{result.Name}</td>
                                <td>{result.Qualification}</td>
                                <td>{result.Hobbies}</td>
                                <td>{result.Country}</td>
                                <td>Action</td>
                                </tr>
                                </tbody>
                            );
                        })}
                       
                    </table>
        </center>
      </div>
    );
  }
}

export default Phpdata2;
