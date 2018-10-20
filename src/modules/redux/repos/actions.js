import { createActions } from 'redux-actions'

export const {
  github: {
    repos: {
      fetch,
      fail,
      success,
      loading,
    },
  },
} = createActions({
  GITHUB: {
    REPOS: {
      LOADING: {
        START: undefined,
        END: undefined,
      },
      FETCH: undefined,
      SUCCESS: undefined,
      FAIL: [undefined, () => ({ error: true })],
    },
  },
})