import React from 'react'

const Form = ({inputText, setInputText, status, setStatus, handleSubmit}) => {
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputText} className='todo-input' onChange={(e)=>setInputText(e.target.value)}/>
            <button className='todo-button' type="submit"><i className='fas fa-plus-square'></i></button>
            <div className="select">
                <select name="todos" className='filter-todo' onChange={(e)=>setStatus(e.target.value)}>
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    )
}

export default Form