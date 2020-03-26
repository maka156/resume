import { LANGUAGE_DS } from "../constants/action-types";

const initialState = {
  language_ds: {}
};

function rootReducer(state = initialState, action) {
  if (action.type === LANGUAGE_DS) {
    return Object.assign({}, state, {
      language_ds: action.payload
    });
  }

  return state;
}

export default rootReducer;