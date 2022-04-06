---
title: "April 2022"
date: 2022-04-04T12:40:16+01:00
weight: 76
---

## Week 13 (March 29th - April 4th)

- We have implemented `get_contributors` function in ogr that can be used for getting contributors to the project on GitHub (set of logins) and GitLab (set of authors).
  ([ogr#692](https://github.com/packit/ogr/pull/692)).
- When multiple propose downstream attempts for the same PR fail, the error messages are sent to to the same issue (as comments), instead of creating multiple new issues.
  ([packit#1427](https://github.com/packit/packit-service/pull/1427)).
- Downstream synchronization of the Packit configuration file (aka `packit.yaml`) is now working properly again.
  ([packit#1532](https://github.com/packit/packit/pull/1532)).
- `packit source-git update-dist-git` and `packit source-git update-source-git` now check the synchronization of source-git and dist-git repositories prior to doing the update. If the update can't be done, for example, because the histories have diverged, the command provides instructions on how to synchronize the repositories.
  A `--force` option is available to try to update the destination repository anyway.
  ([packit#1534](https://github.com/packit/packit/pull/1534)).
- When using `post_upstream_clone` to generate your spec-file,
  Packit now correctly checks out a release before the action is run.
  ([packit#1542](https://github.com/packit/packit/pull/1542)).
