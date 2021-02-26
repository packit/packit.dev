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

## Week 6 (February 8th - February 12th)

- `--dist-git-branches` option in the CLI's `propose-downstream` command was
  fixed, it now respects set branches.
  ([packit#1094](https://github.com/packit/packit/pull/1094))
- The way Packit adds patches to spec-file in source-git repo was improved, now
  it shouldn't fail if patches are sparsely numbered.
  ([packit#1100](https://github.com/packit/packit/pull/1100))

## Week 7 (February 15th - February 19th)

- The service now handles issue/MR comments on Gitlab.
  ([packit-service#985](https://github.com/packit/packit-service/pull/985))
- `packit init` command now works with CentOS packages.
  ([packit#1106](https://github.com/packit/packit/pull/1106))

## Week 8 (February 22th - February 25th)

- Sandcastle can run multiple commands in one sandbox, kudos to Tomas.
  ([sandcastle#93](https://github.com/packit/sandcastle/pull/93))
- MatejF & MatejM improved CLI's `create-update` to work with EPEL and add password prompt.
  ([packit#1122](https://github.com/packit/packit/pull/1122),
   [packit#1127](https://github.com/packit/packit/pull/1127))
- Service runs builds for targets from `build` + `test` jobs, kudos to Laura.
  ([packit-service#996](https://github.com/packit/packit-service/pull/996))
- MatejF did a lot of small fixes and improvements of packit-service.
  ([packit-service#989](https://github.com/packit/packit-service/pull/989),
   [packit-service#993](https://github.com/packit/packit-service/pull/993),
   [packit-service#994](https://github.com/packit/packit-service/pull/994))
