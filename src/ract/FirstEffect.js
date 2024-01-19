import React, { useEffect } from 'react'
import Axios from 'axios';
import { useState } from 'react';


const postUrl = 'https://jsonplaceholder.typicode.com/posts'



function FirstEffect() {
    const [data, setData] = useState([])

    useEffect(() => {
        Axios.get(postUrl).then((response) => {

            setData(response.data);

        })
    }, )
    return (
        
        <>
            {
                data.map((item, index) => {
                    const { id, title, body } = item;
                    return (
                        <div align='center' key={index} >
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

export default FirstEffect
