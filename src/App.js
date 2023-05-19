import "./App.css";
import "./components/container/todoApp/ToDoApp";
import ToDoApp from "./components/container/todoApp/ToDoApp";
import "./components/singleToDo/SingleToDo";

function App() {
  return (
    <div className="main-container">
      <ToDoApp />
    </div>
  );
}

export default App;
