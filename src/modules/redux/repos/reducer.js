import { handleActions } from "redux-actions";
import { loading, success, fail } from "./actions";

export const defaultState = {
  model: {
    repos: null
  },
  meta: {
    loading: false,
    error: false
  }
};

export const reducer = handleActions(
  {
    [success]: (state, { payload }) => ({
      ...state,
      model: {
        ...state.repos,
        repos: [...payload]
      }
    }),
    [fail]: (state, { payload }) => ({
      ...state,
      meta: {
        ...state.meta,
        error: payload
      }
    }),
    [loading.start]: state => ({
      ...state,
      meta: {
        ...state.meta,
        loading: true
      }
    }),
    [loading.end]: state => ({
      ...state,
      meta: {
        ...state.meta,
        loading: false
      }
    })
  },
  defaultState
);
