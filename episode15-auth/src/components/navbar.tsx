import { Link } from "react-router-dom";
import {auth} from "../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import {signOut} from 'firebase/auth';


export const Navbar = () =>{
    const [user] = useAuthState(auth); // update user automatically.

    const signUserOut = async () =>{
        await signOut(auth)
    }
    return (
        <div className="nav-bar">
            <Link to="/" >Main</Link>
            <Link to="/login" >Login</Link>
            { user && (
                <>
                <p>{user?.displayName}</p>
                <img src={user?.photoURL || ""} width="50" height="50"/>
                <button onClick={signUserOut}>Logout</button>
                </>
            )}
        </div>
    )
}