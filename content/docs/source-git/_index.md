---
title: "Source-git"
draft: false
weight: 6
aliases: [/source-git]
bookCollapseSection: true
---

# Source-git documentation

Let's talk about what source-git actually is.

We initiated source-git as an alternative to working in
[dist-git](https://github.com/release-engineering/dist-git). The need was
especially amplified after we realized that many projects already do this. The
problem was that everyone created a workflow and tooling for themselves which
made it really hard to share knowledge and onboard new projects. Our intention
is to create an implementation which is highly configurable, easy to start with
and provides both command-line tooling and a service which is tightly
integrated with GitHub and GitLab.

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

I'm going to answer the elephant in the room right away: "Do we really need to
have a spec file in our upstream repo or a source-git repo?!" — No, you don't,
though storing the spec file directly in the repository is the most convenient.
Alternatively, packit needs to have a way to obtain the spec file, so, you can:
* download it from anywhere you want
* generate it
* fill in a template spec file during a build process


### Archive

Packit needs to be able to get an archive for the current git checkout. By
default this is done using `git-archive` command and you can override this in
any way you want:
* Use autotools or any build system of your choice
* Use the native way of how archives are being generated in a particular ecosystem
* Script it yourself


### Downstream patches to be applied in the spec file

In the downstream, it's a common workflow to pick up upstream patches from the
main branch, backport them on top of the current version in Fedora, CentOS
Stream or RHEL and apply the patches during the build process.

Source-git is perfect for this because patches are stored as git commits and
patch files are generated on the fly.

The important part of the patch generation process is for packit to know, from
which commit it should start generating patches. The theory here is that you
mark a certain commit and it should resemble the content of the archive. All
the code changes on top are treated as downstream changes and the respective
patch files are generated. The marked commit usually represents a specific
upstream release. This means that all the generated patches need to be able to
be applied during the build process.


This was just a gentle intro to source-git, for more info you can continue with:
* [How to create a source-git repo?]({{< ref "/docs/source-git/how-to-source-git.md" >}})
* [Working with source-git]({{< ref "/docs/source-git/work-with-source-git.md" >}})
* [Source-git concept]({{< ref "/docs/source-git/design.md" >}})
