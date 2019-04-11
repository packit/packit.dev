---
title: "Packit 0.3.0"
date: 2019-04-11
draft: false
---

In the [previous post](https://packit.dev/posts/packit-020/) we promised to
provide a new release every 2 weeks and we are already breaking this promise as
it's been 3 weeks since then. We decided to wait with the release to merge
several pull requests related to source-git support.

Now the good news. You can find a complete list of new features and
improvements of version
[0.3.0](https://github.com/packit-service/packit/releases/tag/0.3.0) in the
[changelog](https://github.com/packit-service/packit/blob/master/CHANGELOG.md#030).

<!--more-->

## Features

* You can now specify your own hooks or actions to replace default packit
  behaviour. (More information can be found [in the
  documentation](https://github.com/packit-service/packit/blob/master/docs/actions.md)).
* Packit supports pagure.io-based upstream projects.
* Commands `propose-update` and `sync-from-downstream` supports [copying
  directories](https://github.com/packit-service/packit/blob/master/docs/configuration.md#minimal-sample-config).
* A new command `status`! It displays useful upstream/downstream info.
* Packit now supports [Source-git](https://packit.dev/source-git/). The
  functionality is not available, yet - we will add a CLI interface for it in
  the next release.
* You can now have a config file for packit in your home directory(`~/.config/packit.yaml`).
* Packit installed from an RPM now has manpages.


### `packit status` example

```
$ packit status
Cloning repo: https://src.fedoraproject.org/rpms/packit.git -> /tmp/tmp84we_6n8
Downstream PRs: No open PRs.
f29: 0.2.0
f30: 0.2.0
master: 0.2.0

```
