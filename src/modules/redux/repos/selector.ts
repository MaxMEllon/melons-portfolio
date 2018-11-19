import { omit, map, reduce, pipe, memoizeWith } from 'ramda'

const ignoreKeys: Array<string> = [
  'archive_url',
  'archived',
  'assignees_url',
  'blobs_url',
  'branches_url',
  'collaborators_url',
  'comments_url',
  'commits_url',
  'compare_url',
  'contents_url',
  'contributors_url',
  'deployments_url',
  'downloads_url',
  'events_url',
  'forks_url',
  'git_refs_url',
  'git_tags_url',
  'has_downloads',
  'has_pages',
  'has_projects',
  'has_wiki',
  'hooks_url',
  'issue_comment_url',
  'issue_events_url',
  'issues_url',
  'keys_url',
  'labels_url',
  'languages_url',
  'merges_url',
  'milestones_url',
  'node_id',
  'notifications_url',
  'permissions',
  'private',
  'pulls_url',
  'releases_url',
  'stargazers_url',
  'statuses_url',
  'subscribers_url',
  'subscription_url',
  'tags_url',
  'tags_url',
  'teams_url',
  'trees_url',
];

const mapper = pipe(omit, map)(ignoreKeys)
const resolver: (res: Array<{ id: string }>) => string = reduce((acc, cur) => acc + cur.id, '');
const converter: (repos: any) => Object = memoizeWith(resolver, mapper);
const getRepos = (state: any): Object => state.github.model.repos;
export const reposSelector: (state: any) => Object = pipe(a => console.log(a), getRepos, converter)
