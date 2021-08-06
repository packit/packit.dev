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
- The behaviour of running tests triggered by /packit test comment was improved.
  If there is no existing Copr build when the tests are triggered,
  Packit service should now react and create a new build.
  Also when the last Copr build status is failed,
  tests are not submitted and users are informed about this.
  ([packit-service#1188](https://github.com/packit/packit-service/pull/1188))
- You can use `oraclelinux-7`/`oraclelinux-8` chroots for build and test of your package on Oracle Linux.
  ([packit-service#1186](https://github.com/packit/packit-service/pull/1186))
