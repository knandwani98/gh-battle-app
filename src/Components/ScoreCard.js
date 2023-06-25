import React, { Component } from "react";

class ScoreCard extends Component {
  constructor(props) {
    super();
  }

  render() {
    const { player } = this.props;

    return (
      <div className="score-card">
        <h1 className={player.result === "winner" ? "winner" : ""}>
          {player.result}
        </h1>
        <img src={player.avatar_url} alt={""} />
        <strong>
          Scores: <span>{player.scores}</span>
        </strong>
        <a className="login" href={"https://github.com/" + player.login}>
          {player.login}
        </a>
        <ul>
          <li className="name">
            <span>
              <i className="fa-solid fa-user"></i>
            </span>
            {player.name}
          </li>
          <li className="followers">
            <span>
              <i className="fa-solid fa-users"></i>
            </span>
            {player.followers} followers
          </li>
          <li className="following">
            <span>
              <i className="fa-solid fa-user-plus"></i>
            </span>
            {player.following} following
          </li>
          <li className="repo">
            <span>
              <i className="fa-solid fa-code"></i>
            </span>
            {player.public_repos} repositories
          </li>
        </ul>
      </div>
    );
  }
}

export default ScoreCard;
