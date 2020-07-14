import React, { Fragment, useState } from 'react';
import { Auth, API, graphqlOperation } from "aws-amplify";
import { createTodo } from '../graphql/mutations';

const AddTodo = ({ open, handleCloseAddTodoModal }) => {
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = event => {
        event.preventDefault();
        Auth.currentAuthenticatedUser().then(async (user) => {
            console.log(user);
            const input = { name, description, completed: false, creatorId: user.username };
            console.log(input);
            const newTodo = await API.graphql(graphqlOperation(createTodo, { input }));
            setName();
            setDescription();
            handleCloseAddTodoModal(false);
        }).catch(console.error);
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