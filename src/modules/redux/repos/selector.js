import { omit, map, join } from "lodash/fp";
import { memoize } from "lodash";

const getRepos = (state) => state.github.model.repos;

const ignoreKeys = [
  "archive_url",
  "archived",
  "assignees_url",
  "blobs_url",
  "branches_url",
  "collaborators_url",
  "comments_url",
  "commits_url",
  "compare_url",
  "contents_url",
  "contributors_url",
  "deployments_url",
  "downloads_url",
  "events_url",
  "forks_url",
  "git_refs_url",
  "git_tags_url",
  "has_downloads",
  "has_pages",
  "has_projects",
  "has_wiki",
  "hooks_url",
  "issue_comment_url",
  "issue_events_url",
  "issues_url",
  "keys_url",
  "labels_url",
  "languages_url",
  "merges_url",
  "milestones_url",
  "node_id",
  "notifications_url",
  "permissions",
  "private",
  "pulls_url",
  "releases_url",
  "stargazers_url",
  "statuses_url",
  "subscribers_url",
  "subscription_url",
  "tags_url",
  "tags_url",
  "teams_url",
  "trees_url",
];

const omitKeysFromRepos = ignoreKeys |> omit |> map;

const memoResolver = (repos) =>
  repos |> map((repo) => repo.id + repo.updated_at) |> join("-");

const memo = memoize(omitKeysFromRepos, memoResolver);

export const reposSelector = (state) => state |> getRepos |> memo;

window.memo = memo;
