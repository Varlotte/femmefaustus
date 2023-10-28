import { NavLink } from '@remix-run/react';
import { $active, $link, $root } from './Nav.css';

export default function Nav() {
  return (
    <nav className={$root}>
      <NavLink
        to="/"
        prefetch="intent"
        className={({ isActive }) => (isActive ? $active : $link)}
      >
        home
      </NavLink>
      <NavLink
        to="/work"
        prefetch="intent"
        className={({ isActive }) => (isActive ? $active : $link)}
      >
        work
      </NavLink>
    </nav>
  );
}
