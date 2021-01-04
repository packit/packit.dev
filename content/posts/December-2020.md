---
title: "December 2020"
date: 2020-12-04
draft: false
weight: 80
---

## Week 49 (November 30th - December 4th)

- [Jano] fixed a bug in `sync_release` method of Packit API. ([packit#1043](https://github.com/packit/packit/pull/1043))
- [Jiri Konecny] contributed a fix for how Packit creates COPR urls. ([packit#1039](https://github.com/packit/packit/pull/1039))
- [Laura] updated instructions how to retrigger a job. ([packit-service#892](https://github.com/packit/packit-service/pull/892))

[jano]: https://github.com/sakalosj
[jiri konecny]: https://github.com/jkonecny12
[laura]: https://github.com/lbarcziova

## Week 50 (December 7th - December 11th)

- [Tomas] implemented the `--upstream-url` option of `packit init` command. When specified,
  `init` also sets up a source-git repository next to creating a configuration file.

[tomas]: https://github.com/TomasTomecek

## Week 51 (December 14th - December 18th)

- Congratulations comments are now disabled by default, unless enabled in config.
- A bug, which prevented npm to be run during SRPM build, has been fixed. ([sandcastle#86](https://github.com/packit/sandcastle/pull/86))
