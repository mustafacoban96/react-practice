import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    user:null,
    token:null,
    setUser: () =>{},
    setToken: () => {}
});


export const ContextProvider = ({children}) =>{
    const [user,setUser] = useState({});
    const [token, _setToken] = useState(localStorage.getItem('ACCESS_TOKEN'));

    const setToken = (token) =>{
        _setToken(token);
        // local storage config
        if(token){
            localStorage.setItem('ACCESS_TOKEN',token);
        }  
        else{
            localStorage.removeItem('ACCESS_TOKEN')
        }

    }
    return(
        <StateContext value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext>
    )
}


export const useStateContext = () => useContext(StateContext)