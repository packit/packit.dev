---
title: Development
sidebar_position: 4
---

## Links

- [Fedora change proposal](https://fedoraproject.org/wiki/Changes/PackitDistgitCI)
  - Original proposal of this change, including the time plan and detailed description.
- [Tracking issue](https://github.com/packit/packit-service/issues/2692)
  - Plan of the tasks to be implemented.
- [Discussions](https://github.com/packit/packit/discussions/2520)
  - For ideas or suggestions to discuss, feel free to add a discussion topic.
- [Issue tracker](https://github.com/packit/packit-service/issues/new?template=fedora-ci.yml)
  - For filing bug, new features, etc.
- [Source code](https://github.com/packit/packit-service)
  - Source code of the CI implementation. This will be moved to a separate repository.
- [#packit:fedora.im](https://matrix.to/#/#packit:fedora.im?web-instance[element.io]=chat.fedoraproject.org)
  - Matrix channel for answering any questions.

## Current plan

- [x] Phase 1: Introduce scratch builds for Fedora dist-git PRs (opt-in).
- [x] Phase 2: Implement installability checks (opt-in).
- [x] Phase 3: Implement support for user-defined TMT tests (opt-in).
- [ ] Final Phase: Transition to the new Packit-based CI as the default mechanism, replacing Fedora CI.
