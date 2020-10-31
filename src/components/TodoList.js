import React from "react";
import Todo from "./Todo"

const TodoList = ({ todos, setTodos, filteredTodo }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodo.map((todo) => (
                    <Todo text={todo.text} key={todo.id} todo={todo} todos={todos} setTodos={setTodos}  />
                ))}
            </ul>
        </div>
    )
}


export default TodoList;