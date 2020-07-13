import React from 'react';

const AddTodoButton = ({ handleOpenAddTodoModal }) => {
    console.log('Component: AddTodoButton')
    return (
        <button className="add-todo-button" onClick={handleOpenAddTodoModal}>&#43;</button>
    )
}

export default AddTodoButton;