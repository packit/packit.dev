---
title: Week 27 in Packit
date: 2026-07-07
authors: nforro
tags:
  - 2026-July
  - 2026
  - July
---

## Week 27 (July 1st – July 7th)

- When a package is configured to consume mutiple release streams and release-monitoring.org detects
  multiple releases at the same time, if a pull-from-upstream job run for one released version fails,
  only that one is retried and the rest are unaffected and properly processed. Before this fix
  it could happen that a failed job run for one released version could prevent other released versions
  from being processed at all.
  ([packit-service#3147](https://github.com/packit/packit-service/pull/3147))
