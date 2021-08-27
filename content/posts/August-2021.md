---
title: "August 2021"
date: 2021-08-06
draft: false
weight: 72
---

## Week 31 (August 2nd - August 6th)

- `sync_release` in API allows specifying a suffix for the newly created branch in a dist-git repo fork,
  so that there can be more open update PRs for the same dist-git branch at the same time.
  ([packit#1326](https://github.com/packit/packit/pull/1326))
- The behaviour of running tests triggered by `/packit test` comment was improved.
  If there is no existing Copr build when the tests are triggered,
  Packit service should now react and create a new build.
  Also when the last Copr build status is failed,
  tests are not submitted and users are informed about this.
  ([packit-service#1188](https://github.com/packit/packit-service/pull/1188))
- You can use `oraclelinux-7`/`oraclelinux-8` chroots for build and test of your package on Oracle Linux.
  ([packit-service#1186](https://github.com/packit/packit-service/pull/1186))

## Week 32 (August 9th - August 13th)

- `status` command of Packit's CLI has been refactored and now provides much cleaner output. ([packit#1329](https://github.com/packit/packit/pull/1329))

## Week 33 (August 16th - August 20th)

- When reacting to `/packit test`, Packit service sets a status before starting the job
  to unify the behaviour with reacting to triggering builds. ([packit-service#1187](https://github.com/packit/packit-service/pull/1187))
- `packit validate-config` now checks also the value of the `specfile_path` configuration option
  and shows warning if the specified file is not present in the repository. ([packit#1342](https://github.com/packit/packit/pull/1342))

## Week 34 (August 23rd - August 27th)

- Packit now merges into base branch when checking out PRs.
  ([packit#1344](https://github.com/packit/packit/pull/1344))
- Packit `source-git udpate-dist-git` now supports using Git trailers to
  define patch metadata, which controls how patches are generated and added
  to the spec-file. ([packit#1336](https://github.com/packit/packit/pull/1336))
- These changes will be applied next week (not this week as usual).
