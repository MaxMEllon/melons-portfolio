import { combineReducers } from "redux";
import github, { defaultState as githubState } from "./repos/index";

export const INITIAL_STATE = {
  github: githubState,
};

export default combineReducers({
  github,
});
