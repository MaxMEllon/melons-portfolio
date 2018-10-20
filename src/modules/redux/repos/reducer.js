import { handleActions } from 'redux-actions'
import { loading, success, fail } from './actions'

export const defaultState = {
  model: {
    repos: null,
  },
  meta: {
    loading: false,
    error: false,
  },
};

export const reducer = handleActions(
  {
    [success]: (state, action) => ({
      ...state,
      model: {
        ...state.repos,
        repos: action.payload,
      },
    }),
    [fail]: (state, action) => ({
      ...state,
      meta: {
        ...state.meta,
        error: action.payload,
      },
    }),
    [loading.start]: (state, action) => ({
      ...state,
      meta: {
        ...state.meta,
        loading: true,
      },
    }),
    [loading.end]: (state, action) => ({
      ...state,
      meta: {
        ...state.meta,
        loading: false,
      },
    }),
  },
  defaultState
);