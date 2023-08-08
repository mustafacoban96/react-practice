import { useSelector } from "react-redux"; // useDispatch -> modify state, useSelector -> get state


export const Home = () => {
    const username = useSelector((state) => state.user.value.username); // .user <- conifgure store <-  user: userSlice.reducer, //// value <- dispatch in store.ts




    return (
        <h1>Home page {username}</h1>
    )
}