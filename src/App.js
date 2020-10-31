import './App.css';
import React, { useState, useEffect } from "react";
//Importing Components
import Form from './components/Form';
import TodoList from './components/TodoList';


function App() {
    const [inputText, setInputText] = useState('');
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState('');
    const [filteredTodo, setFilteredTodo] = useState([]);

    useEffect(() => {
        getLocalStorage();
    }, []);

    useEffect(() => {
        filterHandler();
        saveLocalStorage();
    }, [todos, status]);

    const filterHandler = () => {
        switch (status) {
            case "completed": setFilteredTodo(todos.filter(todo => todo.completed === true));
                break;

            case "uncompleted": setFilteredTodo(todos.filter(todo => todo.completed === false));
                break;

            default: setFilteredTodo(todos);
                break;

        }
    }

    const saveLocalStorage = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }

    const getLocalStorage = () => {
        if (localStorage.getItem('todos' === null)){
            localStorage.setItem('todos', JSON.stringify([]));
        }
        else {
        let todoLocal =  JSON.parse(localStorage.getItem('todos'));
        if (todoLocal){
            setTodos(todoLocal);
        }
        
        }
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Wind Todos List</h1>
            </header>
            <Form todos={todos} setTodos={setTodos} inputText={inputText} setInputText={setInputText} setStatus={setStatus} />
            <TodoList todos={todos} setTodos={setTodos} filteredTodo={filteredTodo} />
        </div>
    );
}

export default App;
