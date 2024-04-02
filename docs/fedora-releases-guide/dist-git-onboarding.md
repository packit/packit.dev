---
title: Dist-git repository onboarding
sidebar_position: 6
---
# Dist-git repository onboarding
## Table of contents
- [Setup](#setup)
  - [1. Configuration file](#configuration-file)
  - [2. Monitoring](#monitoring-of-the-package)
  - [How to try that for real](#how-to-try-that-for-real)
- [UI](#ui)
- [Retriggering](#retriggering)
- [Full example of a configuration](#full-example-of-a-dist-git-only-configuration)

## Setup

To start using Packit in dist-git, you only need:
1. a configuration file
2. enable the monitoring for your package


### 1. Configuration file
To start using Packit for automating your Fedora releases with setup **only** in dist-git,
the main thing you need is to create a configuration file and place it 
in the default (`rawhide`) branch of your dist-git repository.

As a format, it uses YAML and here are all the valid names:
* `.packit.yaml`
* `.packit.yml`
* `packit.yaml`
* `packit.yml`

In your configuration file, you can define these jobs:
1.  [`pull_from_upstream`](#pull-from-upstream-job)
2. [`koji_build`](#koji-build-job)
3. [`bodhi_update`](#bodhi-update-job)

:::tip Downstream configuration template

You can use our [downstream configuration template](/docs/configuration/downstream_configuration_template) 
for creating your Packit configuration in dist-git repository.

:::

:::tip Automate the setup

You can also use [packit dist-git init](/docs/cli/dist-git/init.md) CLI command to create your
Packit dist-git configuration.

:::

:::tip Configuration validation

For validation of the configuration, you can utilise
Packit CLI command [`validate-config`](/docs/cli/validate-config) or our 
[pre-commit hooks](/posts/pre-commit-hooks#validate-config).

:::


#### Jobs

##### Pull from upstream job
When a new upstream release happens and
[release-monitoring.org](https://release-monitoring.org/) detects it, you'll
get dist-git pull requests with it automatically. 

Bodhi updates created by the [`bodhi_update` job](/docs/configuration/downstream/pull_from_upstream) as well as [automatic Bodhi updates](https://fedora-infra.github.io/bodhi/6.0/user/automatic_updates.html) will close the Bugzilla opened by 
the Upstream Release Monitoring automatically when they reach stable.
Packit adds the Bugzilla numbers to the commit message and the changelog in this form `- Resolves rhbz#xz`.
There is also an env variable with the list of bugs to be closed
`PACKIT_RESOLVED_BUGS` that you can use in the case you want to customize the changelog creation through an action
as shown below.

If you want to restrict what releases with corresponding tags Packit should react on, 
you can utilise the configuration options [`upstream_tag_include`](/docs/configuration/#upstream_tag_include) and
[`upstream_tag_exclude`](/docs/configuration/#upstream_tag_exclude).

:::caution

It is necessary to set the [`upstream_project_url`](/docs/configuration/#upstream_project_url) (upstream project Git repository URL) configuration option. However, upstream tarball URL is taken from the spec file or from [`sources`](/docs/configuration/#sources) (see below).

:::

You can check the other customization options [here](./index.md#customization).

:::info Divergent dist-git branches
Current default behaviour of the release syncing results in having divergent dist-git branches. If you want to avoid this,
please see the details [here](/docs/fedora-releases-guide#keeping-dist-git-branches-non-divergent).
:::


##### Koji build job
You can configure Packit to react to the new commits in your dist-git repository and create
Koji builds by including a `koji_build` job in the configuration.
Then, if Packit is informed (via fedora-messaging bus) about a new commit in the configured dist-git branch, it submits a new build in Koji
like maintainers usually do. (The commits without any spec file change are skipped.)

By default, only merged pull requests created by Packit are being acted upon, but 
you can override this behaviour by specifying
`allowed_pr_authors` and/or `allowed_committers` in the [job configuration](/docs/configuration/downstream/koji_build). 

The [koji_build job](/docs/configuration/downstream/koji_build) can be configured like this:

```yaml
jobs:
- job: koji_build
  trigger: commit
  dist_git_branches:
    - fedora-all
```

##### Bodhi update job
You can configure Packit to react to successful Koji builds and create
Bodhi updates by including a `bodhi_update` job in the configuration.
Once Packit is informed (via fedora-messaging bus) about the successful Koji build for the configured branch,
it creates a new update for that branch in Bodhi for you.

By default, only successful Koji builds created by Packit are being acted upon, but 
you can override this behaviour by specifying
`allowed_builders` in the [job configuration](/docs/configuration/downstream/bodhi_update).

The [bodhi_update job](/docs/configuration/downstream/bodhi_update) can be configured like this:

```yaml
jobs:
- job: bodhi_update
  trigger: commit
  dist_git_branches:
    - fedora-branched # rawhide updates are created automatically
```

#### Actions
Actions are a way how to redefine or tweak the Packit's workflows.
These are user-defined commands that can replace a part of Packit's job (e.g. to get version, or to create a tarball)
or are run in a particular step as a hook (with no action run by default).

Take a look at the tables [here](/docs/configuration/actions/) to know what actions are available for each job.

### 2. Monitoring of the package
Besides the configuration file, if you use the [`pull_from_upstream` job](#pull-from-upstream-job), you also need 
to have your package monitored by Upstream Release Monitoring:
1. make sure there is Fedora mapping for the upstream project in https://release-monitoring.org/projects/
2. make sure `Monitoring status` on the left side at https://src.fedoraproject.org/rpms/your-package is set to `Monitoring`


You can check an example of a configuration file [in the section below](#full-example-of-a-dist-git-only-configuration).

### How to try that for real
#### Release syncing
If you are interested in the functionality of syncing the release ([`pull_from_upstream` job](#pull-from-upstream-job))
and want to try it out, we recommend triggering the job 
first time from a dist-git pull request to make sure Packit is correctly configured (see the following sections).

#### If there is a pending release
If there is a new release pending for your package (bugzilla has been opened by [release-monitoring.org](https://release-monitoring.org/) but no rebase done in dist-git yet), do the following:

- create a `rawhide`-based pull request with Packit configuration defining the [`pull_from_upstream` job](/docs/configuration/downstream/pull_from_upstream)
  - we recommend firstly setting the `dist_git_branches` for the job to one branch only (e.g. `fedora-rawhide`)
- comment `/packit pull-from-upstream --with-pr-config` on the pull request
- check the [dashboard](https://dashboard.packit.dev/jobs/pull-from-upstreams)
- if everything went well, review the pull request(s) in your dist-git repository created by Packit
- if you are happy with the results 
  - you can update the `dist_git_branches` to include the list of desired branches and trigger the syncing for all branches (using the same comment `/packit pull-from-upstream --with-pr-config`) 
  - merge the pull request 

#### If there is no pending release
If there is no pending release and your package has been rebased at least once in the past, you can still try the job using a new testing branch:

- create a branch pointing to a commit before the last rebase, name it e.g. `packit-test` and push it (directly to dist-git, not to your fork)
- create a `rawhide`-based pull request with Packit configuration defining the [`pull_from_upstream` job](/docs/configuration/downstream/pull_from_upstream)
- in the configuration, set the `dist_git_branches` option of the `pull_from_upstream` job to the name of the testing branch
- comment `/packit pull-from-upstream --with-pr-config` on the pull request
- check the [dashboard](https://dashboard.packit.dev/jobs/pull-from-upstreams)
- if everything went well, review the pull request in your dist-git repository created by Packit
- if you are happy with the results, you can change the `dist_git_branches` option to whatever you want, merge your pull request and wait for the next upstream release


:::info Version

Normally, the version is taken from Upstream Release Monitoring as Packit is triggered by that.
When triggering via comment, the version is retrieved from the latest upstream project release tag.

:::

:::tip Reproducing from CLI

To reproduce the Packit Service behaviour with your credentials from CLI,
you can use a [`packit pull-from-upstream`](/docs/cli/pull-from-upstream) command.
It creates dist-git pull requests with the content of the release and the Packit config taken from a local clone.

:::

#### Koji builds and Bodhi updates
The Koji builds are triggered for dist-git pushes to configured branches that contain specfile change
and meet other requirements (see [the schema](/docs/configuration/downstream/koji_build#processing-of-dist-git-events-from-pagure)).
The Bodhi updates are then created when Packit successfuly builds in Koji.
You can trigger both of them manually as well, see [Retriggering section](#retriggering).

:::tip Reproducing from CLI

To reproduce the Packit Service behaviour with your credentials from CLI,
you can use again Packit commands [`packit build in-koji`](/docs/cli/build/in-koji) and 
[`packit create-update`](/docs/cli/create-update).

:::

## UI

You can check all the job runs with details and logs in [Packit dashboard](https:/dashboard.packit.dev), specifically:
- [pull_from_upstream](https://dashboard.packit.dev/jobs/pull-from-upstreams)
- [koji_build](https://dashboard.packit.dev/jobs/downstream-koji-builds)
- [bodhi_update](https://dashboard.packit.dev/jobs/bodhi-updates)

You can utilise [Fedora Notifications](https://notifications.fedoraproject.org/) as well.

### Notifications about errors
Since it is not possible to create issues in dist-git repositories, you can configure a repository where we should
open issues in case of errors during the downstream jobs via [`issue_repository`](/docs/configuration#issue_repository) 
configuration key. See the details in the link.

## Retriggering
### pull_from_upstream
Packagers can retrigger the job
via a comment in any dist-git pull request:

    /packit pull-from-upstream

This will take the Packit configuration file from the default branch of the dist-git
  repository (`rawhide`), same as if the job was triggered by a new release. To use the configuration file from the dist-git pull request you are commenting on, you can add an argument:

    /packit pull-from-upstream --with-pr-config

### koji_build

Packagers can retrigger a build by a comment in a dist-git pull request:

    /packit koji-build

The build will be triggered for the target branch of the pull request using the most recent commit on the target branch
(NOT the HEAD commit of the pull request). 

If Packit created an issue in the configured `issue_repository`, you can place the same comment in that
issue to retrigger the builds (see [`issue_repository`](/docs/configuration#issue_repository) for details).

### bodhi_update
Packagers with write access to the dist-git repository can retrigger an update by a comment in a dist-git pull request:

    /packit create-update

The update will be triggered for the target branch of the pull request. 

If Packit created an issue in the configured `issue_repository`, you can place the same comment in that
issue to retrigger the updates (see [`issue_repository`](/docs/configuration#issue_repository) for details).


## Full example of a dist-git only configuration

Let's take a look how the configuration file can look like when you define all three steps.
It's quite simple, isn't it?


```yaml
upstream_project_url: https://github.com/upstream/package
jobs:

- job: pull_from_upstream
  trigger: release
  dist_git_branches:
   - fedora-rawhide

- job: koji_build
  trigger: commit
  dist_git_branches:
    - fedora-rawhide

- job: bodhi_update
  trigger: commit
  dist_git_branches:
    - fedora-branched # rawhide updates are created automatically
```
