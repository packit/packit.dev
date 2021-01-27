---
title: "Pull fixes from the upstream"
date: 2021-01-26T23:59:59+01:00
draft: false
weight: 2
---

# Pull fixes from the upstream

One of the common tasks of being a downstream maintainer is to pull fixes from
the upstream codebase. This usually happens when a problem is discovered
downstream which is already resolved in the upstream code. There are two
scenarios how to obtain the upstream code:
1. The fix is not released yet by the upstream - this implies pulling the fix
   from the main development upstream branch.
2. If the fix is already released, one can either update to that upstream
   release or only pull commits with the fix. Please consult [Fedora Update Policy
   ](https://fedoraproject.org/wiki/Updates_Policy#Stable_Releases) if
   you are unsure how to proceed.


## Adding changes

Since your source-git repository shares git history with upstream, you can
easily cherry-pick commits which you want to have in the downstream and Packit
is then able to turn those commits into patch files with the ability to
configure the whole process.

As an example, let's try to do this with systemd, in the example below we'd be
using https://gitlab.com/packit-service/src/systemd.
```
$ git remote -v
origin      git@gitlab.com:TomasTomecek/systemd-stable.git (push)
source-git  git@gitlab.com:packit-service/src/systemd.git (push)
upstream    git@github.com:systemd/systemd-stable.git (push)
```

We have 3 remotes in the repo:
1. `origin` — a fork of the source-git repo
2. `source-git` — the official source-git repo where the downstream maintenance happens
3. `upstream` — the official upstream repository

With this setup, we can fetch ref from the `upstream` remote, cherry-pick commits
of our choice, push them to the fork `origin` and open a merge request against the
repository referenced as `source-git` remote.


### Controlling the patch process

Packit recognizes that the upstream commits are meant to be downstream patches:
1. Packit generates patch files from the commits via `git format-patch`.
2. It also adds them into the spec file as new `PatchXYZ` entries.

If that doesn't work for you, you can tailor the patch process. The main
downside is that with the default process you cannot name the patch file nor
control where exactly should Packit place the `Patch123: 123.patch` line in the
spec file. There is a way though how you can do all of that yourself. You can
set patch metadata in a commit message which Packit will then read and take
into account:
* `patch_name` — name of the patch (e.g. `patch_name: my-fancy.patch`)
* `present_in_specfile` — when set to `true`, it indicates the patch is set in
  the spec file so Packit should not do any changes in the spec file (the
  default is `false` which will make Packit to define the patch in the spec
  file)

Packit parses the metadata as yaml, hence the colon syntax.

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
