import React, { useEffect, useReducer } from "react";
import Form from "../components/Form";
import GroupTodo from "../components/GroupTodo";
import { todoReducer } from "../reducers/todoReducer";

const initialState = [
  {
    id: new Date().getTime(),
    title: "Learnig react",
    desc: "Study react hooks (useReducer)",
    completed: true,
  },
];

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || initialState;
};

function AppTodo() {
  const [todos, dispatch] = useReducer(todoReducer, [], init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="container">
      <h1>AppTodo ({todos.length})</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <Form dispatch={dispatch} />
        </div>
        <div className="col-7">
          <GroupTodo todos={todos} dispatch={dispatch} />
        </div>
      </div>
    </div>
  );
}

export default AppTodo;
