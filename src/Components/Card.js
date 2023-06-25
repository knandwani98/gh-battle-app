import React from "react";

const Card = ({ person, rank }) => {
  return (
    <div className="card">
      <h2 className="rank">#{rank + 1}</h2>
      <img src={person.owner.avatar_url} alt="" />
      <a href={`https://github.com/` + person.html_url} className="name">
        {person.owner.login}
      </a>

      <ul>
        <li className="bold">
          <span className="icon user">
            <i className="fa-solid fa-user"></i>
          </span>
          {person.owner.login}
        </li>
        <li>
          <span className="icon star">
            <i className="fa-solid fa-star"></i>
          </span>
          {person.stargazers_count} stars
        </li>
        <li>
          <span className="icon branch">
            <i className="fa-solid fa-code-branch"></i>
          </span>
          {person.forks_count} forks
        </li>
        <li>
          <span className="icon error">
            <i className="fa-solid fa-triangle-exclamation"></i>
          </span>
          {person.open_issues_count} open issues
        </li>
      </ul>
    </div>
  );
};

export default Card;
