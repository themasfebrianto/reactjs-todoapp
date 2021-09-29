import './todo.css'
import { useState } from "react"
import Todolist from "../todo-list/Todolist";
import TodoCreate from "../todo-create/TodoCreate";

const Todo = () => {
    const [getTodos, setTodos] = useState([

    ])

    const eventCreateTodo = (tidi) => {
        setTodos(getTodos.concat(tidi))
        console.log(getTodos)
    }

    return ( <
        div >
        <
        h3 > Todo List < /h3> <
        TodoCreate onCreateTodo = { eventCreateTodo }
        /> <
        Todolist dataTodo = { getTodos }
        /> <
        /div>
    )
}

export default Todo