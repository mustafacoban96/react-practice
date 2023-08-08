import {useState} from "react";
import {login,logout} from "../store";
import { useDispatch,useSelector } from "react-redux"; // useDispatch -> modify state, useSelector -> get state


export const Login = () => {
    const [newUsername, setNewUsername] = useState("");

    const dispatch = useDispatch();
    const username = useSelector((state) => state.user.value.username); // .user <- conifgure store <-  user: userSlice.reducer, //// value <- dispatch in store.ts
    return (
        <h1>
            {username}
           
            <input onChange={(e) => setNewUsername(e.target.value)}/>
            <button onClick={() => dispatch(login({username: newUsername}))}>Submit Login</button>
            <button onClick={() => dispatch(logout())}>Logout</button>
        </h1>
    )
}