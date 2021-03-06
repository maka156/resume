import { LANGUAGE_DS } from "redux/constants/action-types";

export function updateLanguageDS(payload) {
  const lang = payload === "es" ? "cv-es.json" : "cv-en.json";
  return function(dispatch) {
    return fetch("https://maria-cv.s3.us-east-2.amazonaws.com/" + lang)
      .then(response => response.json())
      .then(json => {
        return dispatch({ type: LANGUAGE_DS, payload: json });
      });
  };
}
