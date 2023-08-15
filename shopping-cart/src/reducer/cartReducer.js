import { data } from "../data";


const initState = {
    items:data,
    addedItems:[],
    total: 0

}

const cartReducer = (state = initState,action) =>{
    return state;
}

export default cartReducer;
