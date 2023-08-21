
import { Action,initialState } from "../actions/action-index";
import { ActionType } from '../action-types/action-types'


const reducer = (state:number = initialState, action:Action) =>{
    switch(action.type){
        case ActionType.DEPOSİT:
            return state + action.payload
        case ActionType.WITHDRAW:
            return state + action.payload
        case ActionType.BANKRUPT:
            return 0 ;
        default:
            return state
    }
}


export default reducer