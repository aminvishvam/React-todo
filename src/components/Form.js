import React from 'react';

const Form = ({ inputText, setInputText, todos, setTodos, setStatus }) => { // we can pass the props in the {} so that we dont have to right the props
    const inputTextHandler = (e) => {
        // props.setInputText(e.target.value)
        setInputText(e.target.value)
    }
    const submitTextHandler = (e) => {
        e.preventDefault()
        setTodos([
            ...todos,
            {
                text: inputText, completed: false, id: Math.random() * 1000
            }
        ])
        setInputText("") //reset the text inside the text box
    }

    const statusSectionHandler = (e) => {
        setStatus(e.target.value)
    }

    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
            <button onClick={submitTextHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={statusSectionHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>

    );
}

export default Form;