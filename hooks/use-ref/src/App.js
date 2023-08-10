import './App.css';
import {useEffect,useRef,useState} from 'react'

function App() {
  // we use useRef for access the nodes like that dom in vanilla.
  // main purpose is keeping mutable value (or state) inside node
  const inputRef = useRef();
  const divRef = useRef();

  const onFocusButton = () =>{
    inputRef.current.focus();
  }

  const onDivBorder = () =>{
    divRef.current.style.border ="1px solid black";
  }

  useEffect(()=>{
    console.log(inputRef.current)
  })
//////////////////////////////
// if We use useRef for mutable value, component doesn't make re-render itself 
// during the life-cycle useRef reference same object everytime.
  const [,setDummy] = useState({})
  const deger = useRef(0);
  console.log(deger)
  const onIncrease = () =>{
    setDummy({})
    deger.current += 1;
  };


  return (
    <div ref={divRef} className="App">
      <h1>React Dersleri</h1>
      <h2>Türkçe React Dersleri</h2>
      <input ref={inputRef} placeholder='write something'/>
      <button onClick={onFocusButton}>Focus on Input</button>
      <button onClick={onDivBorder}>Draw border</button>
      <button onClick={onIncrease}>Increase Ref Value</button>
    </div>
  );
}

export default App;
