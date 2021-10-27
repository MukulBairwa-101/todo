import React from 'react'
import "../CSS/Todoitems.css";
import {TiDelete} from "react-icons/ti";
const TodoItems = ({ todoitems, onDelete }) => {
    return (
        <div className="item-list-wrapper">
            <div className="item-list">
                <h2>Title :   {todoitems.title}</h2>
                <p>Description :  {todoitems.desc}</p>
                <div>
                  <button onClick={() => { onDelete(todoitems) }} >Delete<TiDelete></TiDelete></button>
                </div>
            </div>
        </div>
    )
}

export default TodoItems;
