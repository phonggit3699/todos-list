import React, {useState} from "react";



const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => {
    const [errors, setError] = useState('');
    //Get text from input
    const inputTextHandler = (e) => {
        setInputText(e.target.value); 
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();

        if (inputText===""){
            setError("You want to do something")
            return;
        }

        setTodos([
            ...todos, { text: inputText, completed: false, id: Math.random() * 1000 }
        ])

        setInputText('');
        setError('');
    }

    const filterTodoHandler = (e) => {
        setStatus(e.target.value);
    }

    return (
        <form>
            <div className="input">
                <input value={inputText} type="text" className ="todo-input" placeholder ={errors ? errors : ''}  onChange={inputTextHandler}/>
                <button onClick={submitTodoHandler} className="todo-btn"><i className="fas fa-plus-square"></i></button>
                
            </div>
            
            <div className="select">
                <select name="todos" className="filter-todo" onChange={filterTodoHandler}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}


export default Form;