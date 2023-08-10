import React, { useContext } from "react";
import User from "./User";
import { UserContext } from "./contexts/UserContext";

export const UserList = ({users}) =>{
    const change = useContext(UserContext);
    console.log(change)
    return (
        <>
            <h2>User List</h2>
            {users.map(user => (
                <User key={user.name} user={user} changeColor={change} />
            ))}
        </>
    )
}

export default UserList;