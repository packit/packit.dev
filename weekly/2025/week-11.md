---
title: Week 11 in Packit
date: 2025-03-17
authors: nforro
tags:
  - 2025-March
  - 2025
  - March
---

## Week 11 (March 11th – March 17th)

- It is now possible to set `use_target_repo_for_fmf_url` configuration flag to bypass
  the default passing of fork URLs for test requests.
  ([packit-service#2752](https://github.com/packit/packit-service/pull/2752))
- Packit as Fedora CI no longer overwrites Koji scratch build statuses on a PR
  when the same commit is shared between different target branches.
  ([packit-service#2747](https://github.com/packit/packit-service/pull/2747))
- New aliases for minor versions of EPEL have been added, see the
  [documentation](/docs/configuration#epel-minor-version-aliases)
  for more details.
  ([fedora-distro-aliases#27](https://github.com/rpm-software-management/fedora-distro-aliases/pull/27))
