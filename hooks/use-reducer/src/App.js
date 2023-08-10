import './App.css';
import {useState} from 'react'

function App() {
  const [data,setData] = useState("");
  const [loading,setLoading] = useState(false);
  const [error, setError ] = useState("");


  const fetchDog = () =>{
    setLoading(true);
    setError("");
    setData("");


    fetch('https://dog.ceo/api/breeds/image/random')
    .then((res) =>res.json())
    .then((res) =>{
      setLoading(false);
      setData(res.message);
    })
    .catch(() =>{
      setLoading(false);
      setData("");
      setError("Error fetching data");
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
