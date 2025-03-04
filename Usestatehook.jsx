

import React, { useState } from 'react'

const Usestatehook = ()=> {   

    const [value, setValue]= useState(0); //syntax for useState //0 is the initial value

    

    const increment = () => {
        setValue(value+1);
        
    }
    const decrement = () => {
        setValue(value-1);
    }

    if( value===5){
        setValue(98);
    }

    else if(value===95){
        setValue(0)
    }



    return (
        <div>
            <h1>{value}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    )
}

export default Usestatehook

