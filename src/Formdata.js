import React from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

class Formdata extends React.Component {
  constructor() {
    super()

    this.state = {
      data: [],
      userdetails: [],
      result: [],
    };
    this.addData = this.addData.bind(this)
  }
  addData(event) {
    event.preventDefault();
    let fd = new FormData();
    fd.append("name", this.state.name);
    fd.append("email", this.state.email);

    axios.post("http://localhost/php/Formdata.php", fd).then((res) => {
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
    axios.get("https://jsonplaceholder.typicode.com/users").then(res => {
      this.setState({ data: res.data });
    });
  }
  edituser(result) {
   
   console.log(result);
        this.setState({ id: result.id });
        this.setState({ name:result .name });
        this.setState({ email: result.email });
  
}
updateformData() {
  let formdata = new FormData();
  formdata.append('updateid', this.state.id);
  formdata.append('updatename', this.state.name);
  formdata.append('updateemail', this.state.email);

  axios.post('https://jsonplaceholder.typicode.com/users', formdata
  ).then(response => {
      axios.get('https://jsonplaceholder.typicode.com/users')
          .then(response => {
              this.setState({ data: response.data });
          });
      alert('User Updated')
  }
  );
}
   deleteuser(index) {
   
     this.state.data.splice(index,1);
    this.setState({
       data:this.state.data
    })
    console.log(index,this.state.data);
 }

  render() {
    return (
      <div>
        <center>
          <h1><a><b>ADD STUDENT DATA</b></a></h1>

          <form>
            <label>Name : </label>
            <input type="text" placeholder="Enter Name" onChange={event => this.setState({ name: event.target.value })} />
            <br></br>
            <br></br>
            <label>enter email : </label>
            <input type="email" placeholder="Enter email " onChange={event => this.setState({ email: event.target.value })} />
            <br></br>
            <br></br>
            <button type='submit' onClick={this.addData}>Submit</button>
          </form>

          <h3><b> DATA OF STUDENT</b></h3>
          <table border="1" width="50%">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th colSpan={2}>Action</th>
              </tr>
            </thead>
            {this.state.data.map((result, index) => {
              return (
                <tbody key={index}>
                  <tr >
                    <td>{result.id}</td>
                    <td>{result.name}</td>
                    <td>{result.email}</td>
                    <td><button onClick={event => { this.deleteuser(index) }}>Delete</button></td>
                    <td><button onClick={event => { this.edituser(result) }}>Edit</button></td>
                  </tr>
                </tbody>
              );
            })}

          </table>
        </center>
      </div>
    )
  }
}

export default Formdata;
