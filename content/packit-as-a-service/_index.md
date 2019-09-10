---
title: "Packit-as-a-Service"
date: 2019-06-22
draft: false
disableToc: false
weight: 2
---

Packit-as-a-Service is a [GitHub App](https://developer.github.com/apps/about-apps/)
that helps you continuously ensure that your project work in Fedora OS.

## Easy to use

Using Packit Service is very straightforward: add one [config
file](/docs/configuration/)
to your repository together with the RPM spec file and you're good to go. 

Packit Service validates your pull requests by building your software in Fedora OS.
Once the builds are done, Packit lets you know how to install the
RPMs inside your environment so you can try the changes before merging them.

Optionally, Packit Service can run tests for the built software (i.e. copr builds) in all current Fedora OS releases via [Testing Farm](/testing-farm).

Packit is also available as a [CLI tool](https://github.com/packit-service/packit/blob/master/README.md),
so you can always try things locally on your own. Note that testing is not currently supported with the CLI tool.


## Integrating Packit-as-a-Service into your project or organization from GitHub Marketplace

1. Go to [GitHub Marketplace](https://github.com/marketplace)
2. In section [Continuous integration](https://github.com/marketplace?category=continuous-integration)
find "Packit-as-a-Service" and select it
3. On the "Packit-as-a-Service" page, under "Pricing and setup", click "Install it for free"
4. Click "Complete order and begin installation"
5. Install the "Packit-as-a-Service" on all repositories or to certain repositories

Once installed, you will see the "Packit-as-a-Service" GitHub application in your project settings.
In the left sidebar, click "Integration & services" and you will see the application displayed there.

### Add .packit.yaml configuration file

Packit Service expects the ".packit.yaml" configuration file in root of your upstream repository.
For more info, see
[.packit.yaml documentation](/docs/configuration/).

### Add RPM spec file

Packit Service needs the RPM spec file to build your project.

Either include it in your upstream repository or
if you do not want to have it in your upstream repository,
see section [RPM spec file not in upstream](/faq/#rpm-spec-file-not-in-upstream-repository)

### How to check Packit Service works in your project?

Currently, Packit Service is able only to build your changes and provide them as RPMs.
Once you create a pull request, Packit Service builds the code from the
pull request in COPR repository and reports back COPR build status to the pull request.

An example of Packit Service pull request:

![Packit service pull request](/packit-service-pr.png)

### How to re-trigger Packit Service actions in your pull request?

Packit Service is able to schedule new builds based on a pull request comment:
```
/packit copr-build
```
So whenever you run into a flake or feel like you want to retrigger, just type
that comment into the PR and enjoy some fine, fresh builds.

Only project collaborators can re-trigger.

### Adding tests

See [Testing Farm - Adding Tests](/testing-farm/adding-tests)
