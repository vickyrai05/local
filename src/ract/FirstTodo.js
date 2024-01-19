import React, { useEffect } from 'react'
import { useState } from 'react'

function FirstTodo() {
  const [name, setName] = useState("")
  const [task, setTask] = useState([])

  const onChangehandler = (e) => {
    setName(e.target.value.toUpperCase())
  }

  const handlleSubmission = (e) => {
    e.preventDefault();
    const data = name;
    setTask([...task, data]); 
    setName('');
  }
 useEffect(()=>{
    console.log("i,m useeffect")
 })
  return (
    <div>
      <form align='center' onSubmit={handlleSubmission}>
        <label>Enter Name : </label>
        <input type='text' value={name} onChange={onChangehandler} />
        <br></br>
        <br></br>
        <input type='submit' value='submit' />
      </form>
      
    </div>
  )
}

export default FirstTodo
