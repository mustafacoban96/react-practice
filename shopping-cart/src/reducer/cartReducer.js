import { ADD_TO_CART, REMOVE_ITEM,ADD_QUANTITY, SUB_QUANTITY } from "../actions/action-types/cart-action-types";
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
        case REMOVE_ITEM:
            let choosenItem = state.addedItems.find(item => item.id === action.payload);
            let objWithIndex = state.addedItems.findIndex((obj) => obj.id === action.payload)
            if(objWithIndex > -1){
                state.addedItems.splice(objWithIndex,1);
                state.total -= (choosenItem.price * choosenItem.quantity);
            }
            return {
                ...state,
                addedItem: [...state.addedItems],
                total: state.total
                
            }
        case ADD_QUANTITY:
            let increasedItem = state.addedItems.find(item => item.id === action.payload);
            increasedItem.quantity+=1
            state.total += increasedItem.price;

            return {
                ...state,
                total:state.total
            }
        case SUB_QUANTITY:
            let decreasedItem = state.addedItems.find(item => item.id === action.payload);
            if(decreasedItem.quantity === 1){
                let objWithIndex = state.addedItems.findIndex((obj) => obj.id === action.payload)
                if(objWithIndex > -1){
                    state.addedItems.splice(objWithIndex,1);
                    state.total -= decreasedItem.price;
                }

                return {
                    ...state,
                    addedItems: [...state.addedItems],
                    total:state.total
                }
            }else{
                decreasedItem.quantity -= 1;
                state.total -= decreasedItem.price;

                return {
                    ...state,
                    total:state.total
                }
            }


        default:
            return state;
    }
    
    
    
    

    
}

