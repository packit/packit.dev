---
title: "Working with source-git"
date: 2020-06-24T23:59:59+01:00
draft: false
weight: 3
---

# Working with source-git

This document is focused on how packit treats a source-git repo.

If you are looking for the design concept of source-git, please head on here:
[docs/source-git-design]({{< ref "/docs/source-git/design.md" >}})

In short, the source-git concept is fairly simple - take an upstream repo and shove
downstream content on top of it. Easy right?

Packit is then able to work with such a repo and:

* Create SRPMs

* Sync the state into dist-git

* And you are able to utilize all features of packit-service: builds on PRs,
  tests on those builds, update your package in Fedora.

Let's describe all of these in detail.


## Upstream git history or just an unpacked tarball?

Your source-git repo can contain upstream git history if you want. Or it
doesn't. The alternative is to unpack a tarball corresponding to an upstream
release. This is really up to you and packit is able to work with both.

The key ingredient here is the config option `upstream_ref`. It tells packit
the git ref which is supposed to match the archive specified in the spec file.
All commits on top of this ref are treated either as:

* downstream patches
* downstream packaging

For downstream patches, packit creates a patch for each commit on top of
`upstream_ref`. Downstream packaging changes are ignored in patch files since
they can be directly committed to dist-git. You can control the ignore
mechanism with config option `patch_generation_ignore_paths`.


### Example

Let's have a look at source-git repo for pacemaker package:

    $ git log --online
    bd12722 (HEAD -> c8s-test, origin/c8s-test, master) downstream packaging
    7201e28 Refactor: controller: remove unused argument
    91c557c Refactor: controller: convert active_op_t booleans to bitmask
    2e90063 Refactor: controller: rename struct recurring_op_s to active_op_t
    3ee90ce (tag: source-git-start) pacemaker-2.0.3 base

We have 5 commits:
* bd12722 - top commit, contains a spec file so packit won't create a patch file out of this one
* 7201e28 - the 3rd downstream patch
* 91c557c - the 2nd downstream patch
* 2e90063 - the 1st downstream patch
* 3ee90ce - the bottom commit, equals to an unpacked upstream tarball

packit.yaml has only two lines:

    $ cat .packit.yaml
    specfile_path: SPECS/pacemaker.spec
    upstream_ref: source-git-start

As you can see, we are telling packit, that commit tagged as `source-git-start`
indicates the barrier between upstream and downstream, in our case, it's just a
single commit with the upstream archive content, but it could have been the
whole upstream git history.


## Adding changes

So, how can one add new changes into a source-git repo? That's simple - just
commit them. If your repo is on GitHub (or another public forge), you can even
force-push changes to achieve desired results with patches.

The important point with patch files is, that a commit which changes code (not
downstream packaging) will be:
1. converted into a patch file (using `git format-patch`)
2. added to the spec file


### Controlling the patch process

With the process above you cannot name the patch file nor control where exactly
should packit place the `Patch123: 123.patch` line in the specfile. There is a
way though how you can do all of that yourself. You can set patch metadata in a
commit message which packit will then read and take into account:
* `patch_name` — name of the patch (e.g. `my-fancy.patch`)
* `present_in_specfile:` — when set to `true`, it indicates the patch is set in
  the spec file so packit should not touch the spec file

packit parses the metadata as yaml, hence the colon syntax.

Example:

    Author:     Packit <packit>
    AuthorDate: Wed Aug 19 11:55:14 2020 +0000
    Commit:     Packit <packit>
    CommitDate: Wed Aug 19 11:55:14 2020 +0000

        Apply patch drpm-0.3.0-workaround-ppc64le-gcc.patch

        patch_name: drpm-0.3.0-workaround-ppc64le-gcc.patch
        present_in_specfile: true
    ---
    src/CMakeLists.txt  |  2 +-
    test/CMakeLists.txt | 12 +-----------
    2 files changed, 2 insertions(+), 12 deletions(-)

And this is how a corresponding spec file looks (shortened for brevity)

    Name:           drpm
    Version:        0.4.1
    Release:        2.g959639c5%{?dist}
    URL:            https://github.com/rpm-software-management/%{name}
    Source:         %{url}/releases/download/%{version}/%{name}-%{version}.tar.bz2

    # add workaround for gcc7 on ppc64le temporary before it's fixed in gcc
    # https://bugzilla.redhat.com/show_bug.cgi?id=1420350
    Patch1:         drpm-0.3.0-workaround-ppc64le-gcc.patch

    %prep
    %autosetup -p1

### Rebase or merge?

The most common workflow in the world of open source development is to accept
pull requests and have merge commits in the git history. If the PRs are not
rebased against the main branch before the merge, the history may go wild.
Packit is able to work with such a state by creating an ephemeral branch with
linear history and generate the patch files out of it. [More
info](https://github.com/packit/packit/pull/766).

Picking up latest upstream changes into your downstream source-git repo has
multiple solutions and it's up to you to pick the one which suits your workflow
best:

1. **Rebase against the main upstream branch** (a.k.a. `git pull --rebase
   upstream master`). This solution implies that you are able to perform the
   force-push operation (e.g. Fedora and CentOS dist-git instances don't allow
   force-pushes). Packit will not help you with the rebase process in any way
   and it's up to you to complete the rebase.
2. **Create a new branch for every upstream release**. No rebase needed — may
   require good branch hygiene since the number of branches can skyrocket. No
   dedicated help from packit again, you are running all the `git` commands.
3. **Merge upstream changes** (a.k.a. `git merge upstream/master`). Does not
   alter existing git history, yet makes it more complicated.


## Creating an SRPM

The format between a source-git repo and the build system is a source RPM - 
SRPM. We can then take the file and build it locally, send it to koji or copr
and we would get the result we want - a list of binary RPMs created from the
SRPM.

In the end, you can create SRPM with packit's `srpm` command:

    $ packit srpm
    SRPM: /home/tt/p/c/s/pacemaker/pacemaker-2.0.3-6.gbd127227.fc32.src.rpm


### How packit generates an SRPM from a source-git repo?

These are the steps:

1. Download archive specified in specfile's Source directive.
2. Create patch files from commits on top off `upstream_ref` where necessary.
3. Bump release in the spec file.
4. Generate new changelog entry in the spec file.
5. Run rpmbuild and set paths so that rpmbuild can find patches, spec files,
   archive and additional sources.

## Updating your package in Fedora

In this chapter, we'd cover the "sync to dist-git" part listed above. When you
use source-git to track a package in Fedora, the workflow is the same as if you
were in an upstream repository:

    $ packit propose-update

which creates a PR similar to this: [src.fedoraproject.org/rpms/python-docker/pull-request/26](https://src.fedoraproject.org/rpms/python-docker/pull-request/26).
