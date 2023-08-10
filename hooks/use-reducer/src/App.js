import './App.css';
import {useState,useReducer} from 'react';
import { reducer } from './reducer';
const initialState = {
  data: "",
  loading: false,
  error: ""
}

function App() {
  // if we have state more than one , we can use reducer
  const [state, dispatch] = useReducer(reducer,initialState);
  const {data,loading,error} = state;

  
  // const [data,setData] = useState("");
  // const [loading,setLoading] = useState(false);
  // const [error, setError ] = useState("");


  const fetchDog = () =>{
    // // case fetch start
    // setLoading(true);
    // setError(""); 
    // setData("");

    dispatch({type: "FETCH_START"});

    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) =>res.json())
    .then((res) =>{
      // setLoading(false);
      // setData(res.message);
      dispatch({type:"FETCH_SUCCESS" ,payload: res.message});
    })
    .catch(() =>{
      // setLoading(false);
      // setData("");
      // setError("Error fetching data");
      dispatch({type:"FETCH_ERROR", payload:"Error fetching data"});
    });

    
  }
  return (
    <div className="App">
      <button onClick={fetchDog} disabled={loading}>Fetch Dog</button>
      {data && (
        <div>
          <img src={data}/>
        </div>
      )}
      {error && <p>{error}</p>}
    </div>
  );
}

export default App;
