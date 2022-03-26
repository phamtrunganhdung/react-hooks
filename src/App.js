import logo from "./logo.svg";
import "./App.scss";
import "./views/Navigation/Nav";
import Nav from "./views/Navigation/Nav";
import Todo from "./views/Todo/Todo";
import Home from "./views/Home/Home";
import CheckCovid from "./views/CheckingCovid/CheckCovid";
import { BrowserRouter, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Nav />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>React Hooks Basic</h1>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/todo">
              <Todo />
            </Route>
            <Route path="/check-covid" exact>
              <CheckCovid />
            </Route>
          </Switch>
        </header>
      </div>
    </BrowserRouter>
  );
};

export default App;
