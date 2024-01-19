import React from 'react';
import { useState } from 'react';
import Swal from "sweetalert2";

export default function Controlfunction() {
    const [name,setname] = useState("")
    const handlesubmission =(e)=>{
        e.preventDefault()
        console.log(e.target[0].value);
      //alert(e.target[0].value);
    Swal.fire(e.target[0].value);
    }
  return (
    <div>
    <center>
    <form onSubmit={handlesubmission} >
      <label>Enter Name</label>
      <input type='text' value={name} onChange={(e)=>setname(e.target.value.toUpperCase().substring(0,10).replace("&","="))}/>
      <br></br>
      <br></br>
     <input type="submit" value="Submit" />
    </form>
    </center>
    </div>
  )
}
