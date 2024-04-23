---
title: Week 16 in Packit
date: 2024-04-22
authors: mfocko
tags:
  - 2024-April
  - 2024
  - April
---

## Week 16 (April 16th – April 22nd)

- `packit dist-git init` now allows specifying `--version-update-mask` option and also any arbitrary top-level configuration options. ([packit#2288](https://github.com/packit/packit/pull/2288))
- We have fixed Packit auto-referencing Upstream Release Monitoring bug for release syncing to CentOS Stream. ([packit#2284](https://github.com/packit/packit/pull/2284))
- We have changed the behaviour of `/packit test` comment command: in case there is a missing build for some target, the build will not be triggered anymore, it will just be reported to the user. We needed to make this change as with the increased complexity of the configuration (multiple test jobs), the previous implementation was prone to race conditions leading to wasting of resources of Copr and Testing Farm. ([packit-service#2399](https://github.com/packit/packit-service/pull/2399))
