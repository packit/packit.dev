---
title: "Source-git"
draft: false
weight: 6
aliases: [/source-git]
bookCollapseSection: true
---

# Source-git documentation

We initiated source-git as an alternative to working in
[dist-git](https://github.com/release-engineering/dist-git). The need was
especially amplified after we realized that many projects already do this. The
problem was that everyone created a workflow and tooling for themselves which
made it really hard to share knowledge and on-board new projects. Our intention
is to create an implementation which is highly configurable, easy to start with
and provides both command-line tooling and a service which is tightly
integrated with GitHub and GitLab.

> Before you continue reading, we assume you are familiar with the [Fedora
> Maintenance Guide](https://fedoraproject.org/wiki/Package_maintenance_guide).

Source-git is a git repository which contains upstream sources and
downstream-specific files: for packaging and code changes specific to a
distribution, in our case Fedora Linux, CentOS Stream and Red Hat Enterprise
Linux.

The basic requirement on a source-git repo is that one needs to be able to
create an SRPM out of the current checkout. We need several files to achieve
such a thing:

* RPM Spec file

* Archive with sources

* Downstream patches to be applied in the spec file

![Source-git example](/source-git-diagram.png)


### Spec file

We are often being asked a question about spec files: "Do we really need to
[have a spec file in our upstream repo or a source-git repo?!]({{< ref
"faq#how-can-i-download-rpm-spec-file-if-it-is-not-part-of-upstream-repository"
>}})" No, you don't, though storing the spec file directly in the repository
will save you a lot of trouble - when you disconnect the repository from the
build recipe, the spec file:
* Adding or changing a build dependency will require changing the spec file in
  the other location as well.
* Someone may change the remote spec file and make builds fail suddenly.
* Debugging build failures will be a nightmare because you simply can't edit
  the spec file easily.


### Archive

Packit downloads the archive defined as `Source` or `Source0` in your spec file
to produce a SRPM.


### Downstream patch generation process

Packit iterates over every git commit sitting on top off [`upstream_ref`]({{<
ref "configuration.md#upstream_ref" >}}). `upstream_ref` is a border between
upstream commits, usually matching an upstream release tag, and downstream
commits.

Packit distinguishes between 2 types of git commits:
1. Those that change code (usually pulled from upstream) - Packit converts
   these into patch files so they can be applied to the source tree in the
   `%prep` section during the build process.
2. Changes to packaging (spec file, other sources, changes to .packit.yaml).


### Downstream patches to be applied in the spec file

In the downstream, it's a common workflow to pick up upstream patches from the
main branch, backport them on top of the current version in Fedora, CentOS
Stream or RHEL and apply the patches during the build process.

Source-git is perfect for this because patches are stored as git commits and
patch files are generated on the fly.

The important part of the patch generation process is for Packit to know, from
which commit it should start generating patches. The theory here is that you
mark a certain commit and it should resemble the content of the archive. All
the code changes on top are treated as downstream changes and the respective
patch files are generated. The marked commit usually represents a specific
upstream release. This means that all the generated patches need to be able to
be applied during the build process.


This was just a gentle intro to source-git, for more info you can continue with:
* [How to create a source-git repo?]({{< ref "/docs/source-git/how-to-source-git.md" >}})
* [Working with source-git]({{< ref "/docs/source-git/work-with-source-git" >}})
* [Source-git concept]({{< ref "/docs/source-git/design.md" >}})
