---
title: Week 34 in Packit
date: 2024-08-27
authors: flachman
tags:
  - 2024-August
  - 2024
  - August
---

## Week 34 (August 20st – August 27th)

- pull-from-upstream is now supported also without specifying upstream_project_url in the configuration. For such cases, the upstream repository will not be detected and cloned during release syncing. ([packit#2398](https://github.com/packit/packit/pull/2398))
- `dist-git init` command now allows `upstream-git-url` not to be specified. ([packit#2387](https://github.com/packit/packit/pull/2387))
- You can newly tag builds of a package into a sidetag group by using `/packit koji-tag` comment command. ([packit-service#2507](https://github.com/packit/packit-service/pull/2507))
- Thanks to [Cristian Le](https://github.com/LecrisUT), `epel-10` is now correctly mapped to a `centos-stream-10` when running tests. ([packit-service#2508](https://github.com/packit/packit-service/pull/2508))
