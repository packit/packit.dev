---
title: August 2022
date: 2022-08-01
weight: 59
---

## Week 30 (July 26th–August 1st)

- Packit has switched to `python-specfile` library for handling spec files. This may cause some issues to pop up. ([packit#1588](https://github.com/packit/packit/pull/1588))
- Packit CLI can now build RPMs in mock. For more information see https://packit.dev/docs/cli/build/mock ([packit#1662](https://github.com/packit/packit/pull/1662))
- When using Packit before being allowed, Packit newly links an approval issue where the self-approval can be performed. ([packit-service#1596](https://github.com/packit/packit-service/pull/1596))
- A downstream koji-build can now be re-triggered by adding a comment containing `/packit koji-build` into a dist-git pull request with target branch corresponding to the branch the build should be acted upon. ([packit-service#1586](https://github.com/packit/packit-service/pull/1586))
