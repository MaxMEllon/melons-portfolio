import { handleActions, Reducer, Action } from 'redux-actions';
import { loading, success, fail } from './actions';

export type Repo = {
  id: number | string,
};

export type State = {
  model: {
    repos: Array<Repo>,
  },
  meta: {
    loading: boolean,
    error: Error | null,
  },
};

export const defaultState: State = {
  model: {
    repos: [],
  },
  meta: {
    loading: false,
    error: null,
  },
};

export const reducer: Reducer<State, State> = handleActions<any>(
  {
    [success]: (state: State, { payload }: Action<Repo[]>) => ({
      ...state,
      model: {
        ...state.model.repos,
        repos: [...(payload || [])],
      },
    }),
    [fail]: (state: State, { payload }: Action<Error>) => ({
      ...state,
      meta: {
        ...state.meta,
        error: payload,
      },
    }),
    [loading.start]: (state: State) => ({
      ...state,
      meta: {
        ...state.meta,
        loading: true,
      },
    }),
    [loading.end]: (state: State) => ({
      ...state,
      meta: {
        ...state.meta,
        loading: false,
      },
    }),
  },
  defaultState,
);
