---
title: Week 12 in Packit
date: 2024-03-25
authors: lbarczio
tags:
  - 2024-March
  - 2024
  - March
---

## Week 12 (March 19th – March 25th)

- Packit no longer shows status checks for not yet triggered manual tests.
  ([packit-service#2375](https://github.com/packit/packit-service/pull/2375))
- `packit validate-config` now checks whether `upstream_project_url` is set if `pull_from_upstream` job is configured.
  ([packit#2254](https://github.com/packit/packit/pull/2254))
- We have fixed an issue in `%prep` section processing. For instance, if the `%patches` macro appeared there,
  it would have been converted to `%patch es`, causing failure when executing `%prep` later.
  ([specfile#356](https://github.com/packit/specfile/pull/356))
