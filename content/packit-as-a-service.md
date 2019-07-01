---
title: "Packit-as-a-Service"
date: 2019-06-22
draft: false
---

Packit-as-a-Service is a [GitHub App](https://developer.github.com/apps/about-apps/)
that helps you continuously ensure that your project work in Fedora OS.

## Easy to use

Using Packit Service is very straightforward: add one [config
file](https://github.com/packit-service/packit/blob/master/docs/configuration.md)
to your repository together with the RPM spec file and you're good to go. 

Packit Service validates your pull requests by building your software in Fedora OS.
Once the builds are done, Packit lets you know how to install the
RPMs inside your environment so you can try the changes before merging them.

Packit is also available as a [CLI tool](https://github.com/packit-service/packit/blob/master/README.md),
so you can always try things locally on your own.

<!--more-->

## Integrating Packit-as-a-Service into your project or organization

There are two ways to install Packit-as-a-Service GitHub app into your repository.

### Install from Packit-as-a-Service page
1. From the [Packit-service page](https://github.com/apps/packit-as-a-service),
in the left sidebar, click "Install App" (alternatively, click "Configure" in the right sidebar)
2. Click "Install" next to the organization or user account containing the correct repository
3. Install "Packit-as-a-Service" to repositories where you wish to use the service

<!---
### Install from GitHub Marketplace
1. Go to [GitHub Marketplace](https://github.com/marketplace)
2. In section [Continuous integration](https://github.com/marketplace?category=continuous-integration)
find "Packit-as-a-Service" and select it
3. On the "Packit-as-a-Service" page, under "Pricing and setup", click "Install it for free"
4. Click "Complete order and begin installation"
5. Install the "Packit-as-a-Service" on all repositories or to certain repositories
--->
Once installed, you will see the "Packit-as-a-Service" GitHub application in your project settings.
In the left sidebar, click "Integration & services" and you will see the apllication displayed there.

### Add .packit.yaml configuration file

Packit Service expects the ".packit.yaml" configuration file in root of your upstream repository.
For more info, see
[.packit.yaml documentation](https://github.com/packit-service/packit/blob/master/docs/configuration.md).

### Add SPEC file

Packit Service needs the RPM spec file in your upstream repository.
This RPM spec file is used to build your project.

Packit is also tracking an RFE to not require spec in upstream
[packit-service/packit#312](https://github.com/packit-service/packit/issues/312).

### How to check Packit Service works in your project?

Currently, Packit Service is able only to build your changes and provide them as RPMs.
Once you create a pull request, Packit Service builds the code from the
pull request in COPR repository and reports back COPR build status to the pull request.

An example of Packit Service pull request:

![Packit service pull request](/packit-service-pr.png)

## FAQ

### Can I use the packit service as soon as I install it into my repository?

Thanks for your interest in Packit Service! You need to be whitelisted in order
to start using the service which is an action to be done by us. We are now
on-boarding Fedora contributors (with a Fedora Account System account). Once we
put you on the whitelist, we'll get in touch with you.

### Can I use packit service for any GitHub repository?

Since packit service builds your PRs in Fedora COPR build service, by using
Packit-as-a-service, your software needs to comply with [COPR
rules](https://docs.pagure.org/copr.copr/user_documentation.html#what-i-can-build-in-copr).
If any of these points are violated, we'll remove the builds and may put you on
a blacklist so you won't be able to use the service again.

### How can I contact you?

If you encounter a problem while using Packit-as-a-service, please open an [upstream issue](https://github.com/packit-service/packit-service/issues/new). In case of any other questions, feel free to contact us on our mailing list: **user-cont-team@redhat.com**.
