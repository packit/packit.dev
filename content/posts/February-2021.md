---
title: "February 2021"
date: 2021-02-05
weight: 78
---

# February 2021

## Week 5 (February 1st - February 5th)

- The service uses new Testing Farm ([API](https://testing-farm.gitlab.io/api/)).
  We are still working on better user experience and fixing bugs.
  ([packit-service#875](https://github.com/packit/packit-service/pull/875))
- MatejF refactored permission system on pull requests and issues comments and
  renamed whitelist to allowlist. ([packit-service#936](https://github.com/packit/packit-service/pull/936))
- The service now retries failed tasks.
  ([packit-service#931](https://github.com/packit/packit-service/pull/931))
- `--koji-target` option of the CLI's `build` command now accepts aliases.
  ([packit#1052](https://github.com/packit/packit/pull/1052))
- The service runs on Fedora 33 now.
