---
title: Week 4 in Packit
date: 2026-01-26
authors: lbarczio
tags:
  - 2026-January
  - 2026
  - January
---

## Week 4 (January 20th – January 26th)

- Testing jobs running against dist-git PRs now have the `dist-git-branch` context pointing to the target branch of the PR. ([packit-service#2935](https://github.com/packit/packit-service/pull/2935)). On `epel10.y` dist-git PRs they now use the `CentOS Stream 10` Testing Farm compose, same as `epel10`. ([packit-service#2953](https://github.com/packit/packit-service/pull/2953))
- Packit now supports the `--package` parameter, which can be used when retriggering jobs in monorepositories via comments. The parameter is intended to specify the package, for which to run specified jobs. ([packit-service#2850](https://github.com/packit/packit-service/pull/2850))
