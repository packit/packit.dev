---
title: Week 18 in Packit
date: 2024-05-06
authors: nforro
tags:
  - 2024-April
  - 2024
  - April
---

## Week 18 (April 30th – May 6th)

- Packit will now upload to lookaside cache sources that are not specified by URLs
  and are present in the dist-git repo during release sync. Additionally, all the actions
  ran during syncing release will provide the `PACKIT_PROJECT_VERSION` environment variable.
  ([packit#2297](https://github.com/packit/packit/pull/2297))
- We have introduced a new `status_name_template` option that allows you to configure
  status name for a Packit job. For further details have a look at our
  [docs](https://packit.dev/docs/configuration#status_name_template).
  This feature is still experimental and at the moment it is not possible
  to retry such jobs via GitHub Checks' re-run.
  ([packit-service#2402](https://github.com/packit/packit-service/pull/2402))
