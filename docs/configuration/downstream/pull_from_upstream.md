---
title: Pull from upstream
sidebar_position: 1
---

# `job: pull_from_upstream`

A dist-git only job that opens a new dist-git pull request in
src.fedoraproject.org when a new upstream release happens using a notification
from [release-monitoring.org](https://release-monitoring.org/).

This job utilizes the same logic as `propose_downstream` with the only
exception that it is defined and executed in dist-git.

Use [`issue_repository`](/docs/configuration#issue_repository) option to get information about
possible failures during the update process.

## Requirements

* The job is defined in a Packit config in the default branch of the dist-git
  repository (`rawhide`). Packit configs on other branches are ignored.
* Upstream release monitoring is active for the package. [The monitoring
  status](https://docs.fedoraproject.org/en-US/package-maintainers/Upstream_Release_Monitoring/)
  in dist-git should be set to `Monitoring`).
* [`upstream_project_url`](/docs/configuration#upstream_project_url) is defined in the configuration.

:::info

Upstreams (defined in `upstream_project_url`) hosted in these Git forges are currently supported:
* https://github.com
* https://gitlab.com
* https://gitlab.freedesktop.org
* https://gitlab.gnome.org
* https://salsa.debian.org

Support for working with upstreams in all Git forges is planned to be 
worked on shortly ([see](https://github.com/packit/packit-service/issues/1907)).

:::

## Supported triggers

* **release**

## Optional parameters

* **dist_git_branches** - a (list of) branch(es) in dist-git where packit should work (defaults to `main`).
  You can also use the [aliases provided by Packit](/docs/configuration#aliases)
  to not need to change the config file when the new system version is released.

## Retriggering
Packagers with write access to the dist-git repository can retrigger the job
via a comment in any dist-git pull request:

    /packit pull-from-upstream

This will take the Packit configuration file from the `rawhide` dist-git branch, same as if the job was triggered by a new release. To use the configuration file from the dist-git pull request you are commenting on, you can add an argument:

    /packit pull-from-upstream --with-pr-config

## Example

```yaml
upstream_project_url: https://github.com/packit/packit
...
jobs:
- job: pull_from_upstream
  trigger: release
  dist_git_branches:
    - fedora-all
    - epel-9
```

Once a new upstream release happens, Packit will open a pull request with it in
all active Fedora releases and EPEL 9.

If you need to do any change in the pull request, you need to locally fetch the source branch 
of the Packit's pull request and push it (with a fix) to your fork (as it is not possible to push to the branch 
created in the Packit's fork):

    git fetch https://src.fedoraproject.org/forks/packit/rpms/$YOUR_PACKAGE.git refs/heads/*:refs/remotes/packit/*
    git cherry-pick packit/$VERSION-$BRANCH-update-pull_from_upstream

For more details, check [our release guide](/docs/fedora-releases-guide).
