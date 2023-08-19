import React, { useState } from 'react';
import { Todo } from '../model';
import {AiFillEdit,AiFillDelete} from 'react-icons/ai';
import {MdDone} from 'react-icons/md';
import './styles.css'


type Props = {
    todo:Todo,
    todos:Todo[],
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo:React.FC<Props> = ({todo,todos,setTodos}) =>{
    const [edit,setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(todo.todo);


    const handleDone = (id:number) =>{
        setTodos(todos.map(todo => todo.id === id?{...todo,isDone:!todo.isDone}:todo))
    };
    const handleDelete = (id:number) =>{
        setTodos(todos.filter((todo) => todo.id !==id));
    };
    const handleEdit = (e:React.FormEvent, id:number) =>{
        e.preventDefault();
        setTodos(todos.map((todo) => (
            todo.id === id?{...todo,todo:editTodo}:todo
        )));
        setEdit(false);
    }
    return(
        <form className='todos_single' onSubmit={(e) => handleEdit(e,todo.id)}>
            {edit ? (
                <input value={editTodo} onChange={(e) => setEditTodo(e.target.value)} className='todos_single_text'/>
            ) : 
                todo.isDone ? (
                    <s className='todos_single_text'>{todo.todo}</s>
               ):(
                   <span className='todos_single_text'>{todo.todo}</span>
               )

            }
            <div>
                <span onClick={() => {if(!edit && !todo.isDone){
                    setEdit(!edit);
                }
                    }} className='icon'><AiFillEdit/></span>
                <span onClick={() => handleDelete(todo.id)} className='icon'><AiFillDelete/></span>
                <span onClick={() => handleDone(todo.id)} className='icon'><MdDone/></span>
            </div>
        </form>
    )
}

export default SingleTodo