import React from 'react'
import TodoItems from './TodoItems'
import "../CSS/Todo.css"

const Todos = (props) => {
    return (

        <div className="container"> 
                {
                    props.todos.length == 0 ? "  Hurray ! NO Task is left today.":
                        props.todos.map((todos)=>{
                            return <TodoItems todoitems ={todos}  key ={todos.sno} onDelete = {props.handleDelete} />
                        })
                }
        </div>
    )
}

export default Todos;
