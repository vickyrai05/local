import React from 'react';
import axios from 'axios';


class Phpdata extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            name: '',
            email: '',
            data: [],
            userdetails: [],
        
        }
        this.addFormData = this.addFormData.bind(this);
        this.updateformData = this.updateformData.bind(this);
    }

    addFormData(event) {
        let formdata = new FormData();
        formdata.append('name', this.state.name);
        formdata.append('email', this.state.email);

        axios.post('', formdata
        ).then(response => {
            axios.post('').then(response => {
                // console.log(response);
                this.setState({ data: response.data });
            });
            console.log(1,response);
            alert("Record Inserted");
        })

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
                        
                    </form>

                   
                </center>
            </div>
        )
    };
}
export default Phpdata;