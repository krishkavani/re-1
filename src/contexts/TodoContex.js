import { createContext,useContext } from "react";

export const TodoContext = createContext ({
    todos:[
        {
            id:1,
            todo:'Todo mess',
            completed:false
        }
    ],
    addtodo:(todo)=>{},
    updateTodo:(id,todo) => {},
    deleteTodo:(id) =>{},
    toggleComplete:(id) =>{}
})


export const useTodo = ()=>{   
    return useContext(TodoContext)
}


export const TodoProvid = TodoContext.Provider
