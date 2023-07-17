---
title: "January 2023"
date: 2023-01-02T15:00:00+01:00
tags:
  - 2023
---

## Week 0 🌄 (December 20th 2022 – January 2nd 2023)

- ogr now raises `GitForgeInternalError` rather than `PagureAPIException` when
  getting 50x response from the Pagure API. This should increase usability as
  those tasks will be retried.
  ([ogr#762](https://github.com/packit/ogr/pull/762))
- Packit now puts the correct release number into the changelog when the
  Release tag is reset during propose-downstream.
  ([packit#1816](https://github.com/packit/packit/pull/1816)))

## Week 1 (January 3rd – January 9th)

- SRPMs for projects that installed the GitHub App before September 6th and
  don't have `srpm_build_deps` defined are now built in Copr as well.
  ([packit-service#1822](https://github.com/packit/packit-service/pull/1822))
- We have fixed a bug in dashboard that linked `null` as a Copr build for
  Testing Farm runs that do not require any Copr build.
  ([dashboard#200](https://github.com/packit/dashboard/pull/200))
- All classes including `Specfile` itself can now be copied using the standard
  `copy()` and `deepcopy()` functions from `copy` module.
  ([specfile#176](https://github.com/packit/specfile/pull/176))

## Week 2 (January 10th – January 16th)

- When configuring Copr chroot (target in Packit terminology) specific configuration, make sure to specify additional_modules as a string: module names separated with a comma, example: "httpd:2.4,python:4". ([packit#1826](https://github.com/packit/packit/pull/1826))
- We have fixed a bug which caused long Copr build end reporting time on a few occurrences. ([packit-service#1838](https://github.com/packit/packit-service/pull/1838))
- A few fixes has been implemented to make it possible to use [`propose-downstream` job](https://packit.dev/docs/configuration/#propose_downstream) on GitLab. ([packit-service#1842](https://github.com/packit/packit-service/pull/1842), [packit-service#1844](https://github.com/packit/packit-service/pull/1844), [packit-service#1845](https://github.com/packit/packit-service/pull/1845), [packit-service#1846](https://github.com/packit/packit-service/pull/1846))

## Week 3 + 4 (January 17th – January 30th)

- Users can now re-trigger _bodhi_update_ and _koji_build_ jobs by `/packit create-update`
  and `/packit koji-update` comments in an issue opened by Packit in the configured `issue_repository` if anything
  went wrong during these jobs. ([packit-service#1796](https://github.com/packit/packit-service/pull/1796))
- All Copr projects created by Packit now default to `enable_net=False`: our documentation stated this, but it
  wasn't the case. This is now corrected. ([packit#1825](https://github.com/packit/packit/pull/1825))
- You can now specify `update_release: false` in the configuration to tell Packit not to change the Version and
  Release in the spec file. It works the same as `--no-update-release` (renamed from now deprecated `--no-bump`) in
  the CLI. ([packit#1827](https://github.com/packit/packit/pull/1827))
- Packit now supports setting `module_hotfixes` for Copr projects.
  ([packit#1829](https://github.com/packit/packit/pull/1829))
- Packit now also allows passing in free-form parameters to Testing Farm in order to support all of its
  options immediately once they are added. The parameters can be passed through the `tf_extra_params` config option.
  The free-form dictionary must follow the structure of Testing Farm POST requests. See [our documentation](https://packit.dev/docs/testing-farm/)
  and examples for more information. ([packit-service#1853](https://github.com/packit/packit-service/pull/1853))
- Fixed a bug in section parsing that caused sections to be ignored when there were macro definitions spread
  across the spec file and not cumulated at the top. ([specfile#191](https://github.com/packit/specfile/pull/191))
- Also fixed the infinite loop that occurred when section options were followed by whitespace.
  ([specfile#197](https://github.com/packit/specfile/pull/197))
