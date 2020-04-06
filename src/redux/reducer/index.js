import { LANGUAGE_DS } from "redux/constants/action-types";

export const initialState = {
  language_ds: {}
};

export function rootReducer(state = initialState, action) {
  if (action.type === LANGUAGE_DS) {
    return Object.assign({}, state, {
      language_ds: action.payload
    });
  }

  return state;
}
