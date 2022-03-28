import React, { useState, useRef } from "react";
import useForm from "../hooks/useForm";
import Alert from "./Alert";

export default function Form({ dispatch }) {
  const [formValues, handleInputsChange, resetForm] = useForm({
    id: new Date().getTime(),
    title: "",
    desc: "",
    completed: false,
  });
  const [stateAlert, setViewAlert] = useState({
    viewAlert: false,
    messageAlert: "Fill inputs",
    color: "dark",
  });
  const inputRef = useRef(null);
  const { viewAlert, messageAlert, color } = stateAlert;
  const { title, desc } = formValues;

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length <= 1 || desc.trim().length <= 1) {
      setViewAlert({
        ...stateAlert,
        viewAlert: true,
      });
      return;
    }

    const action = {
      type: "add",
      payload: formValues,
    };
    dispatch(action);
    setViewAlert({
      ...stateAlert,
      viewAlert: false,
    });
    resetForm();
  };

  const something = (event) => {
    if (event.keyCode === 13) {
      handleFormSubmit(event);
      inputRef.current.focus();
    }
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        {viewAlert && <Alert text={messageAlert} color={color} />}
        <div className="mb-3">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Title
          </label>
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            value={title}
            name="title"
            onChange={handleInputsChange}
            placeholder="Ingrese su nombre completo"
            autoComplete="off"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            Description
          </label>
          <textarea
            className="form-control"
            value={desc}
            name="desc"
            rows="3"
            onChange={handleInputsChange}
            onKeyDown={(e) => something(e)}
            autoComplete="off"
          ></textarea>
        </div>
        <div className="mb-3">
          <button type="submit" className="btn btn-outline-success">
            AddTodo
          </button>
        </div>
      </form>
    </>
  );
}
