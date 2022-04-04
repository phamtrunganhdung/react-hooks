import { useState } from "react";

import ListTodo from "./ListTodo";
import "../Todo/Todo.scss";

const Todo = () => {
  let [todos, setTodos] = useState([
    {
      id: "todo1",
      title: "Reading book",
    },
    {
      id: "todo2",
      title: "Learn React",
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
  const updateTodo = (todoID, newValue) => {
    let todosCopy = [...todos];
    let objIndex = todosCopy.findIndex((item) => item.id === todoID);
    todosCopy[objIndex].title = newValue;
    setTodos(todosCopy);
  };
  const deleteTodo = (id) => {
    todos = todos.filter((item) => item.id !== id);
    setTodos(todos);
  };

  return (
    <div className="todo-container">
      <h3>Todo App</h3>
      <input
        type="text"
        value={inputAddTodo}
        onChange={(e) => handleOnChangeInputAddTodo(e)}
        placeholder="Add new todo"
      />
      <button
        className="button btn btn-success"
        onClick={() => handleAddTodo()}
      >
        Add Todo
      </button>
      <ListTodo todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo} />
    </div>
  );
};

export default Todo;
