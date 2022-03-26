import "../Navigation/Nav.scss";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="topnav">
      <NavLink to="/" activeClassName="active" className="home" exact={true}>
        Home
      </NavLink>
      <NavLink to="/todo" activeClassName="active">
        Todo App
      </NavLink>
      <NavLink to="/check-covid" activeClassName="active">
        Checking Covid App
      </NavLink>
    </div>
  );
};

export default Nav;
