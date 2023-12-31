import './App.css';
import { UserList } from './UserList';
import { useState } from 'react';
import { UserContext } from './contexts/UserContext';


//
const data = [
  {id:1, name:"Ahmet" , email:"ahmet@site.com", age:25, color:"lightcyan"},
  {id:2, name:"Mehmet" , email:"mehmet@site.com", age:30, color:"honeydew"},
  {id:3, name:"Ali" , email:"ali@site.com", age:35, color:"mistyrose"}
]

function App() {
  const [users,setUsers] = useState(data);


  const changeColor = (id,color) => {
    setUsers(
      users.map(user => (user.id === id ? {...user,color:color} : user))
    )
  }
  return (

    // UserContext.Provider tranfers the value all of its children.
    <UserContext.Provider value={{users,changeColor}}>
      <div className="App">
        <header>Welcome!</header>
        <UserList  />
      </div>
    </UserContext.Provider>
  );
}

export default App;
