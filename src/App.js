import React, { Component, Fragment, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { Navigation, TodoContainer, AddTodoButton, AddTodo } from './components';

const listTodos = `query listTodos {
  listTodos{
    items{
      id
      name
      description
    }
  }
}`;

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

const App = () => {
  const [open, setOpen] = useState(false);
  // todoMutation = async () => {
  //   const todoDetails = {
  //     name: "Party tonight!",
  //     description: "Amplify CLI rocks!"
  //   };

  //   const newTodo = await API.graphql(graphqlOperation(addTodo, todoDetails));
  //   alert(JSON.stringify(newTodo));
  // };

  // listQuery = async () => {
  //   console.log("listing todos");
  //   const allTodos = await API.graphql(graphqlOperation(listTodos));
  //   alert(JSON.stringify(allTodos));
  // };

  const handleOpenAddTodoModal = () => {
    setOpen(true);
  }

  const handleCloseAddTodoModal = () => {
    setOpen(false);
  }

  return (
    <Fragment>
      <Navigation />
      <TodoContainer open={open}/>
      {/* <div className="App">

          <p> Click a button </p>
          <button onClick={this.listQuery}>GraphQL List Query</button>
          <button onClick={this.todoMutation}>GraphQL Todo Mutation</button>
        </div> */}
      <AddTodoButton handleOpenAddTodoModal={handleOpenAddTodoModal} />
      <AddTodo open={open} handleCloseAddTodoModal={handleCloseAddTodoModal} />
    </Fragment>
  );
}

export default App;