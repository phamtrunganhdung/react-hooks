const ListTodo = (props) => {
  const { todos, deleteTodo } = props;
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
                <td>{todo.title}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDeleteTodo(todo)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListTodo;
