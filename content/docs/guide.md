---
title: Packit Onboarding Guide
weight: 2
aliases: [/packit-service, /packit-as-a-service, /docs/packit-as-a-service]
---

# Packit Onboarding Guide

Let's take a look on how to start using Packit and how to get most of it.

This guide is focused on the service use-case, but Packit is also available as a [CLI tool](https://github.com/packit/packit/blob/main/README.md),
so you can always [try things locally](/docs/cli/) on your own.
Note that running tests in Testing farm infrastructure is not currently supported with the CLI tool.
Unlike the service, CLI uses your own identities when connecting to other service like [Copr](https://copr.fedorainfracloud.org/)
or [Fedora dist-git](https://src.fedoraproject.org/).

To start using Packit, you need three things:

1. setup integration (so Packit is notified about your activities and can provide feedback)
2. be approved (self-done mapping of your forge identity to FAS identity so we know who you are)
3. configure the wanted features


## 1. Setup Packit integration

The integration is dependent on the service the upstream project is hosted on.
In case you want to use Packit on your downstream repository for downstream jobs
([Koji build](/docs/configuration/#koji_build) and [Bodhi update](/docs/configuration/#bodhi_update)),
you don't need to enable anything.
Just place your config file into the dist-git repository.

Here are the supported git-forges:

### GitHub

The majority of Packit users host their projects on GitHub, therefore we focus mainly on supporting the GitHub App.
All of our workflows are supported and tested on GitHub.
We utilize majority of new GitHub features that can be used in GitHub Apps.


### How to set up Packit on GitHub

1. Navigate to the ["Packit-as-a-Service" GitHub
   application](https://github.com/marketplace/packit-as-a-service).
   ![Packit GitHub application](/images/guide/guide_github_app.png)
2. Under "Pricing and setup", click "Install it for free".
   ![Packit GitHub application: Plan](/images/guide/guide_github_app_plan.png)
3. Click "Complete order and begin installation".
   ![Packit GitHub application: Order](/images/guide/guide_github_app_order.png)
4. Install the "Packit-as-a-Service" to repositories of your choice.
   ![Packit GitHub application: Installation](/images/guide/guide_github_app_installation.png)

Once installed, you will see the ["Packit-as-a-Service" GitHub
application](https://github.com/marketplace/packit-as-a-service) in your
project settings. In the left sidebar, click "Integration & services" and you
will see the application displayed there.


### Staging instance

[Packit-as-a-Service-stg](https://github.com/apps/packit-as-a-service-stg) GitHub App
runs the latest code. It can be used to verify latest changes until they get
(every Tuesday) into the [production instance](https://github.com/marketplace/packit-as-a-service).
If you want to enjoy the freshest features and help us with the development,
see more details [here](https://github.com/packit/packit/discussions/1530).

![Packit GitHub application: Staging instance](/images/guide/guide_github_app_stg.png)


### GitLab

GitLab support is mainly experimental and is influenced by the presence of CentOS Stream source-git workflow.
**We do not verify** the functionality of the GitLab support on the day-to-day basis as we do with the GitHub App.


#### How to set up Packit on GitLab

GitLab doesn't have an app functionality and we don't use the [Integrations](https://docs.gitlab.com/ee/user/project/integrations/overview.html) as it doesn't solve authentication.
To enable Packit, you need to manually configure a webhook.

1. Go to `Settings → Webhooks` and add https://prod.packit.dev/api/webhooks/gitlab or https://stg.packit.dev/api/webhooks/gitlab as the `URL`.
   ![GitLab webhooks](/images/gitlab/webhooks.png)
2. Select `Push events`, `Comments`, `Issues events`, `Merge request events` and `Release events` as the `Triggers`.
   Do not provide `Secret token` yet and click `Add webhook`.
   You should see the created hook at the bottom of the page now.
   ![Setting up webhook](/images/gitlab/set_up_webhook.png)
3. Select `Test` and for example `Merge requests events`.
   At the top of the page appears a red `Hook executed successfully but returned HTTP 401 "X-Gitlab-Token not in request.headers"`.
4. Wait a bit and check `Issues` of the project and after a while there should be
   a new confidential `Packit-Service Authentication` issue with the instructions how to finish the setup.

##### GitLab Pipelines

With some limitations (but tweakability) you can also use Packit as a GitLab pipeline
using the Packit's [CLI](/docs/cli) from the regularly built
[`quay.io/packit/packit` image](https://quay.io/repository/packit/packit).
As you can see in the following example, it's really straightforward and explicit:

```yaml
image: quay.io/packit/packit

srpm_build:
  stage: build
  script:
  - packit srpm
  artifacts:
    paths:
      - "*.src.rpm"
    expire_in: 1 week
```

### Pagure

We have rudimentary support for the Pagure instances since they are used in the downstream workflow.
Packit cannot be set up as a CI (in the same sense as on GitHub or GitLab) on Pagure instances,
since the demand for this feature is not significant.
The differences between GitHub/GitLab and Pagure APIs would result in many workarounds to be implemented, if possible at all.
You can track the progress in the [related issue](https://github.com/packit/packit-service/issues/556) on GitHub.


## 2. Approval

As a next step, you need to have a valid [Fedora Account System](https://fedoraproject.org/wiki/Account_System)
account to be able to start using Packit Service in an upstream project.
For GitHub, we have an automated way of self-approval,
for other instances, [contact us](/#contact) and we will approve you manually.
We require our new users to have `GitHub Username` field set in the FAS account so that we can automatically
check for the match between the `GitHub Username` field in the FAS account and the GitHub account that triggers the verification.
(If you don't know, where to set this value,
the URL looks like this: `https://accounts.fedoraproject.org/user/{my-fas-username}/settings/profile/#github`.)

During the installation, we try to check the FAS account with the same
username as the GitHub account that triggers the installation and if the check
fails, we create a new issue in our
[allowlist tracker](https://github.com/packit/notifications/issues/).
(You will be tagged in that issue and should get a GitHub notification about that.)

![Packit approval issue](/images/guide/guide_approval_issue.png)

You can provide the FAS account in a comment
as `/packit verify-fas <my-fas-username>` in the issue we create
for your installation. This will trigger the automatic check.
Until that, you will get a neutral status with `Namespace is not allowed!`
message on your commits.

![Packit approval issue: add mapping in the FAS settings](/images/guide/guide_approval_fas_settings.png)
![Packit approval issue: add mapping by a comment](/images/guide/guide_approval_comments.png)

Besides that:
* If you want to configure builds via Packit,
  your software needs to comply with [Copr guidelines](https://docs.pagure.org/copr.copr/user_documentation.html#what-i-can-build-in-copr)
  since we use [Fedora Copr](src.fedoraproject.org/) for the builds.
  Therefore, please, make sure you read them before configuring the [Packit build job](/docs/configuration/#copr_build).
* If you are interested in using [internal instance of the Testing Farm](https://docs.testing-farm.io/general/0.1/services.html#_red_hat_ranch)
  to run your tests in, please, [reach out to us](/#contact), since for this job, an additional approval on our side is needed.
* For retrying the [build](/docs/configuration/#copr_build) and [test](/docs/configuration/#tests) jobs via `/packit build` and `/packit test` pull request comments,
  you need to have write access to the repository or be the author of the pull request.
* Similarly, for retrying the [propose downstream job](/docs/configuration/#propose_downstream) via `/packit propose-downstream` issue comment,
  you need to have write access to the repository.


## 3. Configuration

Packit uses a configuration file to let Packit know what to do, when to do it and how.
As a format, it uses YAML and here are all the valid names:
* `.packit.yaml`
* `.packit.yml`
* `.packit.json`
* `packit.yaml`
* `packit.yml`
* `packit.json`

And where do you need to place this config file?
Whenever you need to use Packit -- the concept is easy:
Packit loads the config file from the repository and commit related to the event it reacts to.
E.g. if Packit works with pull-requests, it takes config from the HEAD commit of the pull-request,
if Packit works with releases, the release commit is used
and if Packit works with downstream Koji build,
the respective dist-git commit is used.

You know how to call this file, where to put it, but what should you fill inside?

In the following parts, we will cover some basic concepts used in the Packit config file.
More details can be found on a dedicated [configuration page](/docs/configuration/).


### Basic configuration

You need to provide some basic information to let Packit understand your project and package.
You can use `packit init` command (when [running Packit locally](/docs/cli/)) to get a basic structure.
It will look like this:


```yaml
# See the documentation for more information:
# https://packit.dev/docs/configuration/

specfile_path: directory.spec

# add or remove files that should be synced
files_to_sync:
    - directory.spec
    - .packit.yaml

# name in upstream package repository/registry (e.g. in PyPI)
upstream_package_name: directory
# downstream (Fedora) RPM package name
downstream_package_name: directory
```

We know that every project is a bit different and Packit can't guess everything
so you can (re)define various other options.
The full list can be found [here](/docs/configuration/#top-level-keys).


### Jobs

Packit's feature set is really wide and does not need to to be used as a whole pipeline.
To let user decide what and when is needed, Packit uses concept of so-called `jobs`.
Each job represents a feature of Packit. All the jobs are defined under the `jobs` key.
For each job you need to specify the following information:
* `job`: the type of the job, the feature you want Packit to do.
* `trigger`: when the job is run (`pull_request`, `commit` or `release`).
* additional information needed for the job (like what targets to build, for what branch to run the job,...)

(Note that for each job, not all the triggers are supported.)

As an example you can take a look at the following config snippet
(these are also the default jobs used if you don't set the `jobs` key):
```yaml
jobs:
- job: copr_build
  trigger: pull_request
  targets: [fedora-stable]

- job: tests
  trigger: pull_request
  targets: [fedora-stable]

- job: propose_downstream
  trigger: release
  dist_git_branches:
    - fedora-all
```

Most of the attributes can be defined both on global level (outside of the `jobs` key)
or for a single job only (like e.g. `targets` in the snippet above).
More about this overriding mechanism can be found [here](/docs/configuration/#overriding-global-parameters).
Another useful feature are [aliases](/docs/configuration/#aliases) used to avoid
hardcoded values that changes when there is a new distribution release.


### Available jobs

* [`copr_build`](/docs/configuration/#copr_build): An RPM build triggered for pull-requests, new branch commits or releases.
  (Can be used to verify that package is buildable,
  to easily install package including the proposed change
  or to provide long-term Copr repositories.)
* [`tests`](/docs/configuration/#tests): Test suit using TMT/FMF definition run in the [Testing Farm](TBD)
  (Can be used as a next step to Copr build or without build at all.)
* [`production_build`](/docs/configuration/#production_build): A scratch Koji build triggered for the upstream state of project.
* [`propose_downstream`](/docs/configuration/#propose_downstream): For upstream release, Packit prepares a Fedora release.
  (Source is saved to the Lookaside Cache and a dist-git pull-request is created for each configured branch.)
* [`koji_build`](/docs/configuration/#koji_build): A downstream Koji build triggered when there is a new dist-git commit in a given branch.
* [`bodhi_update`](/docs/configuration/#bodhi_update): A Bodhi update created for a successfully finished Koji build.


More about the jobs and how to tweak them can be found on a [configuration page](/docs/configuration#jobs).


### Actions

Actions are a way how to redefine or tweak the Packit's workflows.
These are user-defined commands that can replace a part of Packit's job (e.g. to get version, or to create a tarball)
or are run in a particular step as a hook (with no action run by default).

Take a look at the tables [here](/docs/actions/) to know what actions are available for each job.


### How to try that for real

In order to start using Packit, we suggest you [install the tooling locally](/docs/cli/#installation). All
the logic is baked inside the `packit` command - so once `packit srpm` (the command
to create a source RPM locally from the current snapshot of the project) starts
passing for you, it should work inside packit service as well.


#### RPM builds pass on your laptop

Once you [install packit locally](/docs/cli/#installation), it's time to fill `.packit.yaml` — the
configuration file packit is using. Packit can help to fill the initial
template by running the `init` command:

    $ packit init
    $ cat .packit.yaml

```yaml
# See the documentation for more information:
# https://packit.dev/docs/configuration/

specfile_path: directory.spec

# add or remove files that should be synced
files_to_sync:
    - directory.spec
    - .packit.yaml

# name in upstream package repository/registry (e.g. in PyPI)
upstream_package_name: directory
# downstream (Fedora) RPM package name
downstream_package_name: directory
```

Head on to page [configuration]({{< ref "configuration" >}}) to learn more
about the config file.

Packit needs an RPM spec file to build your package. The spec file does not
need to be included in the upstream repo and can be generated on the fly or
downloaded (e.g. from Fedora dist-git).
Please check out our [FAQ]({{< ref "faq" >}}) to read about some other common questions.

You can also read more about the SRPM process
in [the document]({{< ref "cli/srpm" >}}) dedicated to the `srpm` command.

##### Running from the dist-git repository

When you are not allowed or do not want to run packit command from the upstream
git repository, you can run commands from the cloned dist-git repository in the
same way as you do from upstream.  Make sure, that you specify the
`upstream_project_url` in your configuration.

Is your `packit srpm` finally passing? If not, feel free to reach out to us.
If yes, let's proceed to the next level.

#### The project has successful builds inside the service

If a SRPM can be created locally, all should be good in the service as well.
That's the theory. In practice, your laptop and packit service sandbox
environment are vastly different. One thing which can happen easily is that a
command is not available in the sandbox. Also, all the commands are run using
an unprivileged user - you can't install anything or perform any privileged
operation. If you want to tweak the environment,
you can do the SRPM builds in Copr environment instead.
There, you can specify the requirements yourself.
The change can be done by specifying
a [`srpm_build_deps` option](https://packit.dev/docs/configuration/#srpm_build_deps).
(We are planning to move there all the builds in the future.)
In any case, feel free to reach out to us if you are having troubles
and we'd be glad to help.


As described [above](#jobs), Packit supports various functions in form of jobs you can configure.
Let's try the most favourite one: Copr build.
In order to get RPM builds for every change in your project, you need to add a
section `jobs` inside your .packit.yaml and set up a `copr_build` job to do RPM builds for
every change in a PR:

```yaml
jobs:
- job: copr_build
  trigger: pull_request
  targets:
  - fedora-all
```

`fedora-all` stands for all currently available Fedora releases.

Jobs are nicely described over [here](/docs/configuration/#jobs).

If you are looking for an inspiration for your .packit.yaml, check [packit's
config file](https://github.com/packit/packit/blob/main/.packit.yaml)
since we try to use all the latest features.

## Check Packit works

With the configuration above, Packit is able only to build your changes and provide them as RPMs.
Once you create a pull request, Packit builds the code from the
pull request in COPR repository and reports back COPR build status to the pull request.

An example of Packit pull request:

![Packit pull request](/packit-service-pr.png)

## How to re-trigger Packit actions in your pull request?

Packit is able to trigger new builds based on a pull request comment:

    /packit copr-build

or the shorter version

    /packit build

So whenever you run into a flake or feel like you want to retrigger, just type
that comment into the PR and enjoy some fine, fresh builds.

The requirements stated [above](#approval) apply, so if you see this message

    Only users with write or admin permissions to the repository can trigger
    Packit-as-a-Service

it means the author of the pull request does not have write access to the
repository so the build cannot be scheduled. This is a perfect case for
maintainers of the repository to post `/packit build` in the PR to get a build.

In Github Checks interface, it is also possible to re-trigger a specific task just by clicking on `Re-run`
for the particular check:

![Re-run Github check](/github-check-rerun.png)

Or it is possible to re-trigger every failed task using a pull request comment

    /packit rebuild-failed

which builds only failed builds and similar for testing farm

    /packit retest-failed

to re-trigger every failed test.

#### Packit handles Fedora updates for you.

So you already have a `jobs` section in your config. Let's extend it with another
jobs that will handle the Fedora updates: `propose_downstream`, `koji_build` and `bodhi_udpate`.
These are explained in detail in our [release guide](/docs/fedora-releases-guide).

And that's about it. Now you should be able to use the core features of the Packit.
If you have any questions, feel free to [reach out to us](https://packit.dev/#contact).


We welcome all kinds of suggestions to this guide, feel free to [open a new issue
here](https://github.com/packit/packit.dev/issues/new).