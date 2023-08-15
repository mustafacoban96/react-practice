import { data } from "../data";


const initState = {
    items:data,
    addedItems:[],
    total: 0

}

export const cartReducer = (state = initState,action) =>{
    return state;
}

