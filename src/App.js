import './App.css';
import React from "react";
//Importing Components
import Form from './components/Form';
import Todo from './components/TodoList';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Todos List</h1> 
      </header>
      <Form/>
      <Todo/>
    </div>
  );
}

export default App;
