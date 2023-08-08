import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const Home = () =>{
    const {
        data: catData, 
        isLoading,
        isError,
        refetch
    } = useQuery(["cat"], () => {
        return Axios.get("https://catfact.ninja/fact").then((res) => res.data)
        
    }); // array includes unique array

    if(isError){
        return <h3>There was an error</h3>
    }
    if (isLoading){
       
        return <h1>Loading...</h1>
    }
   
    return (
        <div>
            <h2>This is a home page <p>{catData?.fact}</p></h2>
            <button onClick={refetch}>Update</button>
        </div>
        
    )
}