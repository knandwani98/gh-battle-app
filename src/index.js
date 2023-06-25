import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import Scores from "./Components/Scores";
import {
  BrowserRouter,
  Route,
} from "react-router-dom/cjs/react-router-dom.min";
import Header from "./Components/Header";
import Homepage from "./Components/Homepage";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <>
      <Header />
      <Route path={"/battle"} exact component={Homepage} />
      <Route path={"/battle/results"} component={Scores} />
      <Route path={"/"} component={App} />
    </>
  </BrowserRouter>
);
