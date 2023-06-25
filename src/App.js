import React, { Component } from "react";
import Nav from "./Components/Nav";
import Main from "./Components/Main";

class App extends Component {
  constructor() {
    super();
    this.state = {
      lang: "All",
      url: "https://api.github.com/search/repositories?q=stars:%3E1+language:All&sort=stars&order=desc&type=Repositories",
      data: null,
    };
  }

  handleMenu = (lang) => {
    return this.setState({
      lang: lang,
      url:
        "https://api.github.com/search/repositories?q=stars:%3E1+language:" +
        lang +
        "&sort=stars&order=desc&type=Repositories",
    });
  };

  handleFetch = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.items }));
  };

  componentDidMount() {
    this.handleFetch(this.state.url);
  }

  componentDidUpdate(prevProp, prevState) {
    if (prevState.url !== this.state.url) {
      this.setState({ data: null });
      return this.handleFetch(this.state.url);
    }
    return;
  }

  render() {
    return (
      <>
        <Nav handleMenu={this.handleMenu} state={this.state} />
        <Main state={this.state} />
      </>
    );
  }
}

export default App;
