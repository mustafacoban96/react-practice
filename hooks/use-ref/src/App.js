import './App.css';
import {useEffect,useRef} from 'react'

function App() {
  // we use useRef for access the nodes like that dom in vanilla.
  const inputRef = useRef();

  const onFocusButton = () =>{
    inputRef.current.focus();
  }

  useEffect(()=>{
    console.log(inputRef.current)
  })
  return (
    <div className="App">
      <h1>React Dersleri</h1>
      <h2>Türkçe React Dersleri</h2>
      <input ref={inputRef} placeholder='write something'/>
      <button onClick={onFocusButton}>Focus on Input</button>
      
    </div>
  );
}

export default App;
