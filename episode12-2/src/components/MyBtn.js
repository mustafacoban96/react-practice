
import { useGetNumber } from "../useGetNumber"

export const MyBtn = () =>{
    const {state:number, decrease,increase,restart} = useGetNumber();

    return (
        <div>
            <p>{number}</p>
            <button onClick={increase}>increase</button>
            <button onClick={decrease}>decrease</button>
            <button onClick={restart}>restart</button>
        </div>
    )
}