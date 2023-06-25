import React from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";

const Header = () => {
  return (
    <header className="header ">
      <div className="container flex">
        <nav className="header-nav">
          <ul className="flex">
            <li>
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                exact
                to={"/"}
              >
                Popular
              </NavLink>
            </li>
            <li>
              <NavLink
                activeClassName="nav-active"
                className="nav-link"
                to={"/battle"}
              >
                Battle
              </NavLink>
            </li>
          </ul>
        </nav>
        <div></div>
      </div>
    </header>
  );
};

export default Header;
