import React from "react";
import Todo from "./Todo";

export default function GroupTodo({ todos, dispatch }) {
  const handleDelete = (todoId) => {
    const action = {
      type: "delete",
      payload: todoId,
    };
    dispatch(action);
  };
  const handleToogleCompleted = (todoId) => {
    const action = {
      type: "toogle",
      payload: todoId,
    };
    dispatch(action);
  };
  return (
    <>
      <ol className="list-group list-group-numbered">
        {todos.length >= 1 ? (
          todos.map((todo) => (
            <Todo
              key={todo.id}
              handleToogleCompleted={handleToogleCompleted}
              handleDelete={handleDelete}
              todo={todo}
            />
          ))
        ) : (
          <div className="alert alert-info" role="alert">
            No more homework
          </div>
        )}
      </ol>
    </>
  );
}
