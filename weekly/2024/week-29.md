---
title: Week 29 in Packit
date: 2024-07-22
authors: flachman
tags:
  - 2024-July
  - 2024
  - July
---

## Week 29 (July 16th – July 22nd)

- We have implemented a CLI support for Koji builds against CBS Koji instance. ([packit#2267](https://github.com/packit/packit/pull/2267))
- Added a new configuration option `sync_test_job_statuses_with_builds` that controls whether test job statuses are updated together with their corresponding build job statuses. When set to `false`, while tests jobs are waiting for their corresponding build jobs to finish, their statuses remain in pending state and only build job statuses are updated. ([packit-service#2470](https://github.com/packit/packit-service/pull/2470))
