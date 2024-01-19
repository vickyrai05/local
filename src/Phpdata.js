import React from "react";
import Swal from "sweetalert2";
import axios from "axios";

class Phpdata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.addData = this.addData.bind(this);
  }
  addData(evt) {
    evt.preventDefault();
    let fd = new FormData();
    fd.append("username", this.state.name);
    fd.append("email", this.state.email);
    axios
      .post("http://localhost/react/phpdata.php", fd)
      .then((res) => {
        Swal.fire({
          title: "Add Data Successful",
          text: res.data.data,
          type: "success",
        });
      })
      .catch(function (res) {
        console.log(res);
      });
  }
  render() {
    return (
      <div>
        <center>
          <from>
            Enter Name :{" "}
            <input
              type="text"
              onChange={(e) => this.setState({ name: e.target.value })}
            />
            <br />
            <br />
            Enter Email :{" "}
            <input
              type="email"
              onChange={(e) => this.setState({ email: e.target.value })}
            />
            <br />
            <br />
            <button type="submit" onClick={this.addData}>
              Add
            </button>
          </from>
        </center>
      </div>
    );
  }
}
export default Phpdata;
