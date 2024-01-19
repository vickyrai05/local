import React, { useEffect, useState } from 'react';
import Axios from 'axios';

const baseUrl="https://jsonplaceholder.typicode.com/posts"; 

function Effect() {
  
      const[data,setData]=useState([]);

       useEffect(()=>{
           Axios.get(baseUrl).then((response)=>{
                setData(response.data);
                 console.log(response);
           });
           
       },[])
  
  return (
    <>
    {
        data.map((item,index)=>{
      const {id,title,body}=item;
      return(
        <div  align='center'key={index} >
            <h1>{id}</h1>
            <h2>{title}</h2>
            <h3>{body}</h3>
        </div>
      )
    })
    }
    </>
  )
}

export default Effect
