import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { Navbar } from './Navbar';
import { Home} from './page/Home';
import { Contact} from './page/Contact';
import { Profile } from './page/Profile';
import {useState, createContext} from "react"


export const AppContext = createContext();


function App() {
  const [userName,setUserName] = useState("Pedro");
  return (
    <div className="App">
      <AppContext.Provider value={{userName,setUserName}}> 
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/profile' element={<Profile/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='*' element={<h2>Page not found</h2>}/>
          </Routes>
        </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;


// const TopComponent = () => {
//   const [state,setState] = useState();

//   return (
//     <div>
//       <MiddleComponent state={state}/>
//     </div>
//   )
// };

// const MiddleComponent = (state) =>{
//   return (
//     <div>
//       <BottomComponent state={state}/>
//     </div>
//   )
// };

// const BottomComponent = (state) =>{
//   return <div>{state}</div>
// }