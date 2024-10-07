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

- `packit validate-config` now checks for the existence of downstream package. ([packit#2436](https://github.com/packit/packit/pull/2436))
- Packit now allows building VM images via CLI without any Copr repository specified. ([packit#2434](https://github.com/packit/packit/pull/2434))
- Previously, the `--resolve-bugzillas` option has been used for `create-update` and the option `--resolve-bug` has been used for `propose-downstream`. They have been unifed to just `--resolve-bug` for better user experience.
  If you used the option `--resolve-bugzillas` for command `create-update` you must use the `--resolve-bug` now instead.

  Previously, the `pull-from-upstream` option took the `--resolve-bug` option from CLI.
  While the `resolved-bugs` option has been used for retriggering an comment command in service. . They have been unifed to just `--resolve-bug` for better user experience.
  If you used the option `--resolved-bugs` for retriggering comment command you must use the `--resolve-bug` now instead. ([packit#2428](https://github.com/packit/packit/pull/2428))

- We have unified the interface for propagating resolved Bugzillas to use `--resolve-bug` everywhere. When retriggering `pull-from-upstream` via issue/PR comment, please use the new `--resolve-bug` option. ([packit-service#2560](https://github.com/packit/packit-service/pull/2560))
- `packit init` now adds working directories that are used in `packit prepare-sources` into the `.gitignore` file in the same directory where Packit config resides. ([packit#2431](https://github.com/packit/packit/pull/2431))
- Before triggering the non-scratch Koji builds, we now check whether there is not already a build in progress or completed for the same NVR. ([packit-service#2559](https://github.com/packit/packit-service/pull/2559))
- We have improved the error reporting for failed downstream jobs. ([packit-service#2544](https://github.com/packit/packit-service/pull/2544))
- We have fixed an issue that caused inconsistencies with the expected behavior stated by the documentation when adding duplicit reactions to GitLab comments. ([ogr#861](https://github.com/packit/ogr/pull/861))
