import { useState } from "react";
export default function Todo() {
  const [task,setTask]=useState("");
  const [todo, setTodo] = useState([]);
  const addTodo=()=>{
    if(task.trim()=="") return;
    setTodo([...todo,task]);
    setTask("");
  }
  return (
    <>
      <h1>Todo List</h1>
      <input type="text" placeholder="Enter your task" value={task} onChange={(e)=>setTask(e.target.value)}/>&nbsp;&nbsp;
      <button onClick={addTodo}>Add</button>
      <ul>
        {todo.map((item,index)=>(
          <li key={index}>{item} &nbsp;&nbsp;
          <button>Edit</button>&nbsp;&nbsp;
          <button>Delete</button>
        </li>
       ))}
        </ul>
    </>
  );
}
