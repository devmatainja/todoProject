import React, { memo, useState, useEffect } from "react";
import { API, graphqlOperation } from "aws-amplify";
import TodoItem from './TodoItem';

const listTodos = `query listTodos {
  listTodos{
    items{
      id
      name
      description
    }
  }
}`;







const TodoContainer = ({ open }) => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        listQuery();
    }, [open]);

    const listQuery = async () => {
        try {
            const { data } = await API.graphql(graphqlOperation(listTodos));
            console.log(data);
            setTodos(data.listTodos.items);
        } catch (error) {
            console.error(error);
        }
        // 
    };

    return (
        <section className="todo-container">
            <div className="todos">
                {
                    todos.map(todo => <TodoItem key={todo.id} {...todo} />)
                }
            </div>
        </section>
    )
}

export default TodoContainer;