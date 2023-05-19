import React, { useState } from "react";
import "./todoInput.style.css";

const ToDoInput = (props) => {
  const [currentTodo, setCurrentTodo] = useState("");

  const onChangeHandler = (e) => {
    setCurrentTodo(e.target.value);
  };

  const onClickHandler = () => {
    props.addTodoHandler(currentTodo);
    setCurrentTodo(""); // reset the text at the button
  };
  return (
    <div>
      <input
        placeholder="Enter your todos"
        onChange={onChangeHandler}
        value={currentTodo}
      />

      <button onClick={onClickHandler}> ADD </button>
    </div>
  );
};

export default ToDoInput;
