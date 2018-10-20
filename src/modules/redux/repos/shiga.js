import { dispatch } from "redux-shiga";
import axios from "axios";
import { fetch, loading, success, fail } from './actions'

const BaseURL = 'http://api.github.com'
const url = (path) => `${BaseURL}${path}`

export default function fetchReposShiga(onAsync) {
  onAsync(fetch, async () => {
    await dispatch(loading.start())
    try {
      const result = await axios.get(url("/users/maxmellon/repos"));
      await dispatch(success(result));
    } catch (err) {
      await dispatch(fail(err));
    }
    await dispatch(loading.end())
  });
}