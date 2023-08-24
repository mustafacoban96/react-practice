import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './store';
import { add } from './features/todoSlice';

function App() {
  const [title,setTitle] = useState("");
  const todos = useAppSelector(state => state.todos)
  const dispatch = useAppDispatch();
  const onSave = () =>{
    dispatch(add(title));
    setTitle("");
  }
  return (
    <div className="App">
      <input name='title' value={title} onChange={(e) => setTitle(e.currentTarget.value)}/>
      <button onClick={onSave}>SAVE</button>
      <ul>
        {todos.map((todo) =>( <li key={todo.id}>{todo.title}</li>) )}
      </ul>
    </div>
  );
}

export default App;
