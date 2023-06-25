import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import Scores from "./Components/Scores";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";
import {
  BrowserRouter,
  Route,
  Switch,
} from "react-router-dom/cjs/react-router-dom.min";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter basename="/gh-battle-app">
    <>
      <Header />
      <Switch>
        <Route exact path={"/battle"} component={Homepage} />
        <Route path={"/battle/results"} component={Scores} />
        <Route exact path={"/"} component={App} />
      </Switch>
    </>
  </BrowserRouter>
);
