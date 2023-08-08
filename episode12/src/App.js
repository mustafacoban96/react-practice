import './App.css';
import { useToggle } from './useToggle';




function App() {
  // const[isVisible,setIsVisible] = useState(false);  i move to useToggle
  // const[isVisible,toggle] = useToggle(); // data is returned as array
  // const[isVisible2,toggle2] = useToggle();
  const {state:isVisible, toggle} = useToggle();
  return (
    <div className="App">
      {/* arrray */}

      {/* <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
      {isVisible && <h1>Hidden Text</h1>} */}

      {/* <button onClick={toggle2}>{isVisible2 ? "Hide" : "Show"}</button>
      {isVisible2 && <h1>Hidden Text</h1>} */}
      
      {/* object */}
      <button onClick={toggle}>{isVisible ? "Hide" : "Show"}</button>
        {isVisible && <h1>Hidden Text</h1>}
    </div>
  );
}

export default App;
