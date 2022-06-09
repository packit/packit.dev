---
title: Onboarding Guide
weight: 2
---

# Onboarding Guide

## Agenda

We have split the on-boarding process into multiple stages:

1. Have packit tooling installed locally.
2. RPM builds pass on your laptop.
3. You are approved to use Packit Service.
4. The project has successful builds inside the service.
5. Packit service handles Fedora Rawhide updates for you.

We welcome all kinds of suggestions to this guide, feel free to [open a new issue
here](https://github.com/packit/packit.dev/issues/new).

## Have packit tooling installed locally

In order to start using packit, we suggest you install the tooling locally. All
the logic is baked inside the `packit` command - so once `packit srpm` (the command
to create a source RPM locally from the current snapshot of the project) starts
passing for you, it should work inside packit service as well.

### Fedora Linux

    $ sudo dnf install packit

### Red Hat Enterprise Linux or CentOS Stream 8

On RHEL/CentOS 8 you can install RPM from [EPEL](https://fedoraproject.org/wiki/EPEL) repository.
On CentOS, some dependencies are in PowerTools repository, so you have to enable it:

    $ sudo dnf install dnf-plugins-core epel-release
    $ sudo dnf config-manager --set-enabled powertools
    $ sudo dnf install packit

### Via Fedora COPR

You can also help us test the latest development snapshot by installing packit
built from the main branch in Copr:

    $ sudo dnf copr enable packit/packit-dev
    $ sudo dnf install packit
    $ # OR in case you have packit already installed from the Fedora repositories:
    $ sudo dnf upgrade packit

### From PyPI

We publish packit to PyPI and it's available as `packitos` project — **packit
at PyPI is something different**.

    $ pip install --user packitos

### From Source

... or installing it directly from GitHub:

    $ pip install --user git+https://github.com/packit/packit

### In a container

If none of the above work for you, try running it in a container
from our Fedora based image. It contains packit installed from `main` branch,
i.e. the same you'd get by pip installing from Github.

    $ podman run -ti --rm -v $PWD:/src:z quay.io/packit/packit bash
    $ packit
    Usage: packit [OPTIONS] COMMAND [ARGS]...

Depending on the command you want to perform you need to mount secrets and
configuration files, like in the following examples:

#### packit copr-build

    $ podman run -ti --rm -v ~/.config/copr:/root/.config/copr:z -v $PWD:/src:z quay.io/packit/packit bash
    $ packit copr-build

#### packit build

    $ podman run -ti --rm -v ~/.ssh/:/root/.ssh:z -v $PWD:/src:z quay.io/packit/packit bash
    $ fkinit -u <Fedora Account username>
    $ packit build


## RPM builds pass on your laptop.

Once you install packit locally, it's time to fill `.packit.yaml` — the
configuration file packit is using. Packit can help to fill the initial
template by running the `init` command:

    $ packit init
    $ cat .packit.yaml

```yaml
# See the documentation for more information:
# https://packit.dev/docs/configuration/

specfile_path: packit.dev.spec

# add or remove files that should be synced
files_to_sync:
    - packit.dev.spec
    - .packit.yaml

# name in upstream package repository/registry (e.g. in PyPI)
upstream_package_name: packit.dev
# downstream (Fedora) RPM package name
downstream_package_name: packit.dev
```

Head on to page [configuration]({{< ref "configuration" >}}) to learn more
about the config file.

Packit supports actions and hooks: you can define your own commands which would
replace packit's implementation (e.g. get version, or create a tarball) or run
specific commands after the upstream repo is cloned. Please read more about
actions here: [actions]({{< ref "actions" >}}).

Packit needs an RPM spec file to build your package. The spec file does not
need to be included in the upstream repo and can be generated on the fly or
downloaded (e.g. from Fedora dist-git). Please check out our [FAQ]({{< ref
"faq" >}}) to read about some other common questions.

You can also read more about the SRPM process in [the document]({{< ref
"cli/srpm" >}}) dedicated to the `srpm` command.

Is your `packit srpm` finally passing? If not, feel free to reach out to us. If
yes, let's proceed to the next level.


## Running from the dist-git repository

When you are not allowed or do not want to run packit command from the upstream
git repository, you can run commands from the cloned dist-git repository in the
same way as you do from upstream.  Make sure, that you specify the
`upstream_project_url` in your configuration.

## You are approved to use Packit Service.

In order to start using packit service, our GitHub app, you need to [install it
in your GitHub projects]({{< ref "packit-service" >}}) and get approved.
(The approval process can be done by you without any manual interaction
by the Packit team.)

## The project has successful builds inside the service.

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


Packit supports various functions in form of jobs you can configure.
(All the jobs are described [here](https://packit.dev/docs/configuration/#supported-jobs).)
In order to get RPM builds for every change in your project, you need add a
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

## Packit service handles Fedora updates for you.

So you already have a `jobs` section in your config. Let's extend it with another
job to push new upstream releases to Fedora rawhide:

```yaml
jobs:
- job: propose_downstream
  trigger: release
  dist_git_branches:
    - main
```

Pretty clear I'd say: when a new upstream release happens, propose it to
dist-git main branch: Fedora Rawhide.

If you are wondering if you can use this for other branches as well,
you will not be disappointed.
That is exactly why there is a `dist_git_branches` key where you can specify the list of
all the dist-git branches you want to update.
And if you don't want to change the configuration every release,
take a look at [aliases](/docs/configuration/#aliases) you can use instead of hardcoded versions.

When running locally, you can set `create_pr` option to `false`
to directly push to a dist-git branch:

```yaml
create_pr: false
jobs:
- job: propose_downstream
  trigger: release
  dist_git_branches:
    - main
```

This option is ignored in Packit running on GitHub for security reasons and **is not**
recommended either.

Here, CI systems and packagers need to step in and verify the proposed changes.

Once the pull-request is merged, you can use a [`koji_build` job](/docs/configuration/#koji_build) to trigger the Koji build
for new dist-git commits. It can be configured like this:

```yaml
jobs:
- job: koji_build
  trigger: commit
  dist_git_branches:
    - fedora-all
```

And if you do not wish to wait for the successful build and create the Bodhi update yourself,
just configure [another Packit job](/docs/configuration/#bodhi_update) to create it automatically:

```yaml
jobs:
- job: bodhi_update
  trigger: commit
  dist_git_branches:
    - fedora-branched # rawhide updates are created automatically
```


Packit user in Fedora is not a proven packager, so you need
to grant [packit user](https://src.fedoraproject.org/user/packit) the ability to push.

And that's about it. Now you should be able to use the core features of the Packit.
If you have any questions, feel free to [reach out to us](https://packit.dev/#contact).
