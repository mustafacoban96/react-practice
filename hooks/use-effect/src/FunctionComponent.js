import React, { useState } from 'react';


const FunctionComponent = () =>{
    const [counter,setCounter] = useState(0);
    console.log("funct comp: " ,counter)
    return (
        <div className='box'>
            <h2>Function Component</h2>
            <p>Function Counter: {counter}</p>
            <button onClick={() => setCounter(counter+1)}>+1</button>
        </div>
    );
};

export default FunctionComponent;