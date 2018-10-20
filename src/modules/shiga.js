import { fetchReposShiga } from './redux/github'

export default function rootShiga(onAsync) {
  fetchReposShiga(onAsync)
}