import { data } from "../data";

const INITIAL_STATE = {
    bookList:data,
    cart:[],
    totalPrice:0
    
}


export const reducer = (state=INITIAL_STATE,action)=>{
    // ->>>>> addToCart dispatch

    switch(action.type){
        case "ADD_TO_CART":
            state.totalPrice += action.payload.price
            return {...state, cart:[...state.cart,action.payload],totalPrice:state.totalPrice} //-->>> product compo
        case "INCREASE_PRODUCT":
            let inc = state.bookList.find(product => product.id === action.payload);
            inc.pieces++;
            state.totalPrice += inc.price;
            return {...state, cart:[...state.cart],totalPrice:state.totalPrice}
        case "DECREASE_PRODUCT":
            let dec = state.bookList.find(product => product.id === action.payload);
            if(dec.pieces > 0){
                state.totalPrice -= dec.price;
                dec.pieces--
            }
            else{
                dec.pieces = 0;
            }
            return {...state, cart:[...state.cart],totalPrice:state.totalPrice}
        default:
            return state;
    }
   
}