---
title: Week 46 in Packit
date: 2023-11-20
authors: lbarczio
tags:
  - 2023-November
  - 2023
  - November
---

## Week 46 (November 14th – November 20th)

- Packit now supports pre-release version in `propose_downstream` and `pull_from_upstream`.
  A spec file update might be required, see [the documentation](/docs/pre-releases) for more details.
  ([packit#2149](https://github.com/packit/packit/pull/2149))
  - In relation to that, specfile library has a new method, `Specfile.update_version()`, that allows updating spec file
    version even if it is a pre-release. ([specfile#317](https://github.com/packit/specfile/pull/317))
- Packit can now check, using the new `update_version_mask` configuration option, that the proposed version of new release
  and the current version of the dist-git branch are compatible and sync the dist-git branch only in that case.
  ([packit#2156](https://github.com/packit/packit/pull/2156))
- Packit is now able to get the version from spec file even if the `Version` tag is not present in the specfile directly,
  but e.g. imported from another file. ([packit#2157](https://github.com/packit/packit/pull/2157))
- `PACKIT_COPR_PROJECT` env var that is exposed to Testing Farm now includes the Copr project of the additional build
  specified in comment, if present. ([packit-service#2253](https://github.com/packit/packit-service/pull/2253))
