import React from "react";
import ReactDOM from "react-dom";
//import { Provider } from "react-redux";
import store from "./redux/store/index";
import Root from "Root";
import { Router } from "react-router-dom";
import Main from "./main.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Root store={store}>
    <Router history={history}>
      <Main />
    </Router>
  </Root>,
  document.getElementById("root")
);
