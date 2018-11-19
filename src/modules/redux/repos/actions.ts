import { createActions } from 'redux-actions'

const undf = void 0

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
        START: undf,
        END: undf,
      },
      FETCH: undf,
      SUCCESS: undf,
      FAIL: [undf, () => ({ error: true })],
    },
  },
})