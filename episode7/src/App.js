import './App.css';
import { useEffect, useState } from 'react';
// import {GenerateButton} from './GenerateButton';
import Axios from 'axios';
function App() {
  // const [data,setData] = useState();

  // useEffect(() =>{
  //   // const dataFetch = async () =>{
  //   //   const data = await (
  //   //     await fetch(
  //   //       'https://catfact.ninja/fact'
  //   //     )
  //   //   ).json()

  //   //   setData(data);
  //   // }

  //   const dataFetch = () =>{
  //     fetch('https://catfact.ninja/fact')
  //     .then(response =>{
  //       return response.json()
  //     }).then(data => {
  //       console.log(data);
  //       setData(data);
  //   });
  //   }
  //   console.log(data.fact)
  // }, []);
//------------------------------------------------------------
  // fetch('https://catfact.ninja/fact')
  // .then((response) => response.json())
  // .then((data) => {
  //   console.log(data);
  // });
  //------------------------------------------------------------
  // const [catFact, setCatFact] = useState("");

  // const fetchCatFact = () =>{
  //   Axios.get('https://catfact.ninja/fact')
  //   .then((response) => {
  //     setCatFact(response.data.fact);
  //   })
  // }
  // useEffect(()=>{
  //   fetchCatFact();
  // },[])
  //------------------------------------------------------------------
  const [isim,setName] = useState();
  const [veri,setVeri] = useState(null);

  const fetchData = () =>{
    Axios.get(`https://api.agify.io/?name=${isim}`)
    .then((response)=> {return response.data})
    .then((myData) => setVeri(myData))
  };

  return (
    <div className="App">
        {/* <button onClick={fetchCatFact}>Generate Cat Fact</button>
        <p>{catFact}</p> */}
        {/* ---------------------------------- */}
        <input type="text" placeholder='Ex. Mustafa ....' onChange={(event) => setName(event.target.value)}/>
        <button onClick={fetchData}>Predict Age</button>
        <h1>Predicted Name: {veri?.name}</h1>
        <h1>Predicted Age: {veri?.age}</h1>
        <h1>Predicted Count: {veri?.count}</h1>
    </div>
  );
}

export default App;
