import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [number,setNumber] = useState(0);
  const [name,setName] = useState("")

  useEffect(() => {
    console.count("useEffect worked times");
    document.title =`You clicked ${number} times`
  },[name])

  console.count('component rendered');
  return (
    <div className="App">
      <span>You clicked {number} times</span>
      <button onClick={() => setNumber((prev) => prev + 1)}>increase</button>
      <input onChange={(e) => setName(e.target.value)}/>
    </div>
  );
}

export default App;
