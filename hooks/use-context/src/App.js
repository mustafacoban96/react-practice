import './App.css';
import { UserList } from './UserList';
import { useState } from 'react';


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
    <div className="App">
      <header>Welcome!</header>
      <UserList users={users} changeColor= {changeColor} />
    </div>
  );
}

export default App;
