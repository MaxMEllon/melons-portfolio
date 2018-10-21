import { fetchReposShiga } from './repos';
import { fetchProfileShiga } from './profile';

export default function rootShiga(onAsync) {
  fetchReposShiga(onAsync);
  fetchProfileShiga(onAsync);
}
