import {useEffect, useState,useMemo} from "react";



const App2 = () =>{
    const [name,setName] = useState("");
    const [state,setState] = useState({
        name: "",
        selected: false,
        city:"",
        age:20
    });

    


    //we prevent re-rendered a component thanks to useMemo....
    const user = useMemo(() =>({
        name:state.name,
        selected: state.selected,
    }),[state.name,state.selected]
    )

    useEffect(() =>{
        console.log("The state has changed, useEffect runs!");
    },[user])

    const handleAdd = () => {
        setState((prev) => ({...prev,name}));
    };

    const handleSelect = () =>{
        setState((prev) => ({...prev,selected:!state.selected}));
    }


    return (
        <div>
            <input type="text" onChange={(e) => setName(e.target.value)}/>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleSelect}>Select</button>
            {`{
                name: ${state.name},
                selected: ${state.selected.toString()}
            }`}
        </div>
    )
}

export default App2