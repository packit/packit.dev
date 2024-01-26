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

## Requirements

* The job is defined in a Packit config in the default branch of the dist-git
  repository (`rawhide`). Packit configs on other branches are ignored.
* Upstream release monitoring is active for the package. [The monitoring
  status](https://docs.fedoraproject.org/en-US/package-maintainers/Upstream_Release_Monitoring/)
  in dist-git should be set to `Monitoring`).
* [`upstream_project_url`](/docs/configuration#upstream_project_url) pointing to a Git repository is defined in the configuration.

## First setup
When setting up this job for the first time, please follow the recommended actions from 
[our release guide](/docs/fedora-releases-guide#first-setup).

:::caution
Please, use the [`issue_repository`](/docs/configuration#issue_repository) option to get information about
possible failures during the update process (otherwise, you will not be notified about the job failures).
Use a repository you maintain as we will create issues about failures here.
:::caution


## Supported triggers

* **release**


## Optional parameters

* **dist_git_branches** - a (list of) branch(es) in dist-git where packit should work (defaults to `main`).
  You can also use the [aliases provided by Packit](/docs/configuration#aliases)
  to not need to change the config file when the new system version is released.

:::tip 

For more details and customization options, also check 
[our release guide](/docs/fedora-releases-guide#pull-from-upstream-job).

:::


:::info
Current default behaviour of the release syncing results in having divergent dist-git branches. If you want to avoid this,
please see the details [here](/docs/fedora-releases-guide#keeping-dist-git-branches-non-divergent).
:::

## Retriggering
Packagers with write access to the dist-git repository can retrigger the job
via a comment in any dist-git pull request:

    /packit pull-from-upstream

This will take the Packit configuration file from the default branch of the dist-git
  repository (`rawhide`), same as if the job was triggered by a new release. 
You can monitor the job in [Packit Dashboard](https://dashboard.packit.dev/jobs/pull-from-upstreams).
To use the configuration file from the dist-git pull request you are commenting on, you can add an argument:

    /packit pull-from-upstream --with-pr-config


`pull-from-upstream` triggered by the Upstream Release Monitoring automatically handles the Bugzilla created by Upstream
Release Monitoring (by default adds `Resolves` to changelog/commit and exposes `PACKIT_RESOLVED_BUGS` to the `changelog-entry` and `commit-message`
actions). In case of retriggering, you need to specify the bugs like this:

    /packit pull-from-upstream --resolved-bugs rhbz#123,rhbz#124

You can find the bugzilla by listing all the bugzillas created by Upstream Release Monitoring:

https://bugzilla.redhat.com/buglist.cgi?bug_status=NEW&bug_status=ASSIGNED&columnlist=product%2Ccomponent%2Cassigned_to%2Cstatus%2Csummary%2Clast_change_time%2Cseverity%2Cpriority&email1=%22upstream-release-monitoring%40fedoraproject.org%22&emailreporter1=1&emailtype1=substring&order=id%20DESC%2C%20&query_format=advanced

You can also append `&component={your-package-name}` to the query above to constraint the result to your package only.

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

