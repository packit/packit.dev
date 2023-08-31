---
title: Week 34 in Packit
date: 2023-08-28
authors: mfocko
tags:
  - 2023-August
  - 2023
  - August
---

## Week 34 (August 22nd – August 28th)

- We have fixed a bug in `packit source-git init` caused by the changed behaviour in the newer version of rpmbuild. ([packit#2048](https://github.com/packit/packit/pull/2048))
- We have fixed an issue in our API endpoint that could cause DoS until manual intervention from our team. ([packit-service#2164](https://github.com/packit/packit-service/pull/2164))
- We have fixed a bug causing broken retriggering of Github checks. ([packit-service#2161](https://github.com/packit/packit-service/pull/2161))
- SRPM build commit statuses, for monorepos projects, are now being correctly updated. ([packit-service#2157](https://github.com/packit/packit-service/pull/2157))
- We have fixed the bug resulting in incorrect reporting for tests when retriggering a build of a different target that was not configured for tests. ([packit-service#2144](https://github.com/packit/packit-service/pull/2144))
- We have fixed an issue that caused retriggers of Testing Farm to fail, if you specified any labels in the comment and had one or more test job definitions without any labels specified. ([packit-service#2156](https://github.com/packit/packit-service/pull/2156))
- Macro definitions and tags gained a new `valid` attribute. A macro definition/tag is considered valid if it doesn't appear in a false branch of any condition appearing in the spec file. ([specfile#276](https://github.com/packit/specfile/pull/276))
