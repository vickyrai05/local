import { FormControl, FormGroup, InputLabel,Input,Typography,Button,styled} from '@mui/material';
import React, { useState } from 'react'

import { addUser } from '../database_json/Api';
import { useNavigate } from 'react-router-dom';

const Container = styled(FormGroup)`
width:50%;
margin:3% auto 0 auto;
& > div{
    margin-top:20px;
}
`
const initialValues={
    name:'',
    email:'',
    age:','
}

function Adduser() {

 const [user,setUser]= useState(initialValues)
 const navigate = useNavigate();

const onVolumeChange=(e)=>{
    console.log(e.target.name,e.target.value);
    setUser({...user,[e.target.name]:e.target.value.toUpperCase()})
    console.log(user);
}
const addUserDetails= async ()=>{
await addUser(user);
navigate('/all');
}

  return (
   <Container>
   <Typography variant='h4'>Add User</Typography>
     <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onVolumeChange(e)} name='name'/>
     </FormControl>
     <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onVolumeChange(e)} name='email'/>
     </FormControl>
     <FormControl>
        <InputLabel>Age</InputLabel>
        <Input onChange={(e)=>onVolumeChange(e)} name='age'/>
     </FormControl>
     <FormControl>
        <Button variant='contained' onClick={()=>addUserDetails()}>Add User</Button>
     </FormControl>
     
   </Container>
  )
}

export default Adduser;
