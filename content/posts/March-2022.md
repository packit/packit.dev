---
title: "March 2022"
date: 2022-03-07
weight: 63
---

## Week 9 (March 1st - March 7th)

- When a specfile is being generated, and both `specfile_path` and
  `downstream_package_name` are not set, Packit now correctly resolves this
  situation and sets `specfile_path` to the name of the upstream repo suffixed
  with `".spec"`.
  ([packit#1499](https://github.com/packit/packit/pull/1499))
- A new command `packit source-git status` has been introduced for checking
  the synchronization of a source-git and a dist-git repository based on the
  used git trailers. The command outputs a range of commits which need to be
  synchronized from dist-git to source-git or the other way around. If possible,
  the command also provides instructions on how to synchronize the repositories.
  ([packit#1500](https://github.com/packit/packit/pull/1500))
- We have added a new `enable_net` configuration option for Copr builds that
  allows you to disable network access during Copr builds. It is also complemented
  by `--enable-net`/`--disable-net` CLI options if you use Packit locally.
  ([packit#1504](https://github.com/packit/packit/pull/1504))
- Packit now adds 👀 instead of 👍 as a reaction to `/packit command`
  ([packit-service#1372](https://github.com/packit/packit-service/pull/1372))
- Progress of propose-downstream is now saved in the database and is available
  via API. Visualization in the dashboard is to follow next week, stay tuned.
  ([packit-service#1292](https://github.com/packit/packit-service/pull/1292))
- When running tests for the pull-request job, we now expose environment
  variables for commit hash, branch and URL both for pull-request source and
  target. In the test environment, you can use the following variables:
  `PACKIT_SOURCE_SHA`, `PACKIT_TARGET_SHA`, `PACKIT_SOURCE_BRANCH`,
  `PACKIT_TARGET_BRANCH`, `PACKIT_SOURCE_URL` and `PACKIT_TARGET_URL`.
  These variables are not set for test runs of releases and branch pushes.
  ([packit-service#1382](https://github.com/packit/packit-service/pull/1382))
