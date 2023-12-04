---
title: Week 48 in Packit
date: 2023-12-04
authors: nforro
tags:
  - 2023-November
  - 2023
  - November
---

## Week 48 (November 28th – December 4th)

- Packit now links the information related to upstream events in PRs opened when syncing a release.
  ([packit#2173](https://github.com/packit/packit/pull/2173))

- When accessing tags or macro definitions by name, specfile library now takes validity into account
  when looking for the best match. For example if there are two instances of `Version` tag,
  one in the true and one in the false branch of a condition, `Specfile.version` will always access
  the one that is in the true branch.
  This also applies to Packit when syncing a release and updating value of `Version` tag.
  ([specfile#328](https://github.com/packit/specfile/pull/328))
