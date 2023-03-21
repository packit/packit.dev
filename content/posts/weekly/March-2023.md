---
title: "Packit March 2023"
date: 2023-03-13T15:00:00+01:00
weight: 53
---

## Week 10 (March 7th – March 13th)

- Parsing the spec file by RPM is now performed only if really necessary, greatly improving performance in certain scenarios. ([specfile#212](https://github.com/packit/specfile/pull/212))

## Week 11 (March 14th – March 20th)

- Packit now uses the `get_current_version` action defined by the user to retrieve version before updating the specfile %setup macro (if any). ([packit#1886](https://github.com/packit/packit/pull/1886))
