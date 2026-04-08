---
title: "Packit now supports multiple release streams"
date: 2026-04-08T08:00:00+00:00
authors: nforro
tags:
  - Upstream Release Monitoring
  - pull-from-upstream
  - downstream
  - configuration
---

There are upstream projects that have multiple release streams and, for example, regularly release
patch versions for every active minor version. With
[`pull-from-upstream`](/docs/configuration/downstream/pull_from_upstream) you have been able
to follow only the highest stream, but that now changes. By switching
[`Monitoring status`](https://the-new-hotness.readthedocs.io/en/stable/user-guide.html#notifications-settings-legacy)
of your package from `Monitoring` to `Monitoring all`, you enable triggering
[`pull-from-upstream`](/docs/configuration/downstream/pull_from_upstream)
for every released version, not only the highest. This means you can use options such as
[`version_update_mask`](/docs/configuration/#version_update_mask),
[`upstream_tag_include`](/docs/configuration/#upstream_tag_include) or
[`upstream_tag_exclude`](/docs/configuration/#upstream_tag_exclude) (those require
[`upstream_project_url`](/docs/configuration/#upstream_project_url) to be set)
to filter a specific release stream you want to follow, or have multiple
[`pull-from-upstream`](/docs/configuration/downstream/pull_from_upstream) jobs,
each matching different releases and targeting different dist-git branches.

<!--truncate-->

:::tip

Instead of changing `Monitoring status` in the dist-git web UI, you can have a
[`monitoring.toml`](https://the-new-hotness.readthedocs.io/en/stable/user-guide.html#notifications-settings)
file in the `rawhide` branch in dist-git and set `all_versions = true` to trigger
[`pull-from-upstream`](/docs/configuration/downstream/pull_from_upstream) for all released versions.

:::

## Configuration example

For an upstream project releasing 1.7.z and 1.6.z streams, you could configure the jobs like this:

```
jobs:

- job: pull_from_upstream
  trigger: release
  upstream_tag_exclude: ^v1\.6\.\d+$
  dist_git_branches:
   - fedora-rawhide

- job: pull_from_upstream
  trigger: release
  upstream_tag_include: ^v1\.6\.\d+$
  dist_git_branches:
   - fedora-branched
```

With this configuration security backports to the 1.6 upstream branch would result in Packit opening dist-git PRs
against branched Fedoras while for any other release Packit would open dist-git PRs in Rawhide.

:::tip

We have introduced a new configuration option
[`version_update_specifiers`](/docs/configuration/#version_update_specifiers).
It borrows syntax of
[PEP440 version specifiers](https://peps.python.org/pep-0440/#version-specifiers)
and gives you more flexibility when filtering release streams. For example:

```
jobs:

- job: pull_from_upstream
  trigger: release
  # 3.y.z or higher versions go to Rawhide
  version_update_specifiers: >=3.0
  dist_git_branches:
   - fedora-rawhide

- job: pull_from_upstream
  trigger: release
  # versions 2.y.z go to stable Fedoras, excluding a known broken version
  version_update_specifiers: ~=2.0, !=2.5.4
  dist_git_branches:
   - fedora-branched
```

:::
