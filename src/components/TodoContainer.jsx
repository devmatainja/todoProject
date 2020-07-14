import React, { memo, useState, useEffect } from "react";
import { Auth, API, graphqlOperation } from "aws-amplify";
import { deleteTodo } from '../graphql/mutations';
import { listTodos } from '../graphql/queries';
import TodoItem from './TodoItem';

// const listTodos = `query listTodos {
//   listTodos{
//     items{
//       id
//       name
//       description
//     }
//   }
// }`;







const TodoContainer = ({ open }) => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        listQuery();
    }, [open]);

    const listQuery = async () => {
        try {
            Auth.currentAuthenticatedUser().then(async (user) => {
                const { data } = await API.graphql(graphqlOperation(listTodos));
                console.log(data);
                const items = data.listTodos.items ? data.listTodos.items : [];
                items.forEach(item => {
                    item.myTodo = Boolean(item.creatorId === user.username);
                })
                setTodos(items);
            }).catch(console.error);
        } catch (error) {
            console.error(error);
        }
        // 
    };

    const handleDeleteTodo = async todo => {
        console.log({ todo });
        Auth.currentAuthenticatedUser().then(async (user) => {
            console.log(user);
            if (user.username === todo.creatorId) {
                const input = { id: todo.id };
                const res = await API.graphql(graphqlOperation(deleteTodo, { input }));
                console.log(res);
            } else {
                alert('You are not authenticated to delete it');
            }
        }).catch(console.log)
    }

    return (
        <section className="todo-container">
            <div className="todos">
                {
                    todos.map(todo => <TodoItem key={todo.id} todo={todo} handleDeleteTodo={handleDeleteTodo} />)
                }
            </div>
        </section>
    )
}

export default TodoContainer;