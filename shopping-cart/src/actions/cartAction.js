import { ADD_TO_CART, REMOVE_ITEM,ADD_QUANTITY } from "./action-types/cart-action-types";


export const addToCart = (id) =>{
    return{
        type:ADD_TO_CART,
        payload:id
    }
}

export const removeFromCart = (id) =>{
    return {
        type:REMOVE_ITEM,
        payload:id
    }
}

export const addQuantity = (id) =>{
    return {
        type:ADD_QUANTITY,
        payload: id
    }
}