import { LANGUAGE_DS } from "../constants/action-types";

export function updateLanguageDS(lang) {
  return function(dispatch) {
    return fetch('https://maria-cv.s3.us-east-2.amazonaws.com/' + lang)
      .then(response => response.json())
      .then(json => {
        return dispatch({ type: LANGUAGE_DS, payload: json });
      });
  };
}