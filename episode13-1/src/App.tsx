import React from 'react';
import { Person,Country } from './components/Person'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Person
        name = "Mustafa"
        email = "mustafacoban181@mail.com"
        age = {21}
        isMarried = {false}
        friends={['jake','jessica','jerry']}
        country={Country.Canada}
      />
    </div>
  );
}

export default App;
