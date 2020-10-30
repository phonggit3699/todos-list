import React from "react";

const Form = () => {
    return (
        <form>
            <div className="input">
                <input type="text" className ="todo-input" />
                <button className="todo-btn"><i class="fas fa-plus-square"></i></button>
            </div>
            
            <div className="select">
                <select name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}


export default Form;