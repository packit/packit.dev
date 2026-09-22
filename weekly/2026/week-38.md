---
title: Week 38 in Packit
date: 2026-09-21
authors: mfocko
tags:
  - 2026-September
  - 2026
  - September
---

## Week 38 (September 15th – September 21st)

- New `skip_install` option for test jobs to omit automatic installation of
  Copr packages on Testing Farm runner. ([packit#2776](https://github.com/packit/packit/pull/2776))
- There are also improvements to `/packit help` from an external contributor
  [@burakeyler](https://github.com/burakeyler). ([packit-service#3186](https://github.com/packit/packit-service/pull/3186))
- `Status.get_downstream_prs()` now uses `itertools.islice()` to consume only
  the required number of PRs from the `Iterable` returned
  by `ForgejoProject.get_pr_list()`, avoiding loading all PRs into memory. ([packit#2771](https://github.com/packit/packit/pull/2771))
