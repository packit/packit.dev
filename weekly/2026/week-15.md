---
title: Week 15 in Packit
date: 2026-04-13
authors: akucerov
tags:
  - 2026-April
  - 2026
  - April
---

## Week 15 (April 7th – April 13th)

- In addition to `version_update_mask`, users can now use a new `version_update_specifiers` configuration option to control the upstream versions allowed to be release-synced. The option accepts [PEP440 version specifier sets](https://packaging.pypa.io/en/stable/specifiers.html), for example `version_update_specifiers: >=1.0,~=1.0`. ([packit#2710](https://github.com/packit/packit/pull/2710))
- Packit is now able to handle multi-level project namespaces. ([packit-service#3092](https://github.com/packit/packit-service/pull/3092))
- We have fixed a bug in relation to retriggering of Copr builds sometimes failing due to a failed cancellation of previous builds. ([packit-service#3099](https://github.com/packit/packit-service/pull/3099))
- We have fixed tag filtering not working when processing multi-release events and when retriggering pull-from-upstream. ([packit-service#3098](https://github.com/packit/packit-service/pull/3098))
- As part of the process of the integration of Log Detective into Packit, Packit now ignores Log Detective messages in case Log Detective integration is disabled by the user by setting `logdetective_enabled` to `False` in the service configuration file. ([packit-service#3100](https://github.com/packit/packit-service/pull/3100))
- We have fixed a bug that would lead to Testing Farm jobs being cancelled when there were no associated Copr builds. ([packit-service#3102](https://github.com/packit/packit-service/pull/3102))
