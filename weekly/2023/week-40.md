---
title: Week 40 in Packit
date: 2023-10-09
authors: mfocko
tags:
  - 2023-October
  - 2023
  - October
---

## Week 40 (October 3rd – October 9th)

- We have fixed an issue that you could encounter when running the Packit from the CLI that caused misinterpretation of the repository to be an upstream repo instead of a downstream. ([packit#2117](https://github.com/packit/packit/pull/2117))
- Packit now also detects resolved bugs in the default update notes (created from changelog diff) and assigns these when submitting the Bodhi updates. ([packit#2111](https://github.com/packit/packit/pull/2111))
- We have fixed an issue that prevented automated allowlisting in the Packit Service. ([packit#2113](https://github.com/packit/packit/pull/2113))
- Packit now exports `PACKIT_UPSTREAM_PACKAGE_NAME`, `PACKIT_DOWNSTREAM_PACKAGE_NAME` and `PACKIT_CONFIG_PACKAGE_NAME` also in the `changelog_entry` action. ([packit#2103](https://github.com/packit/packit/pull/2103))
- Packit now posts a comment with a link to the Packit dashboard to the pull requests created in Fedora dist-git when syncing the release. ([packit-service#2215](https://github.com/packit/packit-service/pull/2215))
