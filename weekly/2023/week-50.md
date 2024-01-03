---
title: Week 50 in Packit
date: 2023-12-18
authors: nforro
tags:
  - 2023-December
  - 2023
  - December
---

## Week 50 (December 12th – December 18th)

- We have fixed a bug preventing a release from being synced downstream if the changelog to be set is empty.
  ([packit#2183](https://github.com/packit/packit/pull/2183))
- We have fixed a bug of not running Koji builds for Packit dist-git PRs with multiple commits if the last commit
  of the PR did not contain a spec file change.
  ([packit-service#2275](https://github.com/packit/packit-service/pull/2275))
