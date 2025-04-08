---
title: Week 14 in Packit
date: 2025-04-07
authors: flachman
tags:
  - 2025-April
  - 2025
  - April
---

## Week 14 (April 1st – April 7th)

- When using `fast_forward_merge_into`, `version_update_mask` is now correctly being taken into consideration. ([packit#2551](https://github.com/packit/packit/pull/2551))
- We have introduced a new `config` command group for configuration-related commands and moved the `validate-config` command under it, resulting in the new command being `packit config validate`. ([packit#2559](https://github.com/packit/packit/pull/2559))
- It is now possible to retrigger dist-git CI scratch builds with `/packit ci`. ([packit-service#2770](https://github.com/packit/packit-service/pull/2770))
