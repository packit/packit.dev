---
title: Week 49 in Packit
date: 2025-12-09
authors: mblaha
tags:
  - 2025-December
  - 2025
  - December
---

## Week 49 (December 2nd – December 9th)

- `packit init` now automatically retrieves the latest version of the pre-commit hook to be added to the user's pre-commit configuration file. ([packit#2651](https://github.com/packit/packit/pull/2651))
- Fixed a bug that could prevent downstream jobs from being triggered in case dist-git spec file depends on other files and is not parseable on its own. ([packit-service#2901](https://github.com/packit/packit-service/pull/2901))
