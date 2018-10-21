import { combineReducers } from 'redux';
import github, { defaultState as githubState } from './repos';
import profile, { defaultState as profileState } from './profile'

export const INITIAL_STATE = Object.freeze({
  github: githubState,
  profile: profileState,
});

export default combineReducers({
  github,
  profile,
});
