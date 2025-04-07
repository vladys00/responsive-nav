import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  return (
    <header>
      <nav>
        <ul>
          <NavLink to="/">Main</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/work">Work</NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default NavBar;
