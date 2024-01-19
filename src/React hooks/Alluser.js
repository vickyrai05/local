import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'

import { getUsers, deleteUser } from '../database_json/Api'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const StyledTable = styled(Table)`
width: 80%;
margin: 40px auto;
`;
const Thead = styled(TableRow)`
background : #000;


& > th {
 
    color :#fff;
    font-size:20px;
}
`
const TBody = styled(TableRow)`

& > td {
    font-size:20px;
}
`

const Alluser = () => {
    const [users, setUsers] = useState([])


    useEffect(() => {
        getUserDetails();
    }, [])

    const getUserDetails = async () => {
        let response = await getUsers();
        console.log(response);
        setUsers(response.data);
    }
     const deleteUserData = async (id)=>{
        await deleteUser(id);
        getUserDetails();
        
     }
    return (
        <StyledTable>
            <TableHead>
                <Thead>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Age</TableCell>
                </Thead>
            </TableHead>
            <TableBody>
                {
                    users.map((user,index) => (
                        <TBody key={index}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.age}</TableCell>
                            <TableCell>
                                <Button variant='contained' style={{ marginRight: 15}} component={Link} to={`/edit/${user.id}`}>Edit</Button>
                                <Button variant='contained' color='secondary' onClick={() => deleteUserData(user.id)}>Delete</Button>
                            </TableCell>
                        </TBody>
                    ))
                }
            </TableBody>
        </StyledTable>
    )
}

export default Alluser
