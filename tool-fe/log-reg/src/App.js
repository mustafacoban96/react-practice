
import {useRef, useState} from 'react';
import './App.css';
import FormInput from './components/FormInput';

function App() {
  // const [username,setUsername] = useState("");
  // const [email, setEmail] = useState("");
  // const [fullName, setFullName] = useState("");
  // const [password, setPassword] = useState("");

  // prevent re-rendering
  // const usernameRef = useRef();
  // const emailRef = useRef();
  // const fullNameRef = useRef();
  // const passwordRef = useRef();

  
  /////////////////////////////////////////////////////////////
  const [values,setValues] = useState({
    username:"",
    email:"",
    birthday:"",
    password:"",
    confirmPassword:"",
    required: true
  });

  const inputs = [
    {
      id:1,
      name:'username',
      type:'text',
      placeholder:'Username',
      label:"Username",
      errorMessage:"Username should be 3-16 characters and shouldn't include any special character!",
      pattern:'^[A-Za-z0-9]{3,16}$', //regex
      required: true
    },
    {
      id:2,
      name:'email',
      type:'email',
      placeholder:'Email',
      label:"Email",
      errorMessage:"It should be valid email address",
      required: true
    },
    {
      id:3,
      name:'birthday',
      type:'date',
      placeholder:'Birthday',
      label:"Birthday",
    },
    {
      id:4,
      name:'password',
      type:'password',
      placeholder:'Password',
      label:"Password",
      pattern:"^(?=.*[a-zA-Z])(?=.*)(?=.*[!@#$%^&*()_+])[A-Za-z][A-Za-z!@#$%^&*()_+]{7,19}$",
      errorMessage:"Password should be 8-20 character and include at least 1 letter,1 number,1 special character",
      required: true
    },{
      id:5,
      name:'confirmPassword',
      type:'password',
      placeholder:'ConfirmPassword',
      label:"ConfirmPassword",
      errorMessage:"Passwords don't match",
      pattern:values.password,
      required: true
    },
  ]
  const handleSumbit = (e) => {
    e.preventDefault();
    // const data = new FormData(e.target);
    // console.log(Object.fromEntries(data.entries()))
    // console.log(usernameRef)
  }

  const onChange = (e) =>{
    setValues({...values,[e.target.name]: e.target.value})
  }

  console.log(values);
  return (
    <>
    
    <div className="App">
      
      <form onSubmit={handleSumbit}>
      <h1>Register</h1>
        {inputs.map((input) =>(
          <FormInput key={input.id} {...input} value={values[input.name]} onChange={onChange}/>
        ))}
      
      {/* <FormInput name='email' refer={emailRef} placeholder='Email' />
      <FormInput name='fullname' refer={fullNameRef} placeholder='Full Name'/>
      <FormInput name='sth' refer={passwordRef} placeholder='sth else'/> */}
      <button>Submit</button>
      </form>
    </div>
    </>
  );
}

export default App;
