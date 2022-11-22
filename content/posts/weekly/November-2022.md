---
title: November 2022
date: 2022-11-07
weight: 56
---

## Week 44 (November 1st – November 7th)

- Fixed an issue due to which the repository was never searched for a specfile if `specfile_path` was not specified, and `specfile_path` was always set to `<repo_name>.spec`. ([packit#1758](https://github.com/packit/packit/pull/1758))
- Packit is now able to generate automatic Bodhi update notes including a changelog diff since the latest stable build of a package. ([packit#1747](https://github.com/packit/packit/pull/1747))
- Description of Bodhi updates now contains a changelog diff. ([packit-service#1713](https://github.com/packit/packit-service/pull/1713))

## Week 45 (November 8th – November 14th)

- You can re-trigger a Bodhi update via dist-git PR comment `/packit create-update`. ([packit-service#1729](https://github.com/packit/packit-service/pull/1729))
- Packit now correctly finds an SRPM when rpmbuild reports warnings while it parses a spec file. ([packit#1772](https://github.com/packit/packit/pull/1772))
- When packit.yaml is present in the repo but is empty, Packit now produces a better error message instead of an internal Python exception. ([packit#1769](https://github.com/packit/packit/pull/1769))
- Retriggering of tests when there is a build job and a test job with an identifier configured was fixed. ([packit-service#1731](https://github.com/packit/packit-service/pull/1731))
- Packit GitHub app will not modify a package version when `release_suffix` configuration option is empty. ([packit-service#1738](https://github.com/packit/packit-service/pull/1738))
- Our `specfile` parser now supports localized tags (e.g. `Summary(fr)`) and tags with qualifiers (e.g. `Requires(post)`). ([specfile#132](https://github.com/packit/specfile/pull/132))
- SRPM build logs are now deleted after 30 days instead of 90 days. This doesn't apply to SRPM builds done in Copr, which deletes the logs after 14 days. ([packit/packit-service#1745](https://github.com/packit/packit-service/pull/1745))

## Week 46 (November 15th – November 21st)

- `srpm_build_deps` can be now configured also on the job configuration level. ([packit-service#1757](https://github.com/packit/packit-service/pull/1757))
