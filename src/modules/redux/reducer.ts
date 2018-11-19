import { combineReducers } from 'redux';
import github, { defaultState as githubState, State as GithubState } from './repos';
import profile, { defaultState as profileState } from './profile'

export type State = {
  github: GithubState,
  profile: any,
}

export const INITIAL_STATE = Object.freeze({
  github: githubState,
  profile: profileState,
});

export default combineReducers({
  github,
  profile,
});
