import React from "react";
import "./singleToDo.style.css";

const SingleToDo = (props) => {
  return (
    <div>
      <div className="single-todo">
        <h2>{props.todoText}</h2>
        <button> DONE </button>
        <button> PENDING </button>
    </div>
    </div> 
  );
};

export default SingleToDo;
