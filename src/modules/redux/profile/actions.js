import { createActions } from 'redux-actions';

const undf = void 0;

export const {
  profile: { fetch, fail, success, loading },
} = createActions({
  PROFILE: {
    LOADING: {
      START: undf,
      END: undf,
    },
    FETCH: undf,
    SUCCESS: undf,
    FAIL: [undf, () => ({ error: true })],
  },
});
