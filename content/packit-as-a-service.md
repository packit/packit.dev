---
title: "Packit-as-a-Service"
date: 2019-06-22
draft: false
---

Packit-as-a-Service is a GitHub App (https://developer.github.com/apps/about-apps/).

### Easy to use

Using Packit Service is very straightforward: add one config file to your repository
([see .packit.yaml format](https://github.com/packit-service/packit/blob/master/docs/configuration.md)),
followed by an RPM spec file and you're good to go. Besides the service, packit is also as a tool
([see packit README.md](https://github.com/packit-service/packit/blob/master/README.md)),
so you can always try things locally on your own.

Packit Service validates your pull requests by building your software in Fedora OS.
Once the builds are done, packit lets you know how to install the
RPMs inside your environment so you can try the changes before merging them.

<!--more-->

## Steps how to integrate Packit-as-a-Service into your projects or organizations

There are two ways to install Packit-as-a-Service GitHub app into your repository.

### Install from Packit-as-a-Service page
1. From the [Packit-service page](https://github.com/apps/packit-as-a-service) page,
in the left sidebar, click "Install App"
2. Click "Install" next to the organization or user account containing the correct repository
3. Install the "Packit-as-a-Service" on all repositories or to certain repositories

### Install from GitHub Marketplace
1. Go to [GitHub Marketplace](https://github.com/marketplace)
2. In section [Continuous integration](https://github.com/marketplace?category=continuous-integration)
find "Packit-as-a-Service" and select it
3. On the "Packit-as-a-Service" page, under "Pricing and setup", click "Install it for free"
4. Click "Complete order and begin installation"
5. Install the "Packit-as-a-Service" on all repositories or to certain repositories

Once installed, you will see "Packit-as-a-Service" GitHub application in your project settings.
In the left sidebar, click "Integration & services" and our application is shown here.

### Add .packit.yaml configuration file

Packit Service expects ".packit.yaml" configuration file in root of your upstream repository.
For more info
[see .packit.yaml documentation](https://github.com/packit-service/packit/blob/master/docs/configuration.md)

### Add SPEC file

Packit Service needs RPM spec file in your upstream repository.
This RPM spec file is used for building project in COPR repositories.

If this makes you barf, you can use a “source git” branch of your upstream repository.
Packit is also tracking an RFE to not require spec in upstream
[packit-service/packit#312](https://github.com/packit-service/packit/issues/312).

### How to check Packit Service works in your project?

Nowadays, Packit Service supports only validation of your pull requests.
Once you create a pull request, Packit Service builds the code from the
pull request in COPR repository and reports back COPR build status to the pull request.

An example of Packit Service pull request:

![Packit service pull request](/packit-service-pr.png)