import { useEffect,useState } from "react";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";

const User = () =>{
    const [user,setUser] = useState({});
    const id = useLocation().pathname.split('/')[2];

    useEffect(() =>{
        // const controller = new AbortController();
        // const signal = controller.signal;
        // console.log(signal);

        const cancelToken = axios.CancelToken.source()

        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`,{cancelToken:cancelToken.token})
        .then((res) =>{
            setUser(res.data);
        }).catch(err =>{
            if(axios.isCancel(err)){
                console.log("cancelled");
            }
            else{
                //todo:handle error
            }
        });
        return () =>{
            cancelToken.cancel();
        }
        // // let unsubscribed = false;
        // fetch(`https://jsonplaceholder.typicode.com/users/${id}`,signal)
        // .then((res) => res.json())
        // .then((data) =>{
        //     // if(!unsubscribed){
        //     //     setUser(data);
        //     // } 
        //     setUser(data);
        // }).catch(err =>{
        //     if(err.name === "AbortError"){
        //         console.log("cancelled!");
        //     }
        //     else{
        //         //todo:handle error
        //     }
        // });

        // // return () =>{
        // //     console.log("cancelled!");
        // //     unsubscribed = true;
        // // }

        // return () =>{
        //     console.log("cancelled!");
        //     controller.abort();
        // }
    },[id]);



    return (
        <div>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <Link to="/users/1">fetch1</Link>
            <Link to="/users/2">fetch2</Link>
            <Link to="/users/3">fetch3</Link>
        </div>
    )
}





export default User;