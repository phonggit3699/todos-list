import './App.css';
import React, {useState, useEffect} from "react";
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos List</h1> 
      </header>
      <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText}/>
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
