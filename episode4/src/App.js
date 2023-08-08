import './App.css';
import { useState } from 'react';

function App() {
  // const [age,setAge] = useState(0);
  //------------------------------------------------------------
  //const [word, setWord] = useState("");

  // const handleInputChange= (e) =>{
  // setWord(e.target.value)
  // }
  //-------------------------------------------------------------
  // const [showText, setShowText] = useState(true); 3
  //const [textColor, setTextColor] = useState("red");

  //-------------------------------------------------------------
  //example
  const [num, setNum] = useState(0)

  return (
    <div className="App">
        {/* {age} 
        <button onClick={() => setAge(age +1)}>artır</button> */}
        {/* <input type='text' onChange={handleInputChange}/> */}
        {/* <button onClick={() => setShowText(!showText)}>name</button> 3*/}
        {/* <button onClick={()=> setTextColor(textColor === "red" ? "blue" : "red")}>change Color</button> */}
        {/* example */}

        <button onClick={() => setNum(num - 1)}>Decrease</button>
        <button onClick={() => setNum(num + 1)}>İncrease</button>
        <button onClick={() => setNum(0)}>set Zero</button>

        <div> 
            {/* {showText === true && <h1>Mustafa</h1>} 3*/}
            {/* <h1 style={{color: textColor}}>Color</h1> */}
            {num}
            
        </div> 
    </div>
  );
}
 
export default App;
