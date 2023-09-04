---
title: Week 35 in Packit
date: 2023-09-04
authors: mfocko
tags:
  - 2023-August
  - 2023
  - August
---

## Week 35 (August 29th – September 4th)

- Now packit exposes `PACKIT_PACKAGE_NAME`, `PACKIT_UPSTREAM_PACKAGE_NAME` and `PACKIT_DOWNSTREAM_PACKAGE_NAME` to all the actions. ([packit#2061](https://github.com/packit/packit/pull/2061))
- Packit now sets `PACKIT_UPSTREAM_REPO` and `PACKIT_DOWNSTREAM_REPO` environment variables for release syncing actions. The variables represent paths where the respective git repositories are cloned ([packit-service#2166](https://github.com/packit/packit-service/pull/2166))
- We have fixed a bug that caused `undefined` value to be used on our dashboard. ([packit-service#2165](https://github.com/packit/packit-service/pull/2165))
