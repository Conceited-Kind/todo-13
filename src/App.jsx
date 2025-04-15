import { useState } from 'react';
import './App.css';
import './index.css';
import Button from './components/Button';
import Todos from './components/Todos';
import { TODOS } from './data/data';

function App() {
  const [todos, setTodos] = useState(TODOS);
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newTodo = {
      id: Date.now(),
      body: inputValue.trim(),
    };

    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  return (
    <div className="todo-app">
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit} className="todo-form">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="todo-input"
          placeholder="Add a new todo"
        />
        <button type="submit" className="add-button">
          Add Todo
        </button>
      </form>

      <div className="todos-container">
        <h2 className="todos-heading">My Todos</h2>
        <Todos todos={todos} setTodos={setTodos} />
      </div>

      <div className="button-container">
        <button className="custom-button hello-button">Hello</button>
        <button className="custom-button jambo-button">Jambo</button>
        <button className="custom-button konichiwa-button">Konichiwa</button>
      </div>
    </div>
  );
}

export default App;
