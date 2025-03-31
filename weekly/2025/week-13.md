---
title: Week 13 in Packit
date: 2025-03-31
authors: nforro
tags:
  - 2025-March
  - 2025
  - March
---

## Week 13 (March 25th – March 31st)

- We have fixed an issue that could cause subsequent runs
  of `propose_downstream`/`pull_from_upstream` to fail if upstream git repo
  contains submodules that are manipulated with in actions.
  ([packit-service#2768](https://github.com/packit/packit-service/pull/2768))
- Packit now supports `--base-nvr` option when submitting scans to OpenScanHub.
  The base NVR is pulled in from Koji to perform a differential scan.
  ([packit#2569](https://github.com/packit/packit/pull/2569))
- Packit CLI now submits Koji builds in parallel.
  ([packit#2568](https://github.com/packit/packit/pull/2568))
