import {auth,provider} from "../config/firebase";
import {signInWithPopup} from "firebase/auth";



export const Login = () =>{
    const signWithGoogle = async () =>{
        const result = await signInWithPopup(auth,provider);
        console.log(result)
    }

    return (
        <div>
            Sign In With Google To Continue
            <button onClick={signWithGoogle}>Sign In with Google</button>
        </div>
    )
}