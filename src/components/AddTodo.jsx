import React, { Fragment, useState } from 'react';
import { API, graphqlOperation } from "aws-amplify";

const addTodo = `mutation createTodo($name:String! $description: String!) {
    createTodo(input:{
      name:$name
      description:$description
    }){
      id
      name
      description
    }
}`;

const AddTodo = ({ open, handleCloseAddTodoModal }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = async event => {
        event.preventDefault();
        const todoDetails = { name, description };
        const newTodo = await API.graphql(graphqlOperation(addTodo, todoDetails));
        setName();
        setDescription();
        handleCloseAddTodoModal(false);
    }

    if (open)
        return (
            <Fragment>
                <div className="add-todo-overlay"></div>
                <div className="add-todo-container">
                    <form onSubmit={handleSubmit}>
                        <h2>Add Todo Form <button onClick={handleCloseAddTodoModal}>&times;</button></h2>
                        <div className="form-control">
                            <label>Name</label>
                            <input type="text" onChange={({ target: { value } }) => setName(value)} />
                        </div>
                        <div className="form-control">
                            <label>Description</label>
                            <textarea onChange={({ target: { value } }) => setDescription(value)}></textarea>
                        </div>
                        <button>Save</button>
                    </form>
                </div>
            </Fragment>
        )
    return null;
}

export default AddTodo;