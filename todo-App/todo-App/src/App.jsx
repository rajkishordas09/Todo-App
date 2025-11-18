import "./App.css";

import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import AppName from "./components/AppName";
function App() {

const todoList=[
  {
    dueDate:"2/3/2",
    name:"reading"
  },
  {
    dueDate:"2/3/2",
    name:"writing"
  },
  {
    dueDate:"2/3/2",
    name:"sleeping"
  }
]

  return (
    <>
      <center className="todo-container">
        <AppName/>
        <AddTodo ></AddTodo>
        <div className="todo-item">
          <TodoItems todoItems={todoList}/>
        
        </div>
      </center>
    </>
  );
}

export default App;
