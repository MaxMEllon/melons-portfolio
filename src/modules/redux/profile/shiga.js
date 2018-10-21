import { dispatch } from 'redux-shiga';
import { fetch, fail, success, loading } from './actions';
import fetchProfile from './api';

export default function fetchProfileShiga(onAsync) {
  onAsync(fetch, async () => {
    await dispatch(loading.start());
    try {
      const result = await fetchProfile();
      await dispatch(success(result.data));
    } catch (err) {
      await dispatch(fail(err));
    }
    await dispatch(loading.end());
  });
}
