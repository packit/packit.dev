---
title: "November 2021"
date: 2021-11-08
draft: false
weight: 69
---

## Week 44 (November 1st - November 5th)

- We have fixed several issues in packit when it's periodically checking
  statuses of jobs. You should now reliably see up to date check statuses for
  Copr RPM builds and Testing Farm runs.
  ([packit-service#1267](https://github.com/packit/packit-service/pull/1267)),
  ([packit-service#1265](https://github.com/packit/packit-service/pull/1265))
- Fixed an issue, which raised a `UnicodeEncodingError`, when working with
  dist-git patch files with an encoding other than UTF-8.
  ([packit#1406](https://github.com/packit/packit/pull/1406))
- Backup alias definitions now reflect the official release of Fedora 35.
  ([packit#1405](https://github.com/packit/packit/pull/1405))

## Week 45 (November 8th - November 12th)

- You can now specify `skip_build` option in the test job metadata in the
  Packit configuration file. This will cause no Copr build to be built and
  installed into the testing environment, but only trigger the tests in
  Testing Farm (the selected components to be installed should be part of the
  TMT definitions).
  ([packit-service#1256](https://github.com/packit/packit-service/pull/1256))
- Packit supports `changelog-entry` action that is used when creating SRPM.
  The action is supposed to generate whole changelog entry (including `- ` at
  the start of the lines) and has a priority over any other way we modify the
  changelog with. ([packit#1367](https://github.com/packit/packit/pull/1367))

## Week 46 (November 15th - November 19th)

- A new `env` config option has been added for specifying environment variables,
  which are then passed to Testing Farm along with some more pre-defined
  variables (e.g. name of the project, URL, etc).
  ([packit#1411](https://github.com/packit/packit/pull/1411))
  ([packit-service#1275](https://github.com/packit/packit-service/pull/1275))
- The Github check run names are now shorter and easier to read.
  ([packit-service#1281](https://github.com/packit/packit-service/pull/1281))

## Week 47 (November 22th - November 26th)

- You can set up a new `koji_build` job using the commit trigger to submit a
  Koji build for a new commit in a dist-git branch. The configuration file
  needs to be present in the dist-git for now
  (the state for the new commit is used).
  ([packit-service#1278](https://github.com/packit/packit-service/pull/1278))
