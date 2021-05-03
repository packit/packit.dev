---
title: "Packit-as-a-Service"
date: 2019-06-22
draft: false
disableToc: false
weight: 3
aliases: [/packit-as-a-service]
---

# Packit-as-a-Service

[Packit-as-a-Service](https://github.com/marketplace/packit-as-a-service)
is a [GitHub App](https://docs.github.com/apps/about-apps/)
that helps you continuously ensure that your project work in Fedora OS.
For Gitlab see [FAQ](/docs/faq#can-we-use-packit-with-gitlab).

## Easy to use

Using Packit Service is very straightforward: add one [config
file](/docs/configuration/)
to your repository together with the RPM spec file and you're good to go.

Packit Service validates your pull requests by building your software in Fedora OS.
Once the builds are done, Packit lets you know how to install the
RPMs inside your environment so you can try the changes before merging them.

Optionally, Packit Service can run tests for the built software (i.e. copr builds)
in all current Fedora OS releases via [Testing Farm](/docs/testing-farm).

Packit is also available as a [CLI tool](https://github.com/packit/packit/blob/master/README.md),
so you can always try things locally on your own. Note that testing is not currently supported with the CLI tool.

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

The standard requirements for permissions still apply, so if you see this
message

    Only users with write or admin permissions to the repository can trigger
    Packit-as-a-Service

it means the author of the pull request does not have commit access to the
repository so the build cannot be scheduled. This is a perfect case for
maintainers of the repository to post `/packit build` in the PR to get a build.

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
