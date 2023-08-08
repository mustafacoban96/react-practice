import {useState} from 'react';



export const useGetNumber = (initialVal = 0) =>{
    const [state, setState] = useState(initialVal);


    const decrease = () =>{
        setState((num) => num - 1);
    }

    const increase = () =>{
        setState((num) => num +1);
    }

    const restart = () => {
        setState((num) => num = initialVal);
    }


    return {state,decrease,increase,restart};

}