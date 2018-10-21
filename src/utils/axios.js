import axios from "axios";
import { setupCache } from "axios-cache-adapter";

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

export default request;
