import { useState} from "react";
import {TodoProvid} from "./contexts/index.js"
import "./App.css";
import { useEffect } from "react";
import TodoForm from "./components/TodoForm.jsx";

function App() {
      const[todos,setTodos] = useState([])
      const addtodo = (Todo) => {
        setTodos((prev) => [{id: Date.now(), ...Todo},  ...prev])
      }
      const updateTodo = (id,todo) =>{
        setTodos((prev) => prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)))

        // prev.map((eachVal) =>{
        //   if (eachVal.id === id) {
        //     todo
        //   }
        // })
      }
      const deleteTodo = (id) => {
        setTodos((prev) => prev.filter((todo) => todo.id !== id))
      }
      const toggleComplete = (id) =>{
        setTodos((prev) =>prev.map((prevTodo) => prevTodo === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo) )
      }

      useEffect(() => {
       const todos = JSON.parse( localStorage.getItem("todos"))
       if (todos && todos.length > 0) {
        setTodos(todos)
       }
      }, [])
      useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);
    
      
  return (
    <TodoProvid value={{todos,addtodo,updateTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">{/* Todo form goes here */}
            <TodoForm /></div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todo) => (
               <div key={todo.id} className='w-full'> 
               </div> 
            ))}
          </div>
        </div>
      </div>
    </TodoProvid>
  );
}

export default App;
