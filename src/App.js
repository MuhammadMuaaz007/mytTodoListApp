import React, { useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Todos from "./Components/Todos";
import AddTodo from './Components/AddTodo';
// import Items from './Components/Items';

function App() {

  let initTodo;
  if(localStorage.getItem("todos") === null)
  {
    initTodo = [];
  }
  else
  {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  const onDelete = (todo) =>{
    // console.log("Delete Function");
    setTodos(todos.filter((e)=>{
      return e !== todo;
    }));
  }

  const [todos, setTodos] = useState(initTodo);

  const addTodo = (title, desc) =>{
    let id;
    if(todos.length > 0)
    {
      id = todos[todos.length-1].id + 1;
    }
    else{
      id = 1;
    }
    const myTodo = {
      id: id,
      title: title,
      desc: desc
    };

    setTodos([...todos, myTodo]);
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  },[todos]);

  return (
    <> 
    <Router>

        <Navbar title="Todo List" searchBar={true}/>

      <Routes>

        <Route exact path="/" element={<Todos todos={todos} onDelete={onDelete} />} />
        <Route exact path="/home" element={<Todos todos={todos} onDelete={onDelete} />} />
        <Route exact path="/addTodo" element={<AddTodo addTodo={addTodo} />} />

      </Routes>
      
    </Router>


      <Footer />

      {/* <Items/> */}
    </>

  );
}

export default App;
