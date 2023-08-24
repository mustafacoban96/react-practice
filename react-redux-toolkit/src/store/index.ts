import { configureStore } from "@reduxjs/toolkit";
import { useDispatch,TypedUseSelectorHook, useSelector } from "react-redux";

const store = configureStore({
    reducer:{}
});



export default store;

//type exporting... 2 dispatch's and state's types , other 2 export means specified type of useSelector and useDispacth 

//global state type
// bu sayede reducer içine girdiğmiz statelerin ya da başka bir değişle sliceların typeları otomatik olarak alınıyor ve bize otomati olarak RootState olarak return ediliyor.
export type RootState = ReturnType<typeof store.getState>;

// AppDispatch type for useAppDispatch hook
export type AppDispatch = typeof store.dispatch;

// other 2
// whenever we use useDispatch hook , we don't need specify type of it.
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;


// old verison const todos = useSelector((state: RootState) => )