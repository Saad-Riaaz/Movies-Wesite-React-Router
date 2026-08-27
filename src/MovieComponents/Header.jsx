import { NavLink } from "react-router-dom";
import { Search } from "../Pages/Search";

export const Header = () => {
  return (
    <header>

      {/* LOGO */}
      <div className="logo">
        <NavLink to="/">
          <span className="logoIcon">▶</span>
          <span className="logoText">Cine<span>Verse</span></span>
        </NavLink>
      </div>

      <div className="Content1">

        <NavLink
          to="/Login"
          className={({ isActive }) => isActive ? "red" : ""}
        >
          <li>Login</li>
        </NavLink>

        <NavLink
          to="/Signup"
          className={({ isActive }) => isActive ? "red" : ""}
        >
          <li>SignIn</li>
        </NavLink>

      </div>

      <div className="Content2">

        <NavLink
          to="/"
          className={({ isActive }) => isActive ? "red" : ""}
        >
          <li>Home</li>
        </NavLink>

        <NavLink
          to="/Genres"
          className={({ isActive }) => isActive ? "red" : ""}
        >
          <li>Movies</li>
        </NavLink>

        <NavLink
          to="/GenresDetail"
          className={({ isActive }) => isActive ? "red" : ""}
        >
          <li>Genres</li>
        </NavLink>

        <NavLink
          to="/Contact"
          className={({ isActive }) => isActive ? "red" : ""}
        >
          <li>Contact</li>
        </NavLink>

      </div>

      <Search />

    </header>
  );
};