---
title: "Packit 0.4.0 & 0.4.1"
date: 2019-05-18
draft: false
disableToc: false
weight: 4
---

It's been over a month since we released packit "0.3.0". Here comes packit 0.4.0 (and patch release 0.4.1) and as always they bring a lot of new features and improvements.

You can find a complete list in the
[changelog](https://github.com/packit-service/packit/blob/master/CHANGELOG.md#040).

<!--more-->

## Packit as a service

* We have Packit as a service running in OpenShift and also a GitHub App, which uses it.
Unfortunately it's still not in the [Marketplace](https://github.com/marketplace),
so [we](https://github.com/packit-service) have been the only one using it so far.
The service/app submits builds in [copr](https://copr.fedorainfracloud.org/coprs/packit/) and
once they're done it adds a GitHub status and comment with instructions how to install the builds.
The service is now configurable via [jobs](/docs/configuration/#packit-service-jobs) defined
in configuration file.
* Packit is now able to check GPG signatures of the upstream commits against configured fingerprints.

## CLI
* `srpm` command now works also with [Source-git](/source-git/).
* `status` command now access remote APIs asynchronously in parallel, which should speed up
the execution.
* CLI has new `--dry-run` option to not perform any remote changes (pull requests or comments).
* Fedmsg parsing has been unified into a single `listen-to-fedmsg` command.
