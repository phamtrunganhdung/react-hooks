import logo from "./logo.svg";
import "./App.scss";
import "./views/Navigation/Nav";
import Nav from "./views/Navigation/Nav";
import { useState } from "react";

const App = () => {
  let [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "Reading book",
    },
    {
      id: "todo2",
      title: "Playing game",
    },
    {
      id: "todo3",
      title: "Playing soccer",
    },
  ]);
  const [inputAddTodo, setInputAddTodo] = useState("");
  const handleAddTodo = () => {
    let newTodo = {
      id: "todo" + Math.floor(Math.random() * 10000),
      title: inputAddTodo,
    };

    if (!inputAddTodo) {
      alert("empty data");
      return;
    }
    setTodos([...todos, newTodo]);
    setInputAddTodo("");
  };
  const handleOnChangeInputAddTodo = (event) => {
    setInputAddTodo(event.target.value);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>React Hooks</h3>
        <div className="todo-container">
          {todos.map((todo) => {
            return (
              <li className="todo-child" key={todo.id}>
                {todo.title}
              </li>
            );
          })}
        </div>
        <input
          type="text"
          value={inputAddTodo}
          onChange={(e) => handleOnChangeInputAddTodo(e)}
          placeholder="Add new todo"
        />
        <br />
        <button onClick={() => handleAddTodo()}>Add Todo</button>
      </header>
    </div>
  );
};

export default App;
