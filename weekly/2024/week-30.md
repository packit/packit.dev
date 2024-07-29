---
title: Week 30 in Packit
date: 2024-07-29
authors: mfocko
tags:
  - 2024-July
  - 2024
  - July
---

## Week 30 (July 23rd – July 29th)

- `packit pull-from-upstream` now allows omitting `upstream_project_url` in the configuration in which case the interaction with the upstream repository is skipped during release syncing. ([packit#2354](https://github.com/packit/packit/pull/2354))
- We have added the initial version of functionality for running scans in OpenScanHub. You can read more about this functionality
  [here](https://packit.dev/docs/configuration#osh_diff_scan_after_copr_build). ([packit-service#2472](https://github.com/packit/packit-service/pull/2472))
- Added a new configuration option `sync_test_job_statuses_with_builds` that controls whether test job statuses are updated together with their corresponding build job statuses. When set to `false`, while tests jobs are waiting for their corresponding build jobs to finish, their statuses remain in pending state and only build job statuses are updated. ([packit-service#2470](https://github.com/packit/packit-service/pull/2470))
