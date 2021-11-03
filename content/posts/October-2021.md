---
title: "October 2021"
date: 2021-10-04T11:00:11+02:00
draft: false
weight: 70
---

## Week 39 (September 27th - October 1st)

- Clicking on logo on [dashboard](https://dashboard.packit.dev/) no longer
  opens a new page, but rather reloads the current one.
- We consider [Pipelines view](https://dashboard.packit.dev/pipelines) on
  dashboard to be ready for production use. We're planning to improve the user
  experience when using pipelines with easier navigation and filtering
  options.
- Building the latest development versions of
  [packit](https://github.com/packit/packit) and
  [ogr](https://github.com/packit/ogr) was moved to the
  [packit/packit-dev](https://copr.fedorainfracloud.org/coprs/packit/packit-dev/)
  Copr repo.

## Week 40 (October 4th - October 8th)

- [A bug](https://github.com/packit/packit/issues/1255) in Packit causing
  issues with local build when the branch was named with prefix `rpm` has been
  fixed.
- To fulfill requests regarding updating targets on Copr repositories, Packit
  Service will sync targets for the projects created by Packit Service (e.g.
  pull requests, or non-set Copr repository for releases and branch builds)
  and for Copr repositories **not owned by Packit** will try to extend the
  list if necessary.
- If you trigger packit jobs with one of `/packit _` commands, our bot gives
  you a 👍 reaction to let you know that we are working on it.
- Rerunning of failed tasks via Github Checks interface is now supported. You are now free to click those "Re-run" links.
- [ogr documentation](https://packit.github.io/ogr/) is converted to
  Google-style docstrings. In case there are any discrepancies, missing docs
  or docstrings in different format, please open an issue.

## Week 41 (October 11th - October 15th)

- We have added a new option to Packit CLI when creating Bodhi updates, you can
  use `-b` or `--resolve- bugzillas` and specify IDs (separated by comma, e.g.
  `-b 1` or `-b 1,2,3`) of bugzillas that are being closed by the update.
  ([packit#1383](https://github.com/packit/packit/pull/1383))
- Packit will deduce the version for SRPM from the spec file, if there are no
  git tags or action for acquiring current version defined.
  ([packit#1388](https://github.com/packit/packit/pull/1388))
- It is possible to use `aarch64` architecture in the Testing Farm.
  ([packit-service#1247](https://github.com/packit/packit-service/pull/1247))
- Running tests via Testing Farm now supports `centos-6` target.
  ([packit-service#1244](https://github.com/packit/packit-service/pull/1244))

## Week 42 (October 18th - October 22th)

- We have introduced new options for generating SRPM packages:
  ([packit#1396](https://github.com/packit/packit/pull/1396))
  - `--no-bump` that prevents changing of the release in the SRPM,
    which can be used for creating SRPMs on checked out tags/releases.
  - `--release-suffix` that allows you to customize the suffix after the release number,
    e.g. reference bugzilla or specific branch of the build.
- Copr build installation instructions now contain detailed info about
  the built packages, so you can install the precise build from your pull request.
  ([dashboard#149](https://github.com/packit/dashboard/pull/149))

## Week 43 (October 25th - November 1st)

- We have introduced a new configuration option `merge_pr_in_ci` that allows you to disable merging of PR into the base branch before creating SRPM in service. ([packit#1395](https://github.com/packit/packit/pull/1395), [packit-service#1261](https://github.com/packit/packit-service/pull/1261))
- If the upstream spec file is located in a subdirectory (such as
  `packaging/fedora/pkg.spec`), it is now correctly synced to the root of
  the downstream repository, since that's where rpmbuild will look
  for it. ([packit#1402](https://github.com/packit/packit/pull/1402))
- The "Congratulations!" comment no longer has a disclaimer about our intentions to stop posting it by default. We have already made that move earlier this year, so the disclaimer is no longer relevant. ([packit-service#1260](https://github.com/packit/packit-service/pull/1260))
- Deprecated configuration options `current_version_command` and `create_tarball_command` have been removed and are no longer supported. They are superseded by actions `get-current-version` and `create-archive`. ([packit#1397](https://github.com/packit/packit/pull/1397))
