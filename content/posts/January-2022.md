---
title: "January 2022"
date: 2022-01-03
weight: 66
---

## Week 1 (December 13th - January 2nd)

- Dashboard shows a message when the SRPM build logs are not present instead of
  an empty page that might suggest logs are being loaded.
  ([packit/dashboard#158](https://github.com/packit/dashboard/pull/158))

## Week 2 (January 3rd - January 7th)

- Packit service now discards old (currently, this means 3 months) SRPM builds logs.
  ([packit/packit-service#1315](https://github.com/packit/packit-service/pull/1315))
- We have added `target_branch_head_commit` property to the `PullRequest` class in ogr that allows
  you to get commit hash of the HEAD of the target branch (i.e. base, where the changes are merged to).
  ([packit/ogr#671](https://github.com/packit/ogr/pull/671))
- Service now passes `PACKIT_TARGET_SHA` variable, which holds commit hash of the HEAD of the target
  branch where the changes are supposed to be merged, to the Testing Farm environment. This should
  help solving the issue of running tests from non-merged codebase on the Testing Farm side.
  ([packit/packit-service#1319](https://github.com/packit/packit-service/pull/1319))
