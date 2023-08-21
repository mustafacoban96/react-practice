import { ActionType } from "../action-types/action-types";
import { Dispatch } from "redux";
import {Action} from "../actions/action-index"




export const depositMoney = (amount:number) =>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type:ActionType.DEPOSİT,
            payload:amount
        })

    }
} 

export const withdrawMoney = (amount:number) =>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type:ActionType.WITHDRAW,
            payload:amount
        })

    }
}

export const bankrupt = () =>{
    return (dispatch: Dispatch<Action>) =>{
        dispatch({
            type:ActionType.BANKRUPT
        })

    }
} 