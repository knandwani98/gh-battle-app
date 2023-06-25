import React, { Component } from "react";
import Card from "./Card";
import Loader from "./Loader";

class Main extends Component {
  render() {
    if (!this.props.state.data) {
      return <Loader />;
    }

    return (
      <main>
        <section className="grid all-cards">
          {this.props.state.data.map((person, i) => {
            return <Card rank={i} key={person.id} person={person} />;
          })}
        </section>
      </main>
    );
  }
}

export default Main;
