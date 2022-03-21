import logo from "./logo.svg";
import "./App.scss";
import "./views/Navigation/Nav";
import Nav from "./views/Navigation/Nav";
import { useState } from "react";

const App = () => {
  let [title, setTitle] = useState("Hello world");
  const [titleInput, setTitleInput] = useState("");
  const handleSetTile = () => {
    setTitle(titleInput);
    setTitleInput("");
  };
  const handleInputTitle = (event) => {
    setTitleInput(event.target.value);
  };
  return (
    <div className="App">
      <Nav />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h3>{title}</h3>

        <input
          type="text"
          value={titleInput}
          onChange={(e) => handleInputTitle(e)}
          placeholder="enter title"
        />
        <br />
        <button onClick={() => handleSetTile()}>Set Title</button>
      </header>
    </div>
  );
};

export default App;
