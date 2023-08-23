const INITIAL_STATE = {
    isLoading:false,
    pokemon: [],
    message: ''
}

export const reducer = (state=INITIAL_STATE,action) =>{

    switch(action.type){
        case 'GET_POKEMON_START':
            return {...state,isLoading:true,message:''}
        case 'GET_POKEMON_SUCCESS':
            return {...state,pokemon: action.payload,isLoading:false}
        case 'GET_POKEMON_ERROR':
            return{...state,message: action.payload,isLoading:false}
        default:
            return state;
    }
}