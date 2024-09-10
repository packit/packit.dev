---
title: Week 36 in Packit
date: 2024-09-09
authors: lbarczio
tags:
  - 2024-September
  - 2024
  - September
---

## Week 36 (September 3rd – September 9th)

- Packit now supports passing custom arguments to various static analyzers through `--csmock-args` CLI option and `csmock_args` configuration. ([packit#2402](https://github.com/packit/packit/pull/2402))
- When syncing a new release, Packit can now avoid diverging git branches by reusing the commit from one branch when opening pull requests into other branches. (These pull requests can be merged in fast-forward mode.)
  Use the new syntax for `dist_git_branches` as in this example to utilise this functionality:

```
{
  "rawhide": {
    "fast_forward_merge_into": ["f40"]
   },
  "fedora-stable": {}
}
```

([packit-service#2478](https://github.com/packit/packit-service/pull/2478))
