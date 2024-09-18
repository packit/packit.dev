---
title: "Non-git upstreams support and simplified configuration for easier onboarding!"
date: 2024-09-18T10:46:18+02:00
authors: lbarczio
tags:
  - pull-from-upstream
  - downstream
  - configuration
---

We are happy to announce that support for non-git upstreams in the [`pull_from_upstream` job](/docs/configuration/downstream/pull_from_upstream) is here!
This enhancement simplifies configuration by removing the need to define [`upstream_project_url`](/docs/configuration#upstream_project_url),
opening the door for more use cases, while also simplifying the onboarding in general.

<!--truncate-->

## What changed

Previously, the `upstream_project_url` configuration option was required to point to a git repository for the `pull_from_upstream` job to work.
Now, with this update, it’s no longer necessary, allowing the job to sync the releases also for packages with non-git upstreams.
Even for packages having git-based upstreams, this change allows to skip configuration of this option
when the repository interaction is unnecessary.

Without `upstream_project_url` configured, no repository will be cloned, and no git interaction will occur.
The configured [actions](/docs/configuration/actions) will be executed in an arbitrary directory.
Additionally, related configuration options such as [`upstream_tag_template`](/docs/configuration#upstream_tag_template), [`upstream_tag_include`](/docs/configuration#upstream_tag_include), and [`upstream_tag_exclude`](/docs/configuration#upstream_tag_exclude) will be ignored.
If you need to filter releases, this can still be done on the [`release-monitoring`](https://release-monitoring.org/) project settings side.

## Configuration generation automation

This update also makes automation easier. You can use the [`packit dist-git init` command](/docs/cli/dist-git/init) to generate your configuration
file without specifying `--upstream-git-url`, enabling easier scripting for mass onboarding of your packages.
For more advanced use cases, additional arguments can still be added to adjust the configuration as needed.
