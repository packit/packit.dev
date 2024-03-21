---
title: Week 7 in Packit
date: 2024-02-19
authors: lbarczio
tags:
  - 2024-February
  - 2024
  - February
---

## Week 7 (February 13th – February 19th)

- Packit now supports special value `ignore` for `trigger` in jobs configuration that indicates not to execute the job at all.
  This can be useful for templates or temporarily disabled jobs. ([packit#2234](https://github.com/packit/packit/pull/2234))
- We have fixed the caching of data for the usage API endpoint. ([packit-service#2350](https://github.com/packit/packit-service/pull/2350))
- We have fixed an issue that caused loading the same data multiple times on the dashboard within the project views. ([packit-service#2349](https://github.com/packit/packit-service/pull/2349))
- We have also fixed crashing of dashboard's `Usage` page in case of unsuccessful queries. ([dashboard#378](https://github.com/packit/dashboard/pull/378))
- We have fixed parsing of resolved Bugzillas in comments with multiple arguments specified,
  e.g. `/packit pull-from-upstream --with-pr-config --resolve-bug rhbz#123`. ([packit-service#2346](https://github.com/packit/packit-service/pull/2346))
