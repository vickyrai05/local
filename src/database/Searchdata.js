import React from 'react';
import axios from 'axios';

class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search:'',
            data: []
        }
        this.searchData = this.searchData.bind(this)
    }
    searchData(){
		let formdata = new FormData();
		formdata.append('search', this.state.search);
		axios.post('http://localhost/react/searchdata.php',formdata).then( result => {
			this.setState({data: result.data})
		})
	};
	
    componentDidMount() {
        axios.get('http://localhost/react/data.php')
            .then(result => {
                this.setState({ data: result.data });
            });
    }

    render() {
        return (

            <div>
                <center>
                    <h1><b>SEARCH STUDENT DATA</b></h1>

                    <input type="text" onChange={event => this.setState({ search: event.target.value })} />
                    <button type="submit" onClick={this.searchData}>Search</button>

                    <h3><b> DATA OF STUDENT</b></h3>
                    <table border="1" width="50%">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                        </tr>
                        {this.state.data.map((result) => {
                            return (
                                <tr>
                                    <td>{result.id}</td>
                                    <td>{result.name}</td>
                                    <td>{result.email}</td>
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