import { useState } from 'react';
import './App.css';
import ClassComponent from './ClassComponent';
import FunctionComponent from './FunctionComponent';

function App() {
  const [showComponent, setShowComponent] = useState(true);
  return (
    <>
    <button onClick={() => setShowComponent(!showComponent)}>Toggle</button>
    <div className="App">
       {showComponent ? <ClassComponent/> : <div/>}
       {showComponent ? <FunctionComponent/>: <div/>}
      
    </div>
    </>
  );
}
// useEffect : it is where we run some processes after component rendered.(run => api request,timer,eventlistener in useEffect) 
// as second parameter empty => didupdate , [] => didmount, [] and return() inside useEffect => unmount.
export default App;
