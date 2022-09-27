import React from "react";

import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm'

import TodoList from './components/TodoList'

const initialTodos = [
  {
      id: 1,
      title: 'Todo #1',
      description: 'Descripcion del todo #1',
      completed: false
  }, 
  {
      id: 2,
      title: 'Todo #2',
      description: 'Descripcion del todo #2',
      completed: true
  }
];


function App() {

  const [todos, setTodos] = React.useState(initialTodos)

  function todoDelete(todoId) {
  setTodos(todos.filter(item => item.id !== todoId));
  }

  function todoCompleted(todoId) {
    setTodos(todos.map(item => (
      item.id === todoId 
      ? {...item, completed: !item.completed}
      : item)
      ))
  }

  function todoAdd(todo) {

    const newTodo = {
      id: Date.now(),
      ...todo,
      completed: false
    }

    setTodos([...todos, newTodo])
  }



  return (
    <>
    <img src={logo} className="logo" alt="logo" />
    <div className="container mt-4">
    
      <div className="row">
        <div className="col-8" >
        <TodoList 
           todos={todos}
           todoDelete={todoDelete}
           todoCompleted={todoCompleted}
        />

        </div>
    
        <div className="col-4" >
        <TodoForm 
          todoAdd={todoAdd}

        />
          
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
