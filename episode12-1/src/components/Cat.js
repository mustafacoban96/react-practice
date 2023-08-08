// import {useQuery} from "@tanstack/react-query";
// import Axios from "axios";

import { useGetCat } from "../useGetCat"

export const Cat = () => {
    // const { data: catData } = useQuery(["cat"] ,async () =>{
    //     return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
    // }); i move useGetCat

    const { data, isCatLoading, refetchData } = useGetCat();
    if(isCatLoading) return <h1>Loading....</h1>

    return (
        <div>
            <button onClick={refetchData}>refetch</button>
            <h1>{data?.fact}</h1>
        </div>
    )
}