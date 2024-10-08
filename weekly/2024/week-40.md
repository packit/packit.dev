---
title: Week 40 in Packit
date: 2024-10-07
authors: mfocko
tags:
  - 2024-October
  - 2024
  - October
---

## Week 40 (October 1st – October 7th)

- `packit validate-config` now checks for the existence of the downstream package. ([packit#2436](https://github.com/packit/packit/pull/2436))
- Packit now allows building VM images via CLI without any Copr repository specified. ([packit#2434](https://github.com/packit/packit/pull/2434))
- We have unified interface of passing resolved bugs (e.g., Bugzillas as of now) to Packit CLI and via comments. Both CLI and comments now use `--resolve-bug` switch (comments accept comma-separated list of bugs, CLI accepts the switch multiple times (also `-b`)).
  ([packit#2428](https://github.com/packit/packit/pull/2428) and [packit-service#2560](https://github.com/packit/packit-service/pull/2560))
- `packit init` now adds working directories that are used in `packit prepare-sources` into the `.gitignore` file in the same directory where Packit config resides. ([packit#2431](https://github.com/packit/packit/pull/2431))
- Before triggering the non-scratch Koji builds, we now check whether there is not already a build in progress or completed for the same NVR. ([packit-service#2559](https://github.com/packit/packit-service/pull/2559))
- We have improved the error reporting for failed downstream jobs. ([packit-service#2544](https://github.com/packit/packit-service/pull/2544))
- We have fixed an issue that caused inconsistencies with the expected behaviour stated by the documentation when adding duplicitous reactions to GitLab comments. ([ogr#861](https://github.com/packit/ogr/pull/861))
