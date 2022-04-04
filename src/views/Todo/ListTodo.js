import { useState } from "react";

const ListTodo = (props) => {
  const { todos, deleteTodo, updateTodo } = props;
  const [edit, setEdit] = useState({
    id: null,
    title: "",
  });
  const [inputUpdate, setInputUpdate] = useState("");
  const handleOnChangeInputUpdate = (event) => {
    setInputUpdate(event.target.value);
  };
  const handleUpdateTodo = (id, value) => {
    updateTodo(id, value);
    setEdit({
      id: null,
      value: value,
    });
    setInputUpdate("");
  };
  const handleInputUpdate = (todo) => {
    setEdit(todo);
  };
  const handleDeleteTodo = (todo) => {
    deleteTodo(todo.id);
  };
  return (
    <div className="list-todo-container">
      <table className="table table-hover table-primary">
        <thead>
          <tr>
            <th>Number</th>
            <th>To do</th>
            <th>E/D</th>
          </tr>
        </thead>
        <tbody>
          {todos.map((todo, index) => {
            return (
              <tr key={todo.id}>
                <td>{index + 1}</td>
                {edit.id === null ? (
                  <>
                    <td className="todo-title">{todo.title}</td>
                    <td>
                      <button
                        className="button btn btn-primary"
                        onClick={() => handleInputUpdate(todo)}
                      >
                        Update
                      </button>
                      <button
                        className="button btn btn-danger"
                        onClick={() => handleDeleteTodo(todo)}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    {edit.id === todo.id ? (
                      <>
                        <td>
                          <input
                            type="text"
                            value={inputUpdate}
                            onChange={(event) =>
                              handleOnChangeInputUpdate(event)
                            }
                          />
                        </td>
                        <td>
                          <button
                            className="button btn btn-primary"
                            onClick={() =>
                              handleUpdateTodo(todo.id, inputUpdate)
                            }
                          >
                            Save
                          </button>
                          <button
                            className="button btn btn-danger"
                            onClick={() => handleDeleteTodo(todo)}
                          >
                            Delete
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td>{todo.title}</td>
                        <td>
                          <button
                            className="button btn btn-primary"
                            onClick={() => handleInputUpdate(todo)}
                          >
                            Update
                          </button>
                          <button
                            className="button btn btn-danger"
                            onClick={() => handleDeleteTodo(todo)}
                          >
                            Delete
                          </button>
                        </td>
                      </>
                    )}
                  </>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
