import React from "react";

let languages = ["All", "JavaScript", "React", "ExpressJS", "NodeJS"];

const Nav = ({ state, handleMenu }) => {
  return (
    <nav className="main-nav container">
      <ul className="flex">
        {languages.map((lang) => {
          return (
            <li key={lang}>
              <button
                onClick={() => handleMenu(lang)}
                className={state.lang === lang ? "active " : ""}
              >
                {lang}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Nav;
