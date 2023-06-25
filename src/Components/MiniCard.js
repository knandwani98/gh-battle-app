import React, { Component } from "react";

class MiniCard extends Component {
  constructor(props) {
    super();
    this.state = {
      dp: "",
    };
  }

  componentDidMount() {
    const { player, state } = this.props;

    let url = "https://api.github.com/users/" + state[player].input;
    fetch(url)
      .then((res) => res.json())
      .then((person) => this.setState({ dp: person.avatar_url }));
  }

  render() {
    const { handleClose, player, state } = this.props;
    return (
      <div className="mini-card flex">
        <div className="flex">
          <img src={this.state.dp} alt={player} />
          <h2>{state[player].input}</h2>
        </div>
        <button onClick={() => handleClose(player)} className="cross-btn">
          X
        </button>
      </div>
    );
  }
}

export default MiniCard;
