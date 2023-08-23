import axios from "axios"


export const getPokemons = () => dispatch =>{
    dispatch({type:'GET_POKEMON_START'})
    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(response => dispatch({type: 'GET_POKEMON_SUCCESS' , payload: response.data}))
    .catch(error => dispatch({type:'GET_POKEMON_ERROR', payload:error}))
   
}