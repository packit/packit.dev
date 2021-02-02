---
title: "January 2021"
date: 2021-01-08
draft: false
weight: 79
---

# January 2021

## Week 1 (January 4th - January 8th)

- Name of the job/command/comment to propose update of downstream package has been synced
  between CLI and service to `propose-downstream`.
  `propose-update` is now deprecated. ([packit#1065](https://github.com/packit-service/packit/pull/1065), [packit-service#913](https://github.com/packit/packit-service/pull/913))

## Week 2 (January 11th - January 15th)

- Branch deletions are now correctly ignored. ([packit-service#919](https://github.com/packit/packit-service/pull/919))
- Multiple internal improvements have been done.
  ([packit#1072](https://github.com/packit/packit/pull/1072),
  [packit-service#922](https://github.com/packit/packit-service/pull/922),
  [packit-service#923](https://github.com/packit/packit-service/pull/923))

## Week 3 (January 18th - January 22th)

- We have temporarily disabled the testing-farm support because the cluster with old runner has died and the new runner is not ready.
  The tests are now skipped and you get `Testing farm is temporarily disabled.` status until we have the new runner available.
  ([packit-service#929](https://github.com/packit/packit-service/pull/929))

## Week 4 (January 25th - January 29th)

- The CLI and the service now detect name of the default branch of a repository
  instead of assuming it to be called `master`.
  ([packit#1074](https://github.com/packit/packit/pull/1074),
  [packit-service#924](https://github.com/packit/packit-service/pull/924))
- Build status page now points to the built SRPM uploaded to COPR.
  ([packit-service#889](https://github.com/packit/packit-service/pull/889))
- `propose-downstream` on source-git repositories now always uses `--local-content`.
  ([packit#1093](https://github.com/packit/packit/pull/1093))
- Hunor fixed bug [packit#1089](https://github.com/packit/packit/pull/1089)
  which caused a wrong revision to be used for certain jobs in Packit Service.
- Tomas improved the reliability of our sandboxing service.
  ([sandcastle#95](https://github.com/packit/sandcastle/pull/95))
- Default branches in all [our repositories](https://github.com/packit)
  have been renamed from `master` to `main`.
