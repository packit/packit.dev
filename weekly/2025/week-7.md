---
title: Week 7 in Packit
date: 2025-02-17
authors: lbarczio
tags:
  - 2025-February
  - 2025
  - February
---

## Week 7 (February 11th – February 17th)

- Packit now reloads spec files after all `actions` that might modify them during release syncing.
  This adds support for use cases like regenerating the spec file, see [rust2rpm example](https://packit.dev/docs/configuration/examples#fedora-release-automation).
  ([packit#2521](https://github.com/packit/packit/pull/2521))
