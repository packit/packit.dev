---
title: Source-git
sidebar_position: 2
# aliases: [/source-git]

id: index
---

# Source-git documentation

Source-git is an addon on top of
[dist-git](https://github.com/release-engineering/dist-git), and aims to provide
an alternative to maintain packages using an upstream format.

Many packages are already maintained like this (ex: kernel, systemd), and teams
created their own workflows and tooling to support their specific use case. This
makes adapting the workflow by other packages challenging.

Our goal is to create an implementation which is configurable, easy to start
with, and to provide both command-line tooling and the related bots to help to
adopt and use the workflow.

> Before you continue reading, we assume you are familiar with the [Fedora
> Maintenance Guide](https://fedoraproject.org/wiki/Package_maintenance_guide).

Source-git is a Git repository which contains upstream sources and
downstream-specific files: for packaging and code changes specific to a
distribution, in our case Fedora Linux, CentOS Stream and Red Hat Enterprise
Linux.

For more info continue with:

* [Source-git design]({{< ref "/source-git/design.md" >}})
* [Working with source-git]({{< ref "/source-git/work-with-source-git" >}})
