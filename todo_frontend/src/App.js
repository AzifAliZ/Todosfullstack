import { useState,useEffect } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const[todo,setTodo]=useState([]);
  const[title,setTitle]=useState(" ");

  const fetchTodos=async()=>{
    const res=await axios.get("http://localhost:8000/api/todos/");
    setTodo(res.data);
  }
  const addtodo=async()=>
  {
    if(!title) return;
    await axios.post("http://localhost:8000/api/todos/",{title, completed:false});
    setTitle("");
    fetchTodos();
  }

  useEffect(()=>
  {
    fetchTodos();
  },[]);

  const toggletodo=async(todo)=>{
    await axios.put(`http://127.0.0.1:8000/api/todos/${todo.id}/`, {
  ...todo,
  completed: !todo.completed,
});

    fetchTodos();
  }
  const deletetodo=async(id)=>{
    await axios.delete(`http://127.0.0.1:8000/api/todos/${id}/`);
    fetchTodos();
  }
  return (
    <div className="App">
     <h1> TODO LIST</h1>
     <input value={title} placeholder='add new task' onChange={(e)=>setTitle(e.target.value)}/>
     <button onClick={addtodo} style={{marginTop:10}}> add</button>
     <ul>
      {todo.map(todo =>
      (
        <li
  key={todo.id}
  style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
>
  {todo.title}
  <button onClick={() => toggletodo(todo)}>toggle</button>
  <button onClick={()=>deletetodo(todo.id)}>Delete</button>
</li>

      ))}
     </ul>
    </div>
  );
}

export default App;
