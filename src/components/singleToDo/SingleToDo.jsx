import React from "react";
import "./singleToDo.style.css";

const SingleToDo = (props) => {
  return (
    <div className="single-todo">
      <h2>{props.todoText}</h2>
      <button> DONE </button>
      <button> PENDING </button>
    </div>
  );
};

export default SingleToDo;
