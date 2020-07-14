import React from "react";
import moment from 'moment';
import { CalendarOutlined, UserOutlined, DeleteOutlined } from '@ant-design/icons';

const TodoItem = ({ todo, handleDeleteTodo }) => {
  return (
    <div className="todo">
      <p className="top">
        {todo.completed ? <span className="complete">Completed</span> : <span className="incomplete">Incomplete</span>}
        {todo.myTodo && <button onClick={() => handleDeleteTodo(todo)} title="Delete Todo"><DeleteOutlined /></button>}
        {/* {todo.myTodo && <button onClick={() => handleDeleteTodo(todo)}>edit</button>} */}
      </p>
      <div>
        <h2>
          {todo.name}
        </h2>
      </div>
      <p>{todo.description}</p>
      <p className="bottom">
        <span className="date">
          <CalendarOutlined />
          {moment(todo.createDate).format("MMM DD, YYYY, HH:mm")}
        </span>
        <span className="creator"><UserOutlined />{todo.creatorId.slice(0, 10)}</span>
      </p>
    </div>
  )
}

export default TodoItem;