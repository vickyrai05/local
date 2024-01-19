import { React,useState } from "react";

function Id(){
    const [Id,setId]=useState({
        name :'Aman',
        Age :'20',
        Email:'Amann@547gamil.com'
    })

    return(
      <>
        <h1>My {Id.name}</h1>
        <h2>{Id.Age}</h2>
        <h3>{Id.Email}</h3>
      </>
    )
}
export default Id;
