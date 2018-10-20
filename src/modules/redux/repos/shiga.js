import axios from "axios";
import { setupCache } from "axios-cache-adapter";
import { dispatch } from "redux-shiga";
import { reduce, sortBy, times, take } from "lodash/fp";
import opt from "../../../utils/opt";
import { fetch, loading, success, fail } from "./actions";

const cache = setupCache({
  maxAge: 15 * 60 * 1000
});

const request = axios.create({
  adapter: cache.adapter,
  baseURL: "https://api.github.com",
  headers: {
    Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`
  }
});

const option = opt`
  visibility=public
  &per_page=100
  &sort=updated
  &direction=asc
`;

const concatResultsAndTakeTopTen = results =>
  results
  |> reduce((acc, cur) => [...acc, ...cur.data], [])
  |> sortBy(repo => repo.stargazers_count * -1)  // DESC
  |> take(10);

export default function fetchReposShiga(onAsync) {
  onAsync(fetch, async () => {
    await dispatch(loading.start());
    try {
      const path = "/users/maxmellon/repos";
      const results = await Promise.all(
        times(i => request.get(`${path}?${option}&page=${i + 1}`), 3)
      );
      const result = concatResultsAndTakeTopTen(results);
      await dispatch(success(result));
    } catch (err) {
      await dispatch(fail(err));
    }
    await dispatch(loading.end());
  });
}
