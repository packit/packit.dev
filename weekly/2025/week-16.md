---
title: Week 16 in Packit
date: 2025-04-22
authors: flachman
tags:
  - 2025-April
  - 2025
  - April
---

## Week 16 (April 16th – April 22nd)

- The `--resultdir` argument in `build_in_mock` now defaults to the current directory (`"."`), preventing loss of build artifacts when not explicitly set. ([packit#2567](https://github.com/packit/packit/pull/2567))
- `tf_extra_params` should now be included when submitting the automatic upstream installability check to the Testing Farm. ([packit-service#2779](https://github.com/packit/packit-service/pull/2779))
