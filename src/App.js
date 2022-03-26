import logo from "./logo.svg";
import "./App.scss";
import "./views/Navigation/Nav";
import Nav from "./views/Navigation/Nav";
import Todo from "./views/Todo/Todo";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>React Hooks Basic</h1>
        <Todo />
      </header>
    </div>
  );
};

export default App;
