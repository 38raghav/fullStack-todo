import { useState } from "react";

export default function Todo() {
  const [task,setTask]=useState("");
  const [todo, setTodo] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addTodo=()=>{
    if(task.trim()=="") return;

    if (editIndex !== null) {
    const updatedTodo = [...todo];
    updatedTodo[editIndex] = task;

    setTodo(updatedTodo);
    setEditIndex(null);
  } 
  else
  {
    setTodo([...todo,task]);
  }

  setTask("");
}

  const deleteTodo=(index)=>{
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };
  
  const editTodo = (index) => {
  setTask(todo[index]);
  setEditIndex(index);
};
  return (
    <>
      <h1>Todo List</h1>
      <input type="text"
       placeholder="Enter your task"
      value={task} 
      onChange={(e)=>setTask(e.target.value)}/>&nbsp;&nbsp;
      <button onClick={addTodo}>Add</button>

      <ul>
        {todo.map((item,index)=>(
          <li key={index}>{item} &nbsp;&nbsp;
          <button onClick={()=>editTodo(index)}>Edit</button>&nbsp;&nbsp;
          <button onClick={()=>deleteTodo(index)}>Delete</button>
        </li>
       ))}
        </ul>

    </>
  );
}
