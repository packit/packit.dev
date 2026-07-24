---
title: Packit CLI
date: 2019-07-09
chapter: false
sidebar_position: 8
---

# Packit CLI

## Installation

There are various ways how to install [packit CLI](https://github.com/packit/packit).
Pick what suits you the best:

### Fedora Linux

    $ sudo dnf install packit

### Red Hat Enterprise Linux or CentOS Stream 9

On RHEL/CentOS Stream 9 you can install RPM from [EPEL](https://fedoraproject.org/wiki/EPEL) repository.

    $ sudo dnf install epel-release
    $ sudo dnf install packit

### From Fedora Copr

You can also help us test the latest development snapshot by installing packit
built from the main branch in Copr:

    $ sudo dnf copr enable packit/packit-dev
    $ sudo dnf install packit
    $ # OR in case you have packit already installed from the Fedora repositories:
    $ sudo dnf upgrade packit

:::tip

We have multiple Copr repositories:
* `packit-releases` — contains latest releases, even before they get pushed to
  _stable_ as updates by Bodhi
* `packit-dev` — contains latest Packit (from the `main` branch)
* `packit-stable` — contains Packit that runs on our production

:::

### From PyPI

When you install packit with `pip`,
some of the dependencies need to be compiled from sources,
for example on Fedora you first need to install a few devel packages:

    $ sudo dnf install gcc python3-devel libcurl-devel krb5-devel openssl-devel

Packit on PyPI is available as [packitos](https://pypi.org/project/packitos)
project (packit at PyPI is something different).

    $ pip install --user packitos

### From Source

... or installing it directly from GitHub:

    $ pip install --user git+https://github.com/packit/packit

You will need to install some devel packages first, see above section.

### In a container

If none of the above work for you, try running it in a container
from our Fedora based image. It contains packit installed from `main` branch,
i.e. the same you'd get by pip installing from GitHub.

::::tip

When you wish to run mock build inside the container, you have to use a privileged
container, therefore add the `--privileged` switch to the `podman`.

:::warning

`docker run --privileged` is not the same as `podman run --privileged`. For more
information refer to the [Mock docs](https://rpm-software-management.github.io/mock/#mock-inside-podman-fedora-toolbox-or-docker-container).

:::

::::

    $ podman run -ti --rm -v $PWD:/src:z quay.io/packit/packit bash
    $ packit
    Usage: packit [OPTIONS] COMMAND [ARGS]...

:::tip

If you get an error such as `Error: SELinux relabeling of /some/dir is not allowed`, make sure
your working directory is a directory your user has full access to. The relabeling is requested
by the `:z` suffix in order to ensure the directory is writable from both inside and outside
the container.

:::

Depending on the command you want to perform you need to mount secrets and
configuration files, like in the following examples:

#### Copr build

    $ podman run -ti --rm -v ~/.config/copr:/root/.config/copr:z -v $PWD:/src:z quay.io/packit/packit bash
    $ packit build in-copr

#### Koji build

    $ podman run -ti --rm -v ~/.ssh/:/root/.ssh:z -v $PWD:/src:z quay.io/packit/packit bash
    $ fkinit -u <Fedora Account username>
    $ packit build in-koji

#### RPM build via mock

    $ podman run --privileged -ti --rm -v $PWD:/src/:z quay.io/packit/packit bash
    $ packit build in-mock

### Running on alternative platforms or architectures

For running Packit CLI on the alternative platforms or architectures,
such as macOS or unsupported Linux distributions, it is recommened to use the
container method described above.

For the macOS you can also use seamless virtualization via [Lima](https://lima-vm.io/).

## Commands

* [build](/docs/cli/build/)
* [create-update](/docs/cli/create-update/)
* [init](/docs/cli/init/)
* [propose-downstream](/docs/cli/propose-downstream/)
* [push-updates](/docs/cli/push-updates)
* [srpm](/docs/cli/srpm/)
* [status](/docs/cli/status)
* [sync-from-downstream](/docs/cli/sync-from-downstream/)
* [config validate](/docs/cli/config/validate)
* [source-git init](/docs/cli/source-git/init)
* [source-git update-dist-git](/docs/cli/source-git/update-dist-git)
* [source-git update-source-git](/docs/cli/source-git/update-source-git)
* [source-git status](/docs/cli/source-git/status)
