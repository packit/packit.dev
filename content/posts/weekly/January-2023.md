---
title: "Packit January 2023"
date: 2023-01-02T15:00:00+01:00
weight: 54
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
