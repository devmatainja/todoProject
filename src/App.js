import React, { Fragment, useState } from "react";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { Auth, API, graphqlOperation } from "aws-amplify";
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

const App = (props) => {
  const [open, setOpen] = useState(false);

  const handleOpenAddTodoModal = () => {
    setOpen(true);
  }

  const handleCloseAddTodoModal = () => {
    setOpen(false);
  }

  console.log(props);
  
  return (
    <Fragment>
      <Navigation />
      <TodoContainer open={open} />
      <AddTodoButton handleOpenAddTodoModal={handleOpenAddTodoModal} />
      <AddTodo open={open} handleCloseAddTodoModal={handleCloseAddTodoModal} />
    </Fragment>
  );
}

export default withAuthenticator(App, true);