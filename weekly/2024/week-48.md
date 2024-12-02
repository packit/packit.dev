---
title: Week 48 in Packit
date: 2024-12-02
authors: mmassari
tags:
  - 2024-November
  - 2024
  - November
---

## Week 48 (November 26th – December 2nd)

- There is a new action/hook, `post-modifications`, that is executed after all modifications to the spec file are done and in case of syncing release after all remote sources are downloaded and before uploading to lookaside cache. You can use it for example to construct an additional source that depends on the primary source (that may not yet be available in other actions). ([packit#2474](https://github.com/packit/packit/pull/2474))
- We have fixed `/packit retest-failed` which was retriggering also non failed tests. ([packit-service#2665](https://github.com/packit/packit-service/pull/2665))
- Packit now includes dashboard links when reporting errors for Koji builds and Bodhi updates. ([packit-service#2663](https://github.com/packit/packit-service/pull/2663))
- We have improved Koji builds and Bodhi updates errors displaying. ([dashboard#497](https://github.com/packit/dashboard/pull/497))
