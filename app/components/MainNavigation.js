import { NavLink } from "@remix-run/react";

function MainNavigation() {
  return (
    <nav id="main-navigation">
      <ul>
        <li className="nav-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/music">My Music</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default MainNavigation;
