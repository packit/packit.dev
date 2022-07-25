---
title: Packit CLI
date: 2019-07-09
chapter: false
weight: 8
bookCollapseSection: true
---

# Packit CLI

## Installation

There are various ways how to install [packit CLI](https://github.com/packit/packit).
Pick what suits you the best:

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

#### Copr build

    $ podman run -ti --rm -v ~/.config/copr:/root/.config/copr:z -v $PWD:/src:z quay.io/packit/packit bash
    $ packit build in-copr

#### Koji build

    $ podman run -ti --rm -v ~/.ssh/:/root/.ssh:z -v $PWD:/src:z quay.io/packit/packit bash
    $ fkinit -u <Fedora Account username>
    $ packit build in-koji

## Commands

* [build](/docs/cli/build/)
* [create-update](/docs/cli/create-bodhi-update/)
* [init](/docs/cli/init/)
* [propose-downstream](/docs/cli/propose-downstream/)
* [push-updates](/docs/cli/push-updates)
* [srpm](/docs/cli/srpm/)
* [status](/docs/cli/status)
* [sync-from-downstream](/docs/cli/sync-from-downstream/)
* [validate-config](/docs/cli/validate-config)
* [source-git init](/docs/cli/source-git/init)
* [source-git update-dist-git](/docs/cli/source-git/update-dist-git)
* [source-git update-source-git](/docs/cli/source-git/update-source-git)
* [source-git status](/docs/cli/source-git/status)
