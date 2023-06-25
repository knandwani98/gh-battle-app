import React, { Component } from "react";
import Battle from "./Battle";

class Homepage extends Component {
  constructor(props) {
    super();

    this.state = {
      playerOne: {
        input: "",
        isSubmit: false,
      },

      playerTwo: {
        input: "",
        isSubmit: false,
      },
    };
  }

  handleClose = (player) => {
    this.setState({
      [player]: { input: "", isSubmit: false },
    });
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState((prevState) => ({
      [name]: { ...prevState[name], input: value },
    }));
  };

  handleSubmit = (player) => {
    this.setState({
      [player]: { ...this.state[player], isSubmit: true },
    });
  };

  handleBattle = () => {
    this.setState({
      battleOn: true,
    });
  };

  render() {
    return (
      <Battle
        state={this.state}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleClose={this.handleClose}
      />
    );
  }
}

export default Homepage;
