import logo from "./logo.svg";
import "./App.scss";
import "./views/Navigation/Nav";
import Nav from "./views/Navigation/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>Welcome to react-hooks</h3>
      </header>
    </div>
  );
}

export default App;
