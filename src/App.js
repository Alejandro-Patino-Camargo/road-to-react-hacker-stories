import * as React from "react";
import TodoList from "./todoList.js";
import AddTodoForm from "./AddTodoForm.js";

function App() {
  return (
    <div>
      <h1>My Hacker Stories</h1>
      <AddTodoForm />
      <TodoList />
      <hr />
    </div>
  );
}

export default App;
