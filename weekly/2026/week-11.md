---
title: Week 11 in Packit
date: 2026-03-17
authors: nforro
tags:
  - 2026-March
  - 2026
  - March
---

## Week 11 (March 11th – March 17th)

- Packit now supports `help` command in PR and issue comments.
  ([packit-service#2853](https://github.com/packit/packit-service/pull/2853))
- Packit now responds to unrecognized commands in PR and issue comments.
  ([packit-service#3057](https://github.com/packit/packit-service/pull/3057))
- In Fedora CI, it is now possible to retrigger builds and tests in `rawhide` PRs
  of ELN packages without dedicated `eln` branch independently.
  ([packit-service#3032](https://github.com/packit/packit-service/pull/3032))
- We have fixed a couple of bugs that prevented sidetag Bodhi updates to be created
  when there was no stable build for the particular (freshly branched) target.
  ([packit-service#3059](https://github.com/packit/packit-service/pull/3059),
  [packit#2704](https://github.com/packit/packit/pull/2704))
- Users can now specify a version string when retriggering `pull-from-upstream` via dist-git PR comment.
  ([packit-service#3058](https://github.com/packit/packit-service/pull/3058))
