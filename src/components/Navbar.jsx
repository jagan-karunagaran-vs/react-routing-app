import { NavLink } from "react-router-dom";
import "../styles/Navbar.css";

function Navbar() {
  return (
    <nav>
      <NavLink to="/" className="nav-brand">
        <span className="nav-brand-dot"></span>
        RouteFlow
      </NavLink>

      <div className="nav-links">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/users">Users</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;