---
title: March 2022
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

## Week 10 (March 8th - March 14th)

- You can view information about ongoing propose-downstream jobs via our dashboard.
  ([dashboard#168](https://github.com/packit/dashboard/pull/168))
- We have switched the cache for dist-git branches and Copr targets to TTL cache
  that gets discarded once in 12 hours, in case there is a change in targets, the
  changes shall propagate to both of our deployments without the need to redeploy
  within 12 hours. ([packit#1513](https://github.com/packit/packit/pull/1513))
- Packit now comments when it fails to find Copr project specified in the config.
  ([packit#1395](https://github.com/packit/packit-service/pull/1395))
- Packit now reacts to dist-git pushes to either `rawhide` or `main` when configured
  to do Koji builds for `rawhide`.
  ([packit#1393](https://github.com/packit/packit-service/pull/1393))
- You can specify an identifier for your job to be able to configure one job multiple times.
  For example, you can build multiple projects from one repository (known as monorepo concept)
  or try multiple build options. Using identifiers allows Packit to avoid naming collisions
  in commit statuses and default Copr project names.
  ([packit-service#1385](https://github.com/packit/packit-service/pull/1385))
- Packit no longer provides a misleading comment when it fails to update a set of
  targets on its own Copr projects.
  ([packit-service#1397](https://github.com/packit/packit-service/pull/1397))
