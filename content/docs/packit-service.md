---
title: Packit Service
date: 2019-06-22
weight: 3
aliases: [/packit-as-a-service, /docs/packit-as-a-service]
---

# Packit Service

Helps you continuously ensure that your project works in Fedora Linux or CentOS Stream.

## Easy to use

Using Packit Service is very straightforward:
add one [config file](/docs/configuration/)
to your repository together with the RPM spec file.

On Github you also need to install (see below) our
[Github App](https://github.com/marketplace/packit-as-a-service),
for Gitlab see [FAQ](/docs/faq#can-we-use-packit-with-gitlab).

Packit Service validates your pull requests by building your software in Fedora OS.
Once the builds are done, Packit lets you know how to install the
RPMs inside your environment so you can try the changes before merging them.

Optionally, Packit Service can run tests for the built software (i.e. copr builds)
in all current Fedora OS releases via [Testing Farm](/docs/testing-farm).

Packit is also available as a [CLI tool](https://github.com/packit/packit/blob/main/README.md),
so you can always try things locally on your own. Note that testing is not currently supported with the CLI tool.


## Requirements for running Packit Service jobs

As a first step, you need to have a valid [Fedora Account System](https://fedoraproject.org/wiki/Account_System) 
account to be approved by us and start using Packit Service.
We require our new users to have `GitHub Username` field set in the FAS account so that we can automatically
check for the match between the `GitHub Username` field in the FAS account and the GitHub account that triggers the verification. 
During the installation, we try to check the FAS account with the same
username as the GitHub account that triggers the installation and if the check
fails, we create a new issue in our
[allowlist tracker](https://github.com/packit/notifications/issues/).
You can provide the FAS account in a comment
as `/packit verify-fas my-fas-username` in the issue we create 
for your installation. This will trigger the automatic check.
Until that, you will get a neutral status with `Namespace is not allowed!` 
message on your commits.

Besides that:
* If you want to configure builds via Packit Service, your software needs to comply with [Copr guidelines](https://docs.pagure.org/copr.copr/user_documentation.html#what-i-can-build-in-copr) 
 since we use Fedora Copr for the builds. Therefore, please, make sure you read them before configuring the [Packit Service build job](/docs/configuration/#copr_build).
* If you are interested in using [internal instance of the Testing Farm](https://docs.testing-farm.io/general/0.1/services.html#_red_hat_ranch)
to run your tests in, please, [reach out to us](/#contact), since for this job, an additional approval on our side is needed.
* For retrying the build and test jobs via `/packit build` and `/packit test` pull request comments, you need to have write access to the repository or be the 
author of the pull request.
* Similarly, for retrying the propose downstream job via `/packit propose-downstream` issue comment, you need to have write access to
the repository.


## Integrating Packit-as-a-Service into your project or organization from GitHub Marketplace

1. Navigate to the ["Packit-as-a-Service" GitHub
   application](https://github.com/marketplace/packit-as-a-service).
2. Under "Pricing and setup", click "Install it for free".
3. Click "Complete order and begin installation".
4. Install the "Packit-as-a-Service" to repositories of your choice.

Once installed, you will see the ["Packit-as-a-Service" GitHub
application](https://github.com/marketplace/packit-as-a-service) in your
project settings. In the left sidebar, click "Integration & services" and you
will see the application displayed there.

In order to continue, please head to the main [Packit guide]({{< ref "guide" >}}).

### Staging instance

[Packit-as-a-Service-stg](https://github.com/apps/packit-as-a-service-stg) GitHub App
runs the latest code. It can be used to verify latest changes until they get
(every Tuesday) into the [prod instance](https://github.com/marketplace/packit-as-a-service).
[See more details](https://github.com/packit/packit-service/issues/649#issue-629054035).

## How to check Packit Service works in your project?

Currently, Packit Service is able only to build your changes and provide them as RPMs.
Once you create a pull request, Packit Service builds the code from the
pull request in COPR repository and reports back COPR build status to the pull request.

An example of Packit Service pull request:

![Packit service pull request](/packit-service-pr.png)

## How to re-trigger Packit Service actions in your pull request?

Packit Service is able to schedule new builds based on a pull request comment:

    /packit copr-build

or the shorter version

    /packit build

So whenever you run into a flake or feel like you want to retrigger, just type
that comment into the PR and enjoy some fine, fresh builds.

The requirements stated in the [previous section](#requirements-for-running-packit-service-jobs) apply, so if you see this
message

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

## How to propose a new downstream update?

Packit Service is able to propose updates of new upstream releases using this comment in an issue:

    /packit propose-downstream

If you want to propose the latest release into Fedora repositories,
create an issue and add that comment into this issue and
Packit service triggers and pushes it directly into Fedora dist-git repositories.

If all jobs ([propose_downstream](/docs/configuration/#supported-jobs),
defined in `packit.yaml` file, finished successfully, then the issue is
automatically closed.

Only users with write or admin permissions to the repository can propose a new
update.

## Adding tests

It is also possible to run tests against the freshly built rpms.
See the [Testing Farm]({{< ref "testing-farm" >}}) documentation for details.

## Supported git forges

### GitHub

Majority of Packit users host their projects on GitHub, therefore we focus mainly on supporting the GitHub App. All of our workflows are supported and tested on GitHub and also we utilize majority of new GitHub features that can be used in GitHub Apps.

### GitLab

GitLab support is mainly experimental and is influenced by the presence of CentOS Stream source-git workflow. **We do not verify** the functionality of the GitLab support on the day-to-day basis as we do with the GitHub App.

#### How to set up Packit on GitLab

GitLab doesn't have an app functionality and we don't use the [Integrations](https://docs.gitlab.com/ee/user/project/integrations/overview.html) as it doesn't solve authentication.
To enable Packit, you need to manually configure a webhook.

1. Go to `Settings → Webhooks` and add https://prod.packit.dev/api/webhooks/gitlab or https://stg.packit.dev/api/webhooks/gitlab as the `URL`.
2. Select `Push events`, `Comments`, `Issues events`, `Merge request events` and `Release events` as the `Triggers`.
   Do not provide `Secret token` yet and click `Add webhook`.
   You should see the created hook at the bottom of the page now.
3. Select `Test` and for example `Merge requests events`.
   At the top of the page appears a red `Hook executed successfully but returned HTTP 401 "X-Gitlab-Token not in request.headers"`.
4. Wait a bit and check `Issues` of the project and after a while there should be
   a new confidential `Packit-Service Authentication` issue with the instructions how to finish the setup.

### Pagure

We have a rudimentary support for the Pagure instances, since they are used in the propose-downstream workflow. Packit cannot be set up as a CI (in the same sense as on GitHub or GitLab) on Pagure instances, since the demand for this feature is not significant and also differences between GitHub/GitLab and Pagure are significant, which would result in many workarounds to be implemented, if possible at all.
