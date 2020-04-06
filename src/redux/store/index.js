import { createStore, applyMiddleware, compose } from "redux";
import { rootReducer } from "redux/reducer/index";
import thunk from "redux-thunk";
import { theMiddleware } from "redux/middleware/index";

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(theMiddleware, thunk))
);

export default store;
