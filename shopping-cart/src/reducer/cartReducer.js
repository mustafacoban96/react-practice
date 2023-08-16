import { ADD_TO_CART } from "../actions/action-types/cart-action-types";
import { data } from "../data";


const initState = {
    items:data,
    addedItems:[],
    total: 0

}

export const cartReducer = (state = initState,action) =>{
    
    switch(action.type){

        case ADD_TO_CART:
            let addedItem = state.items.find(item => item.id === action.payload)
            let existed_item = state.addedItems.find(item => action.payload === item.id)
            if(existed_item){
                addedItem.quantity += 1
                return {
                    ...state,
                    total:state.total + addedItem.price
                }
            }
            else{
                addedItem.quantity = 1;
                let newTotal = state.total + addedItem.price;

                return {
                    ...state,
                    addedItems:[...state.addedItems,addedItem],
                    total:newTotal
                }
            }

        default:
            return state;
    }
    
    
    
    

    
}

