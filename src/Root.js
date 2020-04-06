import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store/index";

export default props => {
  return <Provider store={store}>{props.children}</Provider>;
};
