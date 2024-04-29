---
title: Week 17 in Packit
date: 2024-04-29
authors: lbarczio
tags:
  - 2024-April
  - 2024
  - April
---

## Week 17 (April 23rd – April 29th)

- We have fixed the syncing of ACLs during CentOS Stream release syncing.
  ([packit#2298](https://github.com/packit/packit/pull/2298))
- `koji_build` job has a new `sidetag_group` option that allows to perform a downstream Koji build in a sidetag.
  A new sidetag will be created for each configured `dist_git_branch` if it doesn't already exist.
  This represents the first step towards multi-package Bodhi updates. Stay tuned for further advancements!
  ([packit-service#2409](https://github.com/packit/packit-service/pull/2409))
- We have fixed an issue when `copr_build` job status checks were sometimes wrongly updated with a misleading
  message after a SRPM build failure. ([packit-service#2406](https://github.com/packit/packit-service/pull/2406))
