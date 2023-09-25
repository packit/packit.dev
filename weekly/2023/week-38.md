---
title: Week 38 in Packit
date: 2023-09-25
tags:
  - 2023-September
  - 2023
  - September
---

## Week 38 (September 19th – September 25th)

- As part of the effort of implementing release syncing for CentOS Stream,
  Packit now supports the `pkg_tool` option in the config
  (at the top-level or with specific packages when using the monorepo syntax).
  This option can be used for switching between `fedpkg` or `centpkg`.
  ([packit#2085](https://github.com/packit/packit/pull/2085))
- When updating the `Version` tag during `propose_downstream` or `pull_from_upstream`,
  Packit now tries to update referenced macros (if any) rather than overwriting the references.
  ([packit#2087](https://github.com/packit/packit/pull/2087))
