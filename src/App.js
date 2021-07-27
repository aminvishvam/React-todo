import './App.css';
import React, { useState, useEffect } from 'react';
//importing components
import Form from './components/Form'
import TodoList from './components/TodoList'

function App() {
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getlocalTodos();
  }, [])

  //effects runs when we wants them to run the functions
  useEffect(() => {
    filteredhandler();
    savelocalStorage();
  }, [todos, status])

  const filteredhandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
      case 'all':
        setFilteredTodos(todos);
        break;
    }
  }

  const savelocalStorage = () => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }

  const getlocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]))
    } else {
      let todolocal = JSON.parse(localStorage.getItem('todos'))
      console.log(todolocal)
      setTodos(todolocal)
    }
  }
  return (
    <div className="App">
      <header>
        <h1>Amin Todo list</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />

      <TodoList setTodos={setTodos} filteredTodos={filteredTodos} todos={todos} />
    </div>
  );
}

export default App;
