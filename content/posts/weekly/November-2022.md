---
title: November 2022
date: 2022-11-07
weight: 56
---

## Week 44 (November 1st – November 7th)

- Fixed an issue due to which the repository was never searched for a specfile if `specfile_path` was not specified, and `specfile_path` was always set to `<repo_name>.spec`. ([packit#1758](https://github.com/packit/packit/pull/1758))
- Packit is now able to generate automatic Bodhi update notes including a changelog diff since the latest stable build of a package. ([packit#1747](https://github.com/packit/packit/pull/1747))
- Description of Bodhi updates now contains a changelog diff. ([packit-service#1713](https://github.com/packit/packit-service/pull/1713))
