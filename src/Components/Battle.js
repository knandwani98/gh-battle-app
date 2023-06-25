import React from "react";

import Miniform from "./Miniform";
import MiniCard from "./MiniCard";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Battle = ({ state, handleChange, handleSubmit, handleClose }) => {
  return (
    <main className="battle container">
      <section className="box-container">
        <h3>Instruction</h3>
        <div className="cta grid ">
          <div className="users icon">
            <h2>Enter Two GitHub User</h2>
            <span>
              <i className="fa-solid fa-users"></i>
            </span>
          </div>
          <div className="jet icon">
            <h2>Battle</h2>
            <span>
              <i className="fa-solid fa-jet-fighter-up"></i>
            </span>
          </div>
          <div className="icon trophy">
            <h2>See the Winner</h2>
            <span>
              <i className="fa-solid fa-trophy"></i>
            </span>
          </div>
        </div>
      </section>

      <section className="players">
        <h3>Players</h3>
        <div className="gh-accounts grid">
          {/* Player One */}
          <div>
            <h4>Player One</h4>
            {!state.playerOne.isSubmit ? (
              <Miniform
                name={"playerOne"}
                state={state}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            ) : (
              <MiniCard
                state={state}
                player={"playerOne"}
                handleClose={handleClose}
              />
            )}
          </div>

          {/* Player Two */}
          <div>
            <h4>Player Two</h4>

            {!state.playerTwo.isSubmit ? (
              <Miniform
                name={"playerTwo"}
                state={state}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
              />
            ) : (
              <MiniCard
                state={state}
                player={"playerTwo"}
                handleClose={handleClose}
              />
            )}
          </div>
        </div>

        {state.playerOne.isSubmit && state.playerTwo.isSubmit ? (
          <Link
            to={`/battle/results?playerOne=${state.playerOne.input}&playerTwo=${state.playerTwo.input}`}
            className="battle-btn"
          >
            Battle
          </Link>
        ) : (
          ""
        )}
      </section>
    </main>
  );
};

export default Battle;
