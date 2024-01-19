
import {React,useState} from "react"

const Usestate = () => {
  const[data,setdata] = useState(0)
  return (
    <div align="center">
    
      <h1>Usestate hook</h1>
      <h2>{data}</h2>
      <button onClick={()=>setdata(data+2)}>update data</button>
    </div>
  )
}

export default Usestate;
