import { dispatch } from "redux-shiga";
import { reduce, sortBy, times, take } from "lodash/fp";
import opt from "../../../utils/opt";
import { fetch, loading, success, fail } from "./actions";
import axios from "../../../utils/axios";

const concatResultsAndTakeTopTen = (results) =>
  results
  |> reduce((acc, cur) => [...acc, ...cur.data], [])
  |> sortBy((repo) => repo.stargazers_count * -1)  // DESC
  |> take(10);

const option = opt`
  visibility=public
  &per_page=100
  &sort=updated
  &direction=asc
`;

const path = `/users/maxmellon/repos?${option}`;

export default function fetchReposShiga(onAsync) {
  onAsync(fetch, async () => {
    await dispatch(loading.start());
    try {
      const results = await Promise.all(
        times((i) => axios.get(`${path}&page=${i + 1}`), 3)
      );
      const result = concatResultsAndTakeTopTen(results);
      await dispatch(success(result));
    } catch (err) {
      await dispatch(fail(err));
    }
    await dispatch(loading.end());
  });
}
