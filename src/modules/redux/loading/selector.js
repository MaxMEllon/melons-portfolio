import { createSelector } from 'reselect';

const getGithubLoading = (state) => state.github.meta.loading;
const getProfileLoading = (state) => state.profile.meta.loading;

const loadingSelector = createSelector(
  [getGithubLoading, getProfileLoading],
  (...loadingStateList) => loadingStateList.some(Boolean)
);

export default loadingSelector;
