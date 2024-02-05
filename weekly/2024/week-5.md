---
title: Week 5 in Packit
date: 2024-02-05
authors: mmassari
tags:
  - 2024-February
  - 2024
  - February
---

## Week 5 (January 30th – February 5th)

- `packit validate-config` now checks whether the Upstream Release Monitoring for the package is correctly configured if `pull_from_upstream` job is present in the configuration. ([packit#2226](https://github.com/packit/packit/pull/2226))
- There is a new global configuration option `parse_time_macros` that allows to configure macros to be explicitly defined or undefined at spec file parse time. ([packit#2222](https://github.com/packit/packit/pull/2222))
- We have added additional retries and improvements for task processing. ([packit-service#2326](https://github.com/packit/packit-service/pull/2326))
