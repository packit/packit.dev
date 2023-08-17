---
title: Week 32 in Packit
date: 2023-08-14
authors: flachman
tags:
  - 2023-August
  - 2023
  - August
---

## Week 32 (August 8th – August 14th)

- Two new configuration options for filtering when getting latest upstream release tag were introduced: `upstream_tag_include` and `upstream_tag_exclude`. They should contain a Python regex that can be used as an argument in `re.match`. ([packit#2030](https://github.com/packit/packit/pull/2030), [packit-service#2138](https://github.com/packit/packit-service/pull/2138))
- Retriggering of `pull-from-upstream` via a comment will now use the correct configuration file from the default dist-git branch. ([packit-service#2140](https://github.com/packit/packit-service/pull/2140))
- The `pull-from-upstream` job can now be used with upstream repos that are not hosted on a supported git forge. ([packit-service#2137](https://github.com/packit/packit-service/pull/2137))
