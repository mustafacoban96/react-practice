export const Task = (props) =>{
    return (
        <div class="task" style={{backgroundColor : props.completed ? "green" : "white"}}>
          <li>{props.taskName}</li>
          <button onClick={() => props.updateTask(props.id)}>Complete</button>
          <button onClick={() => props.deleteTask(props.id)}>X</button>
        </div>
    )
}