---
title: Week 39 in Packit
date: 2023-10-02
tags:
  - 2023-September
  - 2023
  - September
---

## Week 39 (September 26th – October 2nd)

- When using packit CLI you can now specify bugs resolved by an update by `-b` or `--resolve-bug` option for `propose-downstream` and `pull-from-upstream` commands. The values will be added by default to the changelog and commit message and provided in `commit-message` and `changelog-entry` actions as `PACKIT_RESOLVED_BUGS` env variable. ([packit#2094](https://github.com/packit/packit/pull/2094))
- Packit-service now automatically adds bugzilla created by Upstream Release Monitoring as `- Resolves {bugzilla} ` to the changelog (or commit if autochangelog is used) and provides the value in `commit-message` and `changelog-entry` actions as `PACKIT_RESOLVED_BUGS` env variable. When retriggering the `pull-from-upstream` from comment, one can also specify the bug(s) as `/packit pull-from-upstream --resolved-bugs rhbz#123,rhbz#125` and Packit will do the same. ([packit-service#2193](https://github.com/packit/packit-service/pull/2193))
- You can now configure `notifications.failure_comment.message` also for downstream jobs, where the configured message will be used as an extension of the comment added by default by Packit. ([packit-service#2199](https://github.com/packit/packit-service/pull/2199))
