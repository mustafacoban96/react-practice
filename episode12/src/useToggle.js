
import {useState ,useEffect,useContext} from "react";

export const useToggle = (initialVal = false) =>{
    const[state,setState] = useState(initialVal);

    const toggle = () =>{
        setState((prev) => !prev);
    };

    // return [state,toggle] // array
    return {state,toggle} // object
}