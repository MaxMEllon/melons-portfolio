import { createSelector } from "reselect";

const getGithubLoading = (state) => state.github.meta.loading;

const loadingSelector = createSelector(
  [getGithubLoading],
  (...loadingStateList) => loadingStateList.some(Boolean)
);

export default loadingSelector;
