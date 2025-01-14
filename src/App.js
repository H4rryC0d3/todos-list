import './App.css';
import Header from './My Components/Header';
import Todos from './My Components/Todos';
import Footer from './My Components/Footer';
import AddTodo from './My Components/AddTodo';
import About from './My Components/About';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  // Initialize todos from localStorage or empty array if not present
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  // Delete a Todo
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
    setTodos(todos.filter((e) => e !== todo));
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Add a new Todo
  const addTodo = (title, desc) => {
    console.log("I am Adding this todo", title, desc);
    let sno = todos.length > 0 ? todos[todos.length - 1].sno + 1 : 1;
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  // State to manage todos
  const [todos, setTodos] = useState(initTodo);

  // Save todos to localStorage whenever there's a change
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <Router>
      <div className="app-container">
        <Header title="My Todo List" searchBar={false} />
        
        {/* Routes and Components */}
        <Routes>
          <Route
            exact
            path="/"
            element={
              <>
                <AddTodo addTodo={addTodo} />
                <Todos todos={todos} onDelete={onDelete} />
              </>
            }
          />
          <Route exact path="/about" element={<About />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
