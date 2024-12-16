---
title: Week 50 in Packit
date: 2024-12-16
authors: mfocko
tags:
  - 2024-December
  - 2024
  - December
---

## Week 50 (December 10th – December 16th)

- We have added a `--resultdir` option for building in mock via our CLI
  (`packit build in-mock`).
  ([packit#2475](https://github.com/packit/packit/pull/2475))
- For our [specfile](https://github.com/packit/specfile) users, there is a new
  convenience method `Sections.get_or_create()` that allows you to manipulate
  a section without checking if it exists first. If a section doesn't exist, it
  will be appended to the end. For example, this will work properly even on
  spec files without `%changelog`:

  ```
  with spec.sections() as sections:
      changelog = sections.get_or_create("changelog")
      changelog[:] = ["%autochangelog"]
  ```

  ([specfile#441](https://github.com/packit/specfile/pull/441))

- We have also switched our base images from _CentOS 9 Stream_ to _Fedora 41_ to
  allow you using the features from the latest _rpm 4.20_.
  ([deployment#622](https://github.com/packit/deployment/pull/622))
- We have unified status names for VM Image builds.
  ([packit-service#2679](https://github.com/packit/packit-service/pull/2679))
- We have started building [our container images](https://quay.io/organization/packit)
  for alternative architectures.
  ([packit-service#2675](https://github.com/packit/packit-service/pull/2675))
