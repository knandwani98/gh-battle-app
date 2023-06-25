import React, { Component } from "react";
import ScoreCard from "./ScoreCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import Loader from "./Loader";

class Scores extends Component {
  constructor(props) {
    super();

    this.state = {
      playerOne: null,
      playerTwo: null,
    };
  }

  handleFetch = (title) => {
    const search = this.props.location.search;
    const player = new URLSearchParams(search).get(title);

    let url = "https://api.github.com/users/" + player;

    fetch(url)
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          [title]: {
            ...data,
            scores:
              data.followers * 20 - data.following * 5 + data.public_repos,
            result: "loser",
          },
        })
      );
  };

  calculateScores = (playerOne, playerTwo) => {
    let isWinner =
      playerOne.scores > playerTwo.scores ? "playerOne" : "playerTwo";

    this.setState({
      [isWinner]: { ...this.state[isWinner], result: "winner" },
    });
  };

  componentDidMount() {
    this.handleFetch("playerOne");
    this.handleFetch("playerTwo");
  }

  render() {
    if (!this.state.playerOne || !this.state.playerTwo) {
      return <Loader />;
    }

    const { playerOne, playerTwo } = this.state;
    this.calculateScores(playerOne, playerTwo);

    return (
      <>
        <div className="scores flex container">
          <ScoreCard result="" player={this.state.playerOne} />

          <ScoreCard result="" player={this.state.playerTwo} />
        </div>

        <div className="reset flex">
          <Link className="battle-btn" to={"/battle"}>
            Reset
          </Link>
        </div>
      </>
    );
  }
}

export default Scores;
