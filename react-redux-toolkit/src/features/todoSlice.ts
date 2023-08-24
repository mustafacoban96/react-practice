// we sum reducers and actions into this file

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {v4} from 'uuid'



export interface Todo{
    id:string,
    title:string,
    completed:boolean,
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
    name:"todos", // global state içerisinde bu slice ın nasıl tutlacağını belirtiyoruz.
    initialState,
    reducers:{
        // birleştirmeyi reducer içinde yapıyoruz.actionCreaterları diğer ismiyle aciton dödünren fonksiyonları buraya yazıyoruz.
        //exp
        // actionda sadece title gerekli olduğu için payload u string verdik
        add: (state,action: PayloadAction<string>) => {
            // burada state ya da spread opratörüyle açılmış state i döndürmemize gerek yok.
            const newTodo ={id: v4(),title: action.payload,completed:false}
            state.push(newTodo)
        },
        remove: (state,action : PayloadAction<string>) => {
            return state.filter((todo) => todo.id !== action.payload)
        },

        toggleCompleted: (state,action: PayloadAction<string>) => {
            return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo)
        }
    }
})


export default todoSlice.reducer;
export const { add,remove,toggleCompleted } = todoSlice.actions; // we export actionCreator to use in components.

// we use uuid packet for id "npm i uuid" 
// then we install uuid packet for ts "npm i --save-dev @types/uuid"