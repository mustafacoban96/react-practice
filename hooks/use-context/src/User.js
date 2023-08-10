import React, { useContext } from "react";
import { UserContext } from "./contexts/UserContext";

export const User = ({user, }) =>{
    const change = useContext(UserContext);
    console.log(change)
    return (
        <div style={{ background: user.color }}>
            <h3>{user.name}</h3>
            <p>Email : {user.email}</p>
            <p>Age: {user.age}</p>
            Color:{" "}
            <input 
            value={user.color}
            onChange={e => change(user.id,e.target.value)}
            />
        </div>
    )
}

export default User;