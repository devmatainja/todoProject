import React from "react";

const TodoItem = ({ name, description }) => {
  return (
    <div className="todo">
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  )
}

export default TodoItem;