import React from 'react';
import axios from 'axios';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            data: [],
            userdetails: [],
            result: [],
        }
        this.addFormData = this.addFormData.bind(this);
        this.updateformData = this.updateformData.bind(this);
    }

    addFormData() {
        let formdata = new FormData();
        formdata.append('name', this.state.name);
        formdata.append('email', this.state.email);

        axios.post('http://localhost/react/data.php', formdata
        ).then(response => {
            axios.post('http://localhost/react/data.php').then(response => {
                this.setState({ data: response.data });
            });
            alert("Record Inserted");
        })

    }

    componentDidMount() {
        axios.get('http://localhost/react/data.php')
            .then(response => {
                this.setState({ data: response.data });
            });
    }

    deleteuser(userid) {
        let formdata = new FormData();
        formdata.append('deleteid', userid);
        axios.post('http://localhost/react/data.php', formdata
        ).then(response => {
            axios.post('http://localhost/react/data.php').then(response => {
                this.setState({ data: response.data });
            });
            alert("User Deleted")
        }
        );
    }

    edituser(userid) {
        let formdata = new FormData();
        formdata.append('userid', userid);
        axios.post('http://localhost/react/data.php', formdata
        ).then(response => {
            this.setState({ userdetails: response.data[0] });
            this.setState({ id: response.data[0].id });
            this.setState({ name: response.data[0].name });
            this.setState({ email: response.data[0].email });
        }
        );
    }

    updateformData() {
        let formdata = new FormData();
        formdata.append('updateid', this.state.id);
        formdata.append('updatename', this.state.name);
        formdata.append('updateemail', this.state.email);

        axios.post('http://localhost/react/updatedata.php', formdata
        ).then(response => {
            axios.get('http://localhost/react/updatedata.php')
                .then(response => {
                    this.setState({ data: response.data });
                });
            alert('User Updated')
        }
        );
    }

    render() {
        return (

            <div>
                <center>
                    <h1><b>ADD STUDENT DATA</b></h1>
                    <form>
                        <input type="hidden" id="Username"
                            placeholder="id" ref="myUsername" defaultValue={this.state.userdetails.id} />

                        <input type="text" id="Username"
                            placeholder="Enter Username" ref="myUsername" defaultValue={this.state.userdetails.name}
                            onChange={event => this.setState({ name: event.target.value })} />
                        <input type="email" id="Email" placeholder="Enter email" ref="myEmail" defaultValue={this.state.userdetails.email} onChange={event => this.setState({ email: event.target.value })} />
                        <button type="submit" onClick={this.addFormData}>Add</button>
                        <button type="submit" onClick={this.updateformData}>Update</button><br /><br />
                    </form>

                    <input type="text" onChange={event => this.setState({ name: event.target.value })} />
                    <button type="submit" onClick={this.addFormData}>Search</button>

                    <h3><b> DATA OF STUDENT</b></h3>
                    <table border="1" width="50%">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th colSpan={2}>Action</th>
                        </tr>
                        {this.state.data.map((result) => {
                            return (
                                <tr>
                                    <td>{result.id}</td>
                                    <td>{result.name}</td>
                                    <td>{result.email}</td>
                                    <td><button onClick={event => { this.deleteuser(result.id) }}>Delete</button></td>
                                    <td><button onClick={event => { this.edituser(result.id) }}>Edit</button></td>
                                </tr>
                            )
                        })}
                    </table>
                </center>
            </div>
        )
    };
}
export default Main;