---
title: Week 5 in Packit
date: 2026-02-02
authors: akucerov
tags:
  - 2026-January
  - 2026
  - January
---

## Week 5 (January 27th – February 2nd)

- The `version_suffix` configuration option is now supported in Packit. This option is meant for appending information to the Version field in RPM spec files. This is useful for post-release snapshots following RPM versioning conventions. The `version_suffix` behaves similarly to the already existing `release_suffix` and also supports expansion of environment variables. ([packit#2664](https://github.com/packit/packit/pull/2664))
- When approaching the Github API rate limit threshold, Packit-service now moves tasks to the newly implemented rate-limited queue intended for awaiting the reset of the rate limit. This should lead to a better UX for repositories that have been experiencing issues related to rate limits. ([packit-service#2941](https://github.com/packit/packit-service/pull/2941))
- Pull requests against the `main` branch are now supported in Fedora CI. ([packit-service#2968](https://github.com/packit/packit-service/pull/2968))
- Ogr now supports Forgejo issues, comments and comment reactions. ([ogr#959](https://github.com/packit/ogr/pull/959))
