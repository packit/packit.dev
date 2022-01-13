---
title: "March 2021"
date: 2021-03-04T16:40:16+01:00
weight: 77
---

# March 2021

## Week 9 (March 1st - March 5th)

- Tomas improved the performance of sandcastle, all the user-defined actions now run in one sandbox.
  This should also speed up the SRPM builds. ([packit#1129](https://github.com/packit/packit/pull/1129))
- You can view the results of jobs directly in our dashboard, kudos to Anchit. ([dashboard#73](https://github.com/packit/dashboard/pull/73))
- Jirka implemented setting of the [environment context](https://tmt.readthedocs.io/en/latest/spec/context.html)
  when running the Testing farm tests. ([packit-service#1008](https://github.com/packit/packit-service/pull/1008))
- In Packit there is a new configuration option `sources` which overrides the URLs defined in specfiles.
  ([packit#1131](https://github.com/packit/packit/pull/1131), [packit#1143](https://github.com/packit/packit/pull/1143))

## Week 10 (March 8th - March 12th)

- Jirka worked on setting up GitHub Workflows across all of the Packit
  repositories to build the container images for Packit Service and push them
  to Quay.io.
- Tomáš fixed a bug in the linearization mechanism used when generating patch
  files from a series of Git commits. ([packit#1144](https://github.com/packit/packit/pull/1144))
- Hunor implemented a way for `packit` to detect if patch-files generated from
  Git are identical with the ones already in dist-git. This should help
  avoiding superfluous changes done by `propose-downstream`. ([packit#1133](https://github.com/packit/packit/pull/1133))
- Jirka increased the delay (to 3 minutes in total) for Packit Service when
  retrying downloading the sources during a `propose-downstream` job. This
  should give more time for the sources to become available after a release is
  created. ([packit-service#1019](https://github.com/packit/packit-service/pull/1019))
- Matěj fixed an ugly bug which caused Packit Service not to react to
  installation events. ([packit-service#1018](https://github.com/packit/packit-service/pull/1018))

## Week 11 (March 15th - March 19th)

- Laura fixed a bug in the processing of GitHub App installations.
  ([packit-service#1020](https://github.com/packit/packit-service/pull/1020))
- Jirka fixed a bug that caused improper numbering of patches for source-git.
  ([packit#1164](https://github.com/packit/packit/pull/1164))

## Week 12 (March 22th - March 26th)

- Franta improved database schema. It will help us match builds and tests together more easily and solve some UX problems.
  ([packit-service#954](https://github.com/packit/packit-service/pull/954))
- `packit init` CLI command has been updated to
  - place downstream packaging files in a subdirectory `.distro` instead of `fedora`.
    ([packit#1165](https://github.com/packit/packit/pull/1165))
  - enable using Stream 9 dist-git as a source.
    ([packit#1177](https://github.com/packit/packit/pull/1177))
- Laura reworked how specfiles are being synced from downstream dist-git repositories and we are running a PoC for packit's projects to test the new approach.
  ([packit-service#1023](https://github.com/packit/packit-service/pull/1023))
- It's possible to specify a distinct test repository for tests in a test job.
  ([packit#1155](https://github.com/packit/packit/pull/1155))
  ([packit-service#1021](https://github.com/packit/packit-service/pull/1021))
- `centos-stream` target is temporarily resolved to `centos-stream-8` to reflect a change in Copr.
  ([packit#1167](https://github.com/packit/packit/pull/1167))

## Week 13 (March 29th - April 1st)

- Jirka fixed a bug in `packit push-update`
  ([packit#1191](https://github.com/packit/packit/pull/1191)).
- Matěj introduced the `fedora-latest` alias for build and test targets, which
  resolves to the latest _branched_ Fedora Linux
  ([packit#1187](https://github.com/packit/packit/pull/1187)).
- A custom path for the package config (aka `packit.yaml`) can be specified
  using a new, top-level `-c, --config` option
  ([packit#1184](https://github.com/packit/packit/pull/1184)).
