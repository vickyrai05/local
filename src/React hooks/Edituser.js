import { FormControl, FormGroup, InputLabel,Input,Typography,Button,styled} from '@mui/material';
import React, { useState } from 'react'

import { getUser,editUser} from '../database_json/Api';
import { useNavigate,useParams } from 'react-router-dom';
import { useEffect } from 'react';

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

const Edituser = () => {

 const [user,setUser]= useState(initialValues)
 const navigate = useNavigate();
 const{id}=useParams();

 useEffect(()=>{
   getUserData();
},[])

const getUserData = async()=>{
   let response = await getUser(id);
   console.log(response);
   setUser(response.data);
}
const onVolumeChange=(e)=>{
    console.log(e.target.name,e.target.value);
    setUser({...user,[e.target.name]:e.target.value})
    console.log(user);
}
const addUserDetails= async ()=>{
await editUser(user,id);
navigate('/all');
}

  return (
   <Container>
   <Typography variant='h4'>Edit User</Typography>
     <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e)=>onVolumeChange(e)} name='name' value={user.name}/>
     </FormControl>
     <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e)=>onVolumeChange(e)} name='email' value={user.email}/>
     </FormControl>
     <FormControl>
        <InputLabel>Age</InputLabel>
        <Input onChange={(e)=>onVolumeChange(e)} name='age' value={user.age}/>
     </FormControl>
     <FormControl>
        <Button variant='contained' onClick={()=>addUserDetails()}>EditUser</Button>
     </FormControl>
     
   </Container>
  )
}

export default Edituser;
