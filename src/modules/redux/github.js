import { createActions, handleActions } from "redux-actions";
import { axios } from "axios";
import { dispatch } from "redux-shiga";

export const defaultState = {
  model: {
    repos: null,
  },
  meta: {
    loading: false,
  },
};

const fetchRepos = createActions("GITHUB/FETCH_REPOS");
const successFetchRepos = createActions("GITHUB/FETCH_REPOS/SUCCESS");
const failFetchRepos = createActions("GITHUB/FETCH_REPOS/FAIL");

export function fetchReposShiga(onAsync) {
  onAsync(fetchRepos.type, async () => {
    try {
      const result = await axios.get(
        "https://api.github.com/user/maxmellon/repos"
      );
      await dispatch(successFetchRepos(result.data));
    } catch (err) {
      await dispatch(failFetchRepos(err));
    }
  });
}

const reducer = handleActions(
  {
    [successFetchRepos.type]: (state, action) => ({
      model: {
        repos: { ...action.payload },
      },
      meta: {
        loading: false,
      },
    }),
  },
  defaultState
);

export default reducer;
