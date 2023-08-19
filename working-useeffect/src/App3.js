import { useEffect, useState } from "react";


const App3 = () =>{
    const [number,setNumber] = useState(0);


    // useEffect(() =>{
    //     setInterval(() =>{
    //         setNumber(number +1);
    //     },1000);
    // },[])

    useEffect(() =>{
        console.log('works!!!!!!!!')
        setInterval(() =>{
            setNumber((prev) => prev +1);
        },1000);
    },[])


    return (
        <div>{number}</div>
    )
}

export default App3;