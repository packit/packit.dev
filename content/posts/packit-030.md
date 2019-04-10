---
title: "Packit 0.3.0"
date: 2019-04-11
draft: false
---

In the [previous post](https://packit.dev/posts/packit-020/) we promised to provide a new release every 2 weeks and we are already breaking that as it's been 3 weeks since then.
The reason is that we wanted to add the full source-git support into 0.3.0.

Now the good news. [0.3.0](https://github.com/packit-service/packit/releases/tag/0.3.0), the new packit version, brings many new features and improvements.
You can find a complete list in the [changelog](https://github.com/packit-service/packit/blob/master/CHANGELOG.md#030).
<!--more-->

## Features

* Packit supports [Source-git](https://packit.dev/source-git/). Sadly, we forgot to add the `--upstream-revision` option to CLI, so it's only in the `PackitAPI`. That means we actually do not have full source-git support in 0.3.0. It will be fixed either in `0.3.1` or `0.4.0`.
* You can now specify your own hooks or actions to replace default packit behaviour. (More information can be found [in the documentation](https://github.com/packit-service/packit/blob/master/docs/actions.md)).
* Packit supports pagure.io-based upstream projects.
* Packit {propose-update, sync-from-downstream} supports copying directories.
* A new command `status`! It displays useful upstream/downstream info.

```
$ packit status
Cloning repo: https://src.fedoraproject.org/rpms/packit.git -> /tmp/tmp84we_6n8
Downstream PRs: No open PRs.
f29: 0.2.0
f30: 0.2.0
master: 0.2.0

```

* You can now have a config file for packit in your home directory(`~/.config/packit.yaml`).
* Packit installed from an RPM now has manpages.
