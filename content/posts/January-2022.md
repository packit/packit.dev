---
title: "January 2022"
date: 2022-01-03
weight: 66
---

## Week 0 (December 13th - January 2nd)

- Dashboard shows a message when the SRPM build logs are not present instead of
  an empty page that might suggest logs are being loaded.
  ([packit/dashboard#158](https://github.com/packit/dashboard/pull/158))

## Week 1 (January 3rd - January 7th)

- Packit service now discards old (currently, this means 3 months) SRPM builds logs.
  ([packit/packit-service#1315](https://github.com/packit/packit-service/pull/1315))
- We have added `target_branch_head_commit` property to the `PullRequest` class in ogr that allows
  you to get commit hash of the HEAD of the target branch (i.e. base, where the changes are merged to).
  ([packit/ogr#671](https://github.com/packit/ogr/pull/671))
- Service now passes `PACKIT_TARGET_SHA` variable, which holds commit hash of the HEAD of the target
  branch where the changes are supposed to be merged, to the Testing Farm environment. This should
  help solving the issue of running tests from non-merged codebase on the Testing Farm side.
  ([packit/packit-service#1319](https://github.com/packit/packit-service/pull/1319))

## Week 2 (January 10th - January 14th)

- Packit no longer ignores `--no-bump` and `--release-suffix` options for
  source-git repos.
  [packit/packit#1452](https://github.com/packit/packit/pull/1452)
- Packit now names local branch `pr/{pr_id}` when checking out a PR, even when
  it's not being merged with the target branch. This results into NVR of the
  build containing `pr{pr_id}` instead of `pr.changes{pr_id}`.
  [packit/packit#1445](https://github.com/packit/packit/pull/1445)

## Week 3 (January 17th - January 21st)

- `%changelog` sections in dist-git using the `%autochangelog` macro [are
  preserved](https://github.com/packit/packit/pull/1453) when running
  `propose-downstream`, except when `sync_changelog` is set to `true`.
- When checking if directories hold a Git-tree, Packit now also allows [`.git`
  to be a file with a `gitdir`](https://github.com/packit/packit/pull/1458)
  reference, not only a directory.

## Week 4 (January 25th - January 28th)

- SRPM build view contains info about build start and finished time.
  [packit/dashboard#163](https://github.com/packit/dashboard/pull/163)
- When submitting a distgit PR during `propose-downstream` job, we create
  a `README.packit` file with some info about the sync the packit version used.
  To avoid this you can add `create_sync_note: false` to conig file.
  [packit/packit#1465](https://github.com/packit/packit/pull/1465)
