import React from "react";

export default function Todo({ todo, handleDelete, handleToogleCompleted }) {
  const { id, title, desc, completed } = todo;

  return (
    <>
      <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
          <div
            className={`fw-bold ${completed && "text-decoration-line-through"}`}
          >
            {title}
          </div>
          <span className={`${completed && "text-decoration-line-through"}`}>
            {desc}
          </span>
        </div>

        <input
          className="form-check-input p-3 bg-primary rounded-pill  "
          style={{ cursor: "pointer" }}
          type="checkbox"
          onChange={() => handleToogleCompleted(id)}
          checked={completed}
          id="flexCheckChecked"
        />
        <button
          className={`btn ms-3 btn-outline-danger  ${
            !completed && "visually-hidden"
          }`}
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </li>
    </>
  );
}
