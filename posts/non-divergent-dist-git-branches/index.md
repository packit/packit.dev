---
title: "No more divergent dist-git branches with Packit!"
date: 2024-10-28T10:46:18+00:00
authors: mmassari
tags:
  - propose-downstream
  - pull-from-upstream
  - downstream
  - configuration
---

Were you annoyed by Packit creating divergent branches in your package's dist-git repository? You'll be happy to know that Packit now supports a new `dist_git_branches` syntax that enables fast-forwarding commits between branches.

<!--truncate-->

## What's New

When defining a `propose-downstream` or `pull-from-upstream` job, you can use the new `dist_git_branches` syntax.

```
  dist_git_branches:
    rawhide:
      fast_forward_merge_into: [fedora-branched]
    epel-9: {}
```

In this example, Packit runs the downstream synchronization process for the `rawhide` and `epel-9` branches as usual. Additionally, Packit opens a new pull request, reusing the commit from `rawhide`, for every `fedora-branched` branch, allowing it to be fast-forwarded when merging.

Do you want to know more? Look at the [non-divergent dist-git branches guide](/docs/fedora-releases-guide/non-divergent-dist-git-branches)
