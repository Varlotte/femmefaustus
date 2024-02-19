import { NavLink } from "react-router-dom";
import { $active, $link, $root } from "./nav.css.ts";

export default function Nav() {
  return (
    <nav className={$root}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? $active : $link)}
      >
        home
      </NavLink>
      <NavLink
        to="/work"
        className={({ isActive }) => (isActive ? $active : $link)}
      >
        art
      </NavLink>
    </nav>
  );
}
