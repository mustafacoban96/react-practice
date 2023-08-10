import React, { useEffect, useState } from 'react';


const FunctionComponent = () =>{
    const [counter,setCounter] = useState(0);


    // we write empty array as second parameter
    // to work one times. it means didmount
    // we write state into empty array => didUpdate
    useEffect(() =>{
        console.log("useEffect")
    },[counter])
   
    return (
        <div className='box'>
            <h2>Function Component</h2>
            <p>Function Counter: {counter}</p>
            <button onClick={() => setCounter(counter+1)}>+1</button>
        </div>
    );
};

export default FunctionComponent;