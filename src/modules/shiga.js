import { fetchReposShiga } from "./redux/repos/index";

export default function rootShiga(onAsync) {
  fetchReposShiga(onAsync);
}
