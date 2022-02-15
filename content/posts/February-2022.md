---
title: "February 2022"
date: 2022-02-08
weight: 64
---

## Week 5 (January 31th - February 7th)

- A new option `--no-require-autosetup` for `source-git init` command has been
  introduced. Please note that source-git repositories not using `%autosetup` may
  not be properly initialized. ([packit#1470](https://github.com/packit/packit/pull/1470))
- Packit-service now supports re-triggering against failed task using comment on
  pull request `/packit rebuild-failed` and similarly for testing farm: `/packit retest-failed`.
  ([packit-service#1303](https://github.com/packit/packit-service/pull/1303))

## Week 6 (February 8th - February 14th)

- Packit now correctly handles colons in git trailer values in source-git commits.
  ([packit#1478](https://github.com/packit/packit/pull/1478))
