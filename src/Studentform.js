import React from 'react';
import axios from 'axios';



export class Studentform extends React.Component {
    constructor(props) {
      super(props)
    
      this.state = {
            id: '',
            name: '',
            email: '',
            data: [],
            userdetails: [],
            result: [],
       
      }
      this.addFormData = this.addFormData.bind(this);
      this.updateData = this.updateData.bind(this);
      this.searchData = this.searchData.bind(this)
    }
    addFormData(event) {
      let formdata = new FormData();
      formdata.append('name', this.state.name);
      formdata.append('email', this.state.email);

      axios.post('http://localhost/react/student.php', formdata
      ).then(response=> {
          axios.post('http://localhost/react/student.php').then(response => {
              this.setState({ data: response.data });
          });
          
          alert("Record Inserted");
      })

  }
    componentDidMount(){
      axios.get('http://localhost/react/student.php').then(response=>{
        
        this.setState({data:response.data });
      });
    }
    deletedata(user) {
      let fd = new FormData();
      fd.append('deleteid',user);
      axios.post('http://localhost/react/student.php',fd)
      .then(response=>{
         axios.post('http://localhost/react/student.php').then(response=>{
           this.setState({data: response.data});
         })
        alert('DELETE DATA');
      })  
     
  }
  edituser(userid) {
    console.log(userid);
    let formdata = new FormData();
    formdata.append('userid', userid);
    axios.post('http://localhost/react/student.php', formdata
    ).then(response => {
        console.log();
        this.setState({ userdetails: response.data[0] });
        this.setState({ id: response.data[0].id });
        this.setState({ name: response.data[0].name });
        this.setState({ email: response.data[0].email });

    }
    );
    console.log(userid);
}

updateData() {
  let formdata = new FormData();
  formdata.append('updateid', this.state.id);
  formdata.append('updatename', this.state.name);
  formdata.append('updateemail', this.state.email);

  axios.post('http://localhost/react/studentupdate.php', formdata
  ).then(response => {
      axios.get('http://localhost/react/studentupdate.php')
          .then(response => {
              this.setState({ data: response.data });
          });
      alert('User Updated')
  }
  );
}
searchData(){
  let formdata = new FormData();
  formdata.append('search', this.state.search);
  axios.post('http://localhost/react/datasearch.php',formdata).then( result => {
    this.setState({data: result.data})
  })
};
  render() {
    return (
      <div>
         <center>
                    <h1><b>ADD STUDENT DATA</b></h1>
                    <form>
                    <input type="hidden" id="Username"
                            placeholder="id" ref="myUsername"  defaultValue={this.state.userdetails.id} />

                        <input type="text" id="Username"
                            placeholder="Enter Username" ref="myUsername" defaultValue={this.state.userdetails.name}
                            onChange={event => this.setState({ name: event.target.value })} />
                            
                        <input type="email" id="Email" placeholder="Enter email" ref="myEmail" defaultValue={this.state.userdetails.email} onChange={event => this.setState({ email: event.target.value })} />
                        <button type="submit" onClick={this.addFormData}>Add</button>
                        <button type="submit" onClick={this.updateData}>Update</button><br /><br />
         </form>
         <input type="text" onChange={event => this.setState({ search: event.target.value })} />
                    <button type="submit" onClick={this.searchData}>Search</button>
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
                        {this.state.data.map((result,id) => {
                            return (
                                <tbody key={id}>
                                <tr>
                              
                                    <td>{result.id}</td>
                                    <td>{result.name}</td>
                                    <td>{result.email}</td>
                                    <td><button onClick={event => { this.deletedata(result.id) }}>Delete</button></td>
                                    <td><button onClick={event => { this.edituser(result.id) }}>Edit</button></td>
                                   
                                </tr>
                                </tbody>
                            )
                        })}
                    </table>
         </center>
      </div>
    )
  }
}

export default Studentform
