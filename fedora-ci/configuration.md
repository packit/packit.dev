---
title: Configuration
sidebar_position: 3
---

During the development phase, maintainers can opt in by adding their dist-git repository to the configuration [here](https://github.com/packit/deployment/blob/2cd9e846a6ab1c320f6a6c589e4bcab6b3cfb762/secrets/packit/prod/packit-service.yaml.j2#L105)
and submitting a [pull request](https://github.com/packit/deployment/pulls).

In later phases, CI will run by default on all packages. The exact details of test plan configuration are still
being finalized, but the plan is to have a global default configuration that works well for most repositories.
