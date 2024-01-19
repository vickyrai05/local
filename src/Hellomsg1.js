import React from 'react'

function Hellomsg1(props)
{
    return(
        console.log(props),
        <>
        <h1>Hello {props.name}</h1>
        <h1>Age {props.age}</h1>
        </>
    );
    
}


export default Hellomsg1;