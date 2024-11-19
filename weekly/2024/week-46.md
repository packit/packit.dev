---
title: Week 46 in Packit
date: 2024-11-18
authors: lbarczio
tags:
  - 2024-November
  - 2024
  - November
---

## Week 46 (November 12th – November 18th)

- The Packit configuration file now supports a top-level placeholder key, `_`, which is ignored when parsing the file.
  This is useful for storing YAML anchors in complex config files, e.g.:

```yaml
_:
  base-test: &base-test
    job: tests
    fmf_path: .distro
jobs:
  - <<: *base-test
    trigger: pull_request
    manual_trigger: true
  - <<: *internal-test
    trigger: commit
    use_internal_tf: true
```

([packit#2378](https://github.com/packit/packit/pull/2378))

- You can now define `with_opts` and `without_opts` in target-specific configuration of `copr_build` job to build with `--with` and `--without` rpmbuild options. ([packit#2463](https://github.com/packit/packit/pull/2463))
- We have made several improvements to our dashboard:
  - The Copr installation instructions have been updated. ([dashboard#487](https://github.com/packit/dashboard/pull/487))
  - You can now view the number of new findings from OpenScanHub scans. ([dashboard#489](https://github.com/packit/dashboard/pull/489))
  - Displaying of Copr builds in Testing Farm run views was improved as well. ([dashboard#481](https://github.com/packit/dashboard/pull/481))
