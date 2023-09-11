---
title: Week 36 in Packit
date: 2023-09-11
authors: flachman
tags:
  - 2023-September
  - 2023
  - September
---

## Week 36 (September 5th – September 11th)

- Packit now supports `commit-message` action that can be used to override the default commit message produced by Packit during `propose-downstream` or `pull-from-upstream`. Please pay attention to [our documentation](https://packit.dev/docs/configuration/actions#commit-message) with regards to the usage of this action. ([packit#2070](https://github.com/packit/packit/pull/2070))
- Packit CLI now supports testing the `pull-from-upstream` workflow.
  Use the `packit pull-from-upstream` command from the `packit` RPM package. ([packit#2063](https://github.com/packit/packit/pull/2063))
- Packit now passes `initiator` context for tmt to the Testing Farm. You can use [this option](https://tmt.readthedocs.io/en/latest/spec/context.html#initiator) to run or skip certain tests when they're run by Packit. ([packit-service#2176](https://github.com/packit/packit-service/pull/2176))
- Testing Farm started additionally exposing regexes on top of the exact compose names in the /composes/ endpoints, and we now support this as well when checking the validity of compose. ([packit-service#2168](https://github.com/packit/packit-service/pull/2168))
- We have disabled the jitter for retrying Bodhi update tasks to prevent race conditions causing not created updates. ([packit-service#2170](https://github.com/packit/packit-service/pull/2170))
- We have fixed a bug in `get_fork` method for Pagure about checking the usernames for a match when going through existing forks. ([ogr#800](https://github.com/packit/ogr/pull/800))
