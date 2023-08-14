import './App.css';
import React,{FC} from 'react';
import { Person,HairColor } from './components/Person';



const App: FC = () => {
  return (
    <div className="App">
      <Person name="Mustafa" email="asdasdas@gmail.com" age={22} hairColor={HairColor.Brown}/>
    </div>
  );
}

export default App;
