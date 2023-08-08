import './App.css';
import {useState} from 'react';
import { Task } from './Task';

function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");
  
  
  const handleChange = (e) => {
    setNewTask(e.target.value);
  };   

  const addTask = () =>{
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id +1,
      taskName : newTask,
      completed: false
    }
    setTodoList( [...todoList,task]);
    document.querySelector('.inp-add').value = "";
  }

  const deleteTask = (taskID) =>{
    const newTodoList = todoList.filter((task) => task.id !== taskID
      // if(task === taskName){
      //   return false;
      // }else{
      //   return true;
      // }
    )
    setTodoList(newTodoList);
  }

  const updateTask = (taskID) =>{
    setTodoList(
      todoList.map((task) => {
        if(task.id === taskID){
          return {...task, completed:true}
        }else{
          return task;
        }
      })
    );
  }


  return (
    <div className="App">
      <div className='addTask'>
        <input className="inp-add" type="text" onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>  
        {todoList.map((task) =>{
         return <Task taskName={task.taskName} id={task.id} deleteTask={deleteTask} updateTask={updateTask} completed={task.completed}/>
        })}
      </div>
    </div>
  );
}

export default App;
