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
