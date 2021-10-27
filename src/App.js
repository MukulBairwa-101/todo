import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Todos from './Components/Todos';
import React, { useState, useEffect } from "react";
import AddTodo from './Components/AddTodo';
function App() {

  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }


  const handleDelete = (todoitems) => {
    
    setTodoitemsArray(TodoitemsArray.filter((i) => {
      return (i !== todoitems);
    }))

    localStorage.setItem("TodoitemsArray", JSON.stringify(TodoitemsArray));
  }



  const addtodo = (title, desc) => {

    let sno;
    if (TodoitemsArray.length === 0) {
      sno = 0;
    }
    else {
      sno = (TodoitemsArray[TodoitemsArray.length - 1].sno + 1);
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    setTodoitemsArray([...TodoitemsArray, myTodo]);
  }
  const [TodoitemsArray, setTodoitemsArray] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("TodoitemsArray", JSON.stringify(TodoitemsArray));
  }, [TodoitemsArray])


  return (
    <div className="App">
      <Header title="todo-list" />
      <AddTodo addtodo={addtodo} />
      <Todos todos={TodoitemsArray} handleDelete={handleDelete} />
      <Footer />
    </div>
  );
}

export default App;
