import { data } from "../data";

const INITIAL_STATE = {
    bookList:data,
    cart:[],
    
}


export const reducer = (state=INITIAL_STATE,action)=>{
    // ->>>>> addToCart dispatch

    switch(action.type){
        case "ADD_TO_CART":
            return {...state, cart:[...state.cart,action.payload]} //-->>> product compo
        case "INCREASE_PRODUCT":
            let inc = state.bookList.find(product => product.id === action.payload);
            inc.pieces++;
            return {...state, cart:[...state.cart]}
        case "DECREASE_PRODUCT":
            let dec = state.bookList.find(product => product.id === action.payload);
            if(dec.pieces > 0){
                dec.pieces--
            }
            else{
                dec.pieces = 0;
            }
            return {...state, cart:[...state.cart]}
        default:
            return state;
    }
   
}