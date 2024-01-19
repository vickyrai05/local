import React from 'react';
import axios from 'axios';


class Phpdata1 extends React.Component
{
	constructor(props)
	{
		super(props);
		this.state={
			data:[]
		}
		this.addData=this.addData.bind(this);
	}
	addData(evt)
	{
		evt.preventDefault ();
		let fd = new FormData();
		fd.append('username',this.state.name);
        fd.append('english',this.state.english);
        fd.append('math',this.state.math);
		fd.append('physics',this.state.physics);
		fd.append('chemistry',this.state.chemistry);
		axios.post('http://localhost/php/phpdata1.php',fd).then
		(res=>{
			alert("record inserted")
		})
		.catch(function (res){
			console.log(res)
		});
	}
	render(){
		return(
			<div>
				<center>
					<from>
						Enter Name : <input type="text" onChange={e => this.setState({name: e.target.value}) }/>
						<br/><br/>
						Enter English  Marks : <input type="number" onChange={e => this.setState({english: e.target.value}) }/>
						<br/><br/>
                        Enter Math Marks: <input type="number" onChange={e => this.setState({math: e.target.value}) }/>
						<br/><br/>
						Enter Physics Marks: <input type="number" onChange={e => this.setState({physics: e.target.value}) }/>
						<br/><br/>
						Enter chemistry Marks: <input type="number" onChange={e => this.setState({chemistry: e.target.value}) }/>
						<br/><br/>
						<button type="submit" onClick={this.addData}>Add</button>
					</from>
				</center>
			</div>
			)
	};	
}
export default Phpdata1;