import React, { useEffect } from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPokemons } from './actions';


const App = (props) => {
  // const [pokemon, setPokemon] = useState();
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(()=>{

  //   axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
  //   .then((res) => res.data)
  //   .then(data => {
  //     setTimeout(() =>{
  //       setPokemon(data);
  //       setIsLoading(false);
  //     },1000)
      
      
  //   })
  //   .catch(error =>{
  //     console.error(error)
  //     setIsLoading(false)
  //   });
   
  // },[]);

  // if(isLoading){
  //   return <div className='App'>Loading...</div>
  // }

  // if(!pokemon){
  //   return <div className="App">Error loading data</div>;
  // }
  // console.log(pokemon.name)
  console.log(props.isLoading)
  useEffect(() =>{
     setTimeout(() =>{
      props.getPokemons();
    },2000)
    
  },[])
 
  return (
    <div className="App">
      {props.isLoading ? 
      (<p>Loading...</p>)
      : (
        <div>{props.pokemon.name}</div>
      )}
      
    </div>
  );
}


const mapStateToPorps = state =>{
  return {
    pokemon: state.pokemon,
    isLoading:state.isLoading,
    message:state.message,
  }
}

const mapActionsToProps = {getPokemons}

export default connect(mapStateToPorps,mapActionsToProps)(App) ;
