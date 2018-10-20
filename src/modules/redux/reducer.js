import { combineReducers } from "redux";
import github, { defaultState as githubState } from "./github";

export const INITIAL_STATE = {
  github: githubState,
};

export default combineReducers({
  github,
});
