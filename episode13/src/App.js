import './App.css';
import { Person } from './components/Person';

function App() {
  return (
    <div className="App">
      <Person name={9} 
      email={"mustafacoban@gmail.com"} 
      age={25} 
      isMarried={false}
      friends ={['jessica', 'jake','jerry', 'jasmine']}/>
    </div>
  );
}

export default App;
