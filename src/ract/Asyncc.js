import React from 'react'
import { useEffect } from 'react';

function Asyncc() {

    useEffect(()=>{
        const fetchData=()=>{
            console.log("Vicky");
        }
   fetchData();
    },[])


  return (
    <div>APP</div>
  )
}

export default Asyncc;