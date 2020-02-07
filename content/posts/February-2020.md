---
title: "February 2020"
date: 2020-02-07
draft: false
---

## Week 6

Both Packit and Packit Service pre-commit hooks [were][1] [updated][2] to include
[prettier] and [setup-cfg-fmt], in order to have a more consistent formatting of
markup, YAML, JSON and `setup.cfg` files.

It became easier for developers to [build the Packit base image] locally, and
tests in Zuul [were configured] to run on Fedora 31.

Packit learned [how to look for RPM spec files on its own], so specifying
`specfile_path` in the configuration is not mandatory anymore. Packit will
recursively search the tree and use the first spec file found.

The Redis pod in Packit Service uses an up to date image now, [based on Fedora 31].
Kudos to [hhorak] for the help!

[1]: https://github.com/packit-service/packit/pull/697
[2]: https://github.com/packit-service/packit-service/pull/383
[prettier]: https://github.com/prettier/prettier
[setup-cfg-fmt]: https://github.com/asottile/setup-cfg-fmt
[build the Packit base image]: https://github.com/packit-service/packit/pull/695
[were configured]: https://github.com/packit-service/packit/pull/694
[how to look for RPM spec files on its own]: https://github.com/packit-service/packit/pull/634
[based on Fedora 31]: https://github.com/packit-service/deployment/pull/51
[hhorak]: https://github.com/hhorak
