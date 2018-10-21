import { handleActions } from 'redux-actions';
import { fail, success, loading } from './actions';

export const defaultState = {
  model: {
    profile: null,
  },
  meta: {
    loading: false,
    error: null,
  },
};

export default handleActions(
  {
    [success]: (state, { payload }) => ({
      ...state,
      model: {
        ...state.profile,
        profile: payload,
      },
    }),
    [fail]: (state, { payload }) => ({
      ...state,
      meta: {
        ...state.meta,
        error: payload,
      },
    }),
    [loading.start]: (state) => ({
      ...state,
      meta: {
        ...state.meta,
        loading: true,
      },
    }),
    [loading.end]: (state) => ({
      ...state,
      meta: {
        ...state.meta,
        loading: false,
      },
    }),
  },
  defaultState
);
