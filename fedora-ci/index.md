---
title: Fedora CI documentation
sidebar_position: 0
id: index
---

Packit as Fedora dist-git CI is implemented as part of [this Fedora change proposal](https://fedoraproject.org/wiki/Changes/PackitDistgitCI).
This initiative transitioned Fedora dist-git CI to a Packit-based solution, deprecating Fedora CI and Fedora Zuul Tenant.
The change affects the triggering and reporting mechanism for tests but does not alter the tests themselves or the test
execution service ([Testing Farm](https://docs.testing-farm.io/Testing%20Farm/0.1/index.html)).

**Fedora CI is now enabled by default for all Fedora dist-git repositories.**

If you need to opt out, you can request your repository to be added to the
[`disabled_projects_for_fedora_ci`](https://github.com/packit/deployment/blob/main/secrets/packit/prod/packit-service.yaml.j2)
list in the Packit deployment configuration.

For more info continue with:

- [Jobs run in CI](fedora-ci/jobs.md)
- [Retriggering](fedora-ci/retriggering.md)
- [Configuration](fedora-ci/configuration.md)
- [Development](fedora-ci/development.md)
- [TMT Integration](fedora-ci/tmt-integration.md)
