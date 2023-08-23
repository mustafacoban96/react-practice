import React,{useEffect,useState} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [pokemon, setPokemon] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(()=>{

    axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then((res) => res.data)
    .then(data => {
      setTimeout(() =>{
        setPokemon(data);
        setIsLoading(false);
      },1000)
      
      
    })
    .catch(error =>{
      console.error(error)
      setIsLoading(false)
    });
   
  },[]);

  if(isLoading){
    return <div className='App'>Loading...</div>
  }

  if(!pokemon){
    return <div className="App">Error loading data</div>;
  }
  console.log(pokemon.name)
  

  return (
    <div className="App">
      {pokemon.name}
    </div>
  );
}

export default App;
