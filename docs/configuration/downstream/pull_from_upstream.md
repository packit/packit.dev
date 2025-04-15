---
title: Pull from upstream
sidebar_position: 1
---

# `job: pull_from_upstream`

A dist-git only job that opens a new dist-git pull request in
src.fedoraproject.org when a new upstream release happens using a notification
from [release-monitoring.org](https://release-monitoring.org/). Upstream Release Monitoring creates a Bugzilla
for the new upstream release and this Bugzilla is by default referenced in the dist-git changelog as
`- Resolves rhbz#xz` and `- Resolves rhbz#xz` in the commit message. 


Bodhi updates created by the `bodhi_update` job as well as [automatic Bodhi updates](https://fedora-infra.github.io/bodhi/6.0/user/automatic_updates.html) will have this Bugzilla assigned and it will be closed when they reach stable.
There is also an env variable with the list of bugs to be closed
`PACKIT_RESOLVED_BUGS` that you can use in the case you want to customize the changelog creation but still have
the bugs automatically closed.

This job behaviour can be customized
using [actions](/docs/configuration/actions#syncing-the-release). The `PACKIT_RESOLVED_BUGS` env variable is 
available both for the `commit-message` and `changelog-entry` actions.

This job utilizes the same logic as [`propose_downstream`](/docs/configuration/upstream/propose_downstream) with the only
exception that it is defined and executed in dist-git.

:::tip Downstream configuration template

You can use our [downstream configuration template](/docs/configuration/downstream_configuration_template) 
for creating your Packit configuration in dist-git repository.

:::

:::tip Automate the setup

You can also use [packit dist-git init](/docs/cli/dist-git/init.md) CLI command to create your
Packit dist-git configuration.

:::

## Requirements

* The job is defined in a Packit config in the default branch of the dist-git
  repository (`rawhide`). Packit configs on other branches are ignored.
* Upstream release monitoring is active for the package. [The monitoring
  status](https://docs.fedoraproject.org/en-US/package-maintainers/Upstream_Release_Monitoring/)
  in dist-git should be set to `Monitoring`.

### Optional
* [`upstream_project_url`](/docs/configuration#upstream_project_url) pointing to a Git repository.
If this is not configured, no repository will be cloned (no interaction with it will occur), 
and the [actions](/docs/configuration/actions) will be executed in an arbitrary directory.

## First setup
When setting up this job for the first time, please follow the recommended actions from 
[our release guide](/docs/fedora-releases-guide/dist-git-onboarding#release-syncing).

:::caution
Please, use the [`issue_repository`](/docs/configuration#issue_repository) option to get information about
possible failures during the update process (otherwise, you will not be notified about the job failures).
Use a repository you maintain as we will create issues about failures here.
:::caution


## Supported triggers

* **release**


## Optional parameters

* **dist_git_branches** 
  - a (list of) branch(es) in dist-git where packit should work (defaults to `main`).
  - or a dict whose *keys* are the names of the dist-git branches where packit synchronizes release changes 
  and the *values* are in the form of an empty dict `{}` or as 
  `{fast_forward_merge_into: [other branches names]}`. In the second example, packit tries to fast forward
  the changes created for the *key branch* in the *other branches* opening a pull request for them.

:::info
For how to keep dist-git branches non divergent 
please see the details [here](/docs/fedora-releases-guide/non-divergent-dist-git-branches.md).
:::

  As branch names you can use the [aliases provided by Packit](/docs/configuration#aliases)
  to not need to change the config file when the new system version is released.

:::tip 

For more details and customization options, also check 
[our release guide](/docs/fedora-releases-guide/dist-git-onboarding#pull-from-upstream-job).

:::

## Retriggering

For retriggering the job, see [retriggering docs](/docs/retriggering#pull_from_upstream).

## Example

```yaml
upstream_project_url: https://github.com/packit/packit
issue_repository: https://github.com/my-username/packit-notifications

jobs:
- job: pull_from_upstream
  trigger: release
  dist_git_branches:
    - fedora-all
    - epel-9
```

Once a new upstream release happens, Packit will open a pull request with it in
all active Fedora releases and EPEL 9.

