import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'



function Effectfunction() {

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);
    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count])

    return (
        <div>
            <h1>Number "{count}"</h1>
            <button type='button' onClick={() => setCount((count) => count + 1)}>+</button>
            <br></br>
            <h2>Calculation:{calculation}</h2>
        </div>
    )
}
export default Effectfunction;