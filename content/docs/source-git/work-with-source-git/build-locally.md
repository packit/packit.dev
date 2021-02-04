---
title: "Build current checkout locally"
date: 2021-01-27T23:59:59+01:00
draft: false
weight: 3
---

# Build your current checkout locally

Once you are comfortable with your local changes, you can build them before
pushing them out. Just make sure that all code changes are committed, otherwise
Packit won't be able to create patch files out of them.

We are going to use Packit to achieve such a thing, so please make sure you have it
[installed locally](/docs/guide/#have-packit-tooling-installed-locally).

The command to create source RPMs is called `srpm` and that's how you can create one:

    $ packit srpm
    SRPM: /home/tt/g/systemd/systemd-stable/systemd-247.1-2.g68d22b32.fc33.src.rpm

Our changes worked! We can try building them, either in our local environment
using Packit - this implies that all build dependencies are installed:

    $ packit local-build

...or in [mock](https://github.com/rpm-software-management/mock):

    mock --rebuild -r fedora-rawhide-x86_64 ./systemd-247.1-2.g68d22b32.fc33.src.rpm

`-r` allows you [to pick a chroot]({{< ref "configuration.md#available-copr-build-targets" >}})
of your choice and these are exactly the same which you can specify for builds
in your `packit.yaml`.

If the build is passing locally, it may be time to [propose your changes to
dist-git]({{< ref "propose-to-dist-git.md" >}}).


## How Packit generates an SRPM from a source-git repo?

These are the steps:

1. Download archive specified in specfile's Source directive.
2. Create patch files from commits on top off `upstream_ref` where necessary.
3. Bump release in the spec file.
4. Generate new changelog entry in the spec file.
5. Run rpmbuild and set paths so that rpmbuild can find patches, spec files,
   archive and additional sources.

