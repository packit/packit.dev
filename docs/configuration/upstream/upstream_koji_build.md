---
title: Koji builds
sidebar_position: 3
---

# `job: upstream_koji_build`

Create a SRPM from upstream and submit a scratch RPM build
to [Fedora Koji](https://koji.fedoraproject.org/koji/) build system.

At the moment it is not possible to run non-scratch Koji builds from upstream.
For more info, please see [the following issue](https://pagure.io/releng/issue/9801).

If you want to do official Koji builds, the sources need to be present in
dist-git: job [`koji_build`](/docs/configuration/downstream/koji_build) can take care of that.

(The job used to be called `production_build` but we are deprecating that name in favour of
the more explicit `upstream_koji_build`.)

## Supported triggers

* **pull_request** - check out content of the pull request
* **commit** - reacts to new commits to the specified branch
* **release** - check out content of the tag associated with the release

## Optional parameters

* **scratch** - (boolean) used to create a scratch (test) build instead of the real production build

  :::warning

  Needs to be set to `true` for upstream Koji builds.

  :::

* **targets** - (a list of) targets we want to build for,
  list of supported targets can be listed using with `koji list-targets`.
  You can also use the [aliases provided by Packit](/docs/configuration#aliases)
  to not need to change the config file when the new system version is released.
* **branch** - the name of the branch we want to build for when using **commit** trigger
(defaults to the repository's default branch) or target branch when using **pull_request** trigger
(default behaviour is reacting to all pull requests in the repository).

## Retriggering

For retriggering the job, see [retriggering docs](/docs/retriggering#upstream_koji_build).
