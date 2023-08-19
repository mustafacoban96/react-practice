import { useEffect, useState } from "react";



const App4 = () =>{

    const [toggle,setToggle] = useState(false);

    useEffect(() =>{
        console.log('effect runs');

        return () =>{
            console.log("effect clear....");
        }
    })

    return (
        <div>
            <button onClick={() => setToggle(!toggle)}>Toggle</button>
        </div>
    )
}



export default App4;