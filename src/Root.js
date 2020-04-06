import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/index";
import { Router } from "react-router-dom";

export default props => {
  return <Provider store={store}>{props.children}</Provider>;
};
