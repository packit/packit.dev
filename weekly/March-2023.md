---
title: "Packit March 2023"
date: 2023-03-13T15:00:00+01:00
tags:
  - 2023
---

## Week 10 (March 7th – March 13th)

- Parsing the spec file by RPM is now performed only if really necessary, greatly improving performance in certain scenarios. ([specfile#212](https://github.com/packit/specfile/pull/212))

## Week 11 (March 14th – March 20th)

- Packit now uses the `get_current_version` action defined by the user to retrieve version before updating the specfile %setup macro (if any). ([packit#1886](https://github.com/packit/packit/pull/1886))

## Week 12 (March 21st – March 27th)

- 'upstream_tag_template' is now also used when looking for the latest version tag in Git.
  This allows upstream repositories to mix different tag-patterns in the same repository,
  but consider only one to tell the latest version.
  ([packit#1891](https://github.com/packit/packit/pull/1891))

## Week 13 (March 28th – April 3rd)

- Packit now preserves `%autorelease` during `propose_downstream` and `pull_from_upstream`. ([packit#1904](https://github.com/packit/packit/pull/1904))
- Since in GitLab, it is not possible to overwrite the pending statuses, Packit now provides more generic descriptions and URLs when setting the first pending status. ([packit-service#1975](https://github.com/packit/packit-service/pull/1975))
