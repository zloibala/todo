import React, { useState } from "react";

import "./toDoApp.style.css";
import SingleToDo from "../../singleToDo/SingleToDo";
import ToDoInput from "../../todoInput/ToDoInput";

const defaultToDo = [
  "90 min of practice",
  "Clean up the room",
  "English class",
];

const ToDoApp = () => {
  const [todoList, setTodoList] = useState(defaultToDo);

  const addTodoHandler = (newTodo) => {
    setTodoList([...todoList, newTodo]);
  };

  return (
    <div className="todo-container">
      <div className="todo-box">
        <h1> To Do App</h1>
        <ToDoInput addTodoHandler={addTodoHandler} />
        <div className="todo-list">
          <h1> my todos:</h1>
          {todoList.map((el, index) => {
            return <SingleToDo todoText={el} key={index} />;
          })}
          {!todoList.length && (
            <p className="notes"> please, add your things todo</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToDoApp;
