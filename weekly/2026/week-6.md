---
title: Week 6 in Packit
date: 2026-02-09
authors: nforro
tags:
  - 2026-February
  - 2026
  - February
---

## Week 6 (February 3rd – February 9th)

- We have fixed a race condition causing improper reporting of dist-git CI test statuses.
  ([packit-service#2981](https://github.com/packit/packit-service/pull/2981))
- Packit now supports `bodhi_extra_params` configuration option to customize creating Bodhi updates.
  ([packit#2682](https://github.com/packit/packit/pull/2682))
- Packit can now trigger Log Detective when it detects a failed downstream Koji task.
  ([packit-service#2971](https://github.com/packit/packit-service/pull/2971))
