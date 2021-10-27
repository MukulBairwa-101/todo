import React,{useState} from 'react'
import "../CSS/Addtodo.css";
const AddTodo = (props) => {

    const[title,setTitle]=useState("");
    const[desc ,setDesc]=useState("");

    const submit =(e)=>{
          e.preventDefault();  
          if(!title || !desc){
              alert("title or description  cannot be blank");
          }
          else{
            props.addtodo(title,desc);
            setTitle("") ;
            setDesc("");
          }
                 
    }
    return (

       
        <div className="card">
            <div className="card-container">
                <h3>Add To-do</h3>
                <form className="addtodo-form" onSubmit ={submit}>
                    <label>To-do title</label><br />
                    <input type="text" placeholder="Add to-do title here.. " value={title} 
                        onChange ={(e)=>setTitle(e.target.value)}
                    />
                    <br />
                    <label>To-do Description</label><br />
                    <input type="text" placeholder="Add to-do description .." value={desc} 
                        onChange ={(e)=>setDesc(e.target.value)}
                    /><br />
                    <button type ="submit">Add To-do</button>
                </form>
            </div>


        </div>
    )
}

export default AddTodo;
