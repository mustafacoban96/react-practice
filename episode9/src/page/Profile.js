import { ChangeProfile } from "../components/ChangeProfile"
import {useContext} from 'react';
import {AppContext} from '../App';
export const Profile = () => {
    const {userName } = useContext(AppContext);
    return (

        <div>
            User name is {userName}
            {/* <ChangeProfile setUserName = {props.setUserName}/> */}
            <ChangeProfile/>
        </div>
    )
}