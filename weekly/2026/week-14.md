---
title: Week 14 in Packit
date: 2026-04-07
authors: lbarczio
tags:
  - 2026-April
  - 2026
  - April
---

## Week 14 (April 1st – April 7th)

- Packit now cancels running jobs even after manual retriggering. ([packit-service#3076](https://github.com/packit/packit-service/pull/3076))
- You can now configure multiple `pull-from-upstream` jobs with different version/tag filters. In conjunction with the `Monitoring all` release monitoring option this allows you to consume multiple release streams and freely configure Fedora releases you want to target with each. ([packit-service#3083](https://github.com/packit/packit-service/pull/3083))
- We have increased the retries for transient errors during Bodhi updates submission. ([packit-service#3090](https://github.com/packit/packit-service/pull/3090))
