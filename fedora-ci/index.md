---
title: Fedora CI documentation
sidebar_position: 0
id: index
---

Packit as Fedora dist-git CI is implemented as part of [this Fedora change proposal](https://fedoraproject.org/wiki/Changes/PackitDistgitCI).
The implementation is currently in progress.
This initiative aims to transition Fedora dist-git CI to a Packit-based solution, deprecating Fedora CI and Fedora Zuul Tenant.
The change affects the triggering and reporting mechanism for tests but does not alter the tests themselves or the test
execution service ([Testing Farm](https://docs.testing-farm.io/Testing%20Farm/0.1/index.html)). The transition will be gradual, allowing maintainers to try the integration out,
provide feedback and catch issues early.

For more info continue with:

- [Jobs run in CI](fedora-ci/jobs.md)
- [Retriggering](fedora-ci/retriggering.md)
- [Configuration](fedora-ci/configuration.md)
- [Development](fedora-ci/development.md)
