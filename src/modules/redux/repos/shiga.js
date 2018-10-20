import axios from "axios";
import { dispatch } from "redux-shiga";
import { flow, reduce, sortBy, times, take } from 'lodash/fp'
import opt from '../../../utils/opt'
import { fetch, loading, success, fail } from './actions'

const request = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `bearer ${process.env.GITHUB_API_TOKEN}`,
  },
})

const option = opt`
  visibility=public
  &per_page=100
  &sort=updated
  &direction=asc
`

const concatResultsAndTakeTopTen = flow(
  reduce((acc, cur) => [...acc, ...cur.data], []),
  sortBy((repo) => repo.stargazers_count * -1),
  take(10),
)

export default function fetchReposShiga(onAsync) {
  onAsync(fetch, async () => {
    await dispatch(loading.start())
    try {
      const results = await Promise.all(times((i) => request.get(`/users/maxmellon/repos?${option}&page=${i+1}`), 3))
      const result = concatResultsAndTakeTopTen(results)
      await dispatch(success(result));
    } catch (err) {
      await dispatch(fail(err));
    }
    await dispatch(loading.end())
  });
}