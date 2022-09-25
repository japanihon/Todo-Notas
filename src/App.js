import logo from './logo.svg';
import './App.css';

import TodoForm from './components/TodoForm'

import TodoList from './components/TodoList'

function App() {
  return (
    <>
    <img src={logo} className="logo" alt="logo" />
    <div className="container mt-4">
    
      <div className="row">
        <div className="col-8" >
        <TodoList />

        </div>
    
        <div className="col-4" >
        <TodoForm />
          
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
