import './App.css';
import {useState} from 'react';
import { useInput } from './hooks/useInput';

function App() {

  //Before custom hook1
  // const [name,setName] = useState("");
  // const [age,setAge] = useState("");
  // const [email,setEmail] = useState("");


  //Before custom hook2
  // const [inputs, setInputs] = useState({name: '',age: '',email: ''});

  // const handleChange = event =>{
  //   setInputs({...inputs, [event.target.name]: event.target.value})
  // }

  // after custom hook
  const [inputs,setInputs] = useInput({name: '',age: '',email: ''});


  return (
    <div className="App">
      <h1>React Course</h1>
      <h2>How to do custom-hook</h2>
      <div className='form'>
        <label htmlFor='name'>
            Name: <input name='name' value={inputs.name} onChange={setInputs}/>
        </label>
        <label htmlFor='age'>
            Age: <input name='age' value={inputs.age} onChange={setInputs}/>
        </label>
        <label htmlFor='email'>
            Email: <input name='email' value={inputs.email} onChange={setInputs}/>
        </label>
      </div>
    </div>
  );
}

export default App;
