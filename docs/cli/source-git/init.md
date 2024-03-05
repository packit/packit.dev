---
title: init
sidebar_position: 1
---

# `packit source-git init`

Initialize a repository to serve as a [source-git repo](/source-git).

The biggest advantage of this command is the functionality to create source-git
repos. Here's a quick rundown what packit does:

 * Fetches specfile and additional sources from Fedora or CentOS dist-git.
 * Apply downstream patches as commits.
 * Add source-git configuration to control future syncing to dist-git.

We have [a guide](/source-git/work-with-source-git/create-source-git) on how to create
source-git repos manually if you want to understand the steps performed.

## Prerequisites

 * A clone of the upstream repo with checked out branch which matches the base ref.
 * The git ref of the upstream repo used as a base.
 * A clean dist-git repository.

## Tutorial

As an example, let's create a source-git repo out of
[systemd](https://github.com/systemd/systemd-stable). The project uses a
dedicated repository to provide backports for actively maintained stable
releases.

First step is to clone the respective dist-git repo (we'll use Fedora Rawhide
in our case):

    $ cd $FEDORA_DIST_GIT_REPOS
    $ fedpkg clone systemd
    $ cd systemd

We should now determine the version in the specfile

    $ rpmspec -q --qf "%{version}" ./systemd.spec
    249.4

Since systemd-stable prefixes the backport releases with `v`, we know that we want to base our source-git repo on the `v249.4` tag:

    $ cd $FEDORA_SOURCE_GIT_REPOS
    $ git clone https://github.com/systemd/systemd-stable
    $ cd systemd-stable
    $ git checkout 'v249.4'

All the prereqs should be met now! We have the upstream clone with the proper
tag checked out and the respective dist-git repo. We can now run the `source-git init`
command:

    $ packit source-git init v249.4 $FEDORA_SOURCE_GIT_REPOS/systemd-stable $FEDORA_DIST_GIT_REPOS/systemd

Once the command finishes successfully, your source-git repo is available for
you at `$FEDORA_SOURCE_GIT_REPOS/systemd-stable`.
If you're about to push the created repo to a forge in order to use
[our automation](https://github.com/packit/hardly), don't forget to push
the existing upstream tags as well (`git push --tags`), otherwise, the automation won't work.

Please head on to a section in this documentation which covers
[working with source-git repos](/source-git/work-with-source-git).

By default, using `%autosetup` in the `%prep` section of the specfile is required. 
You can use `--ignore-missing-autosetup` option to enforce running the command 
without using `%autosetup`, but Packit then cannot guarantee that the patches will be properly applied.
Therefore, please make sure that running `%prep` produces a git repository with patches applied on top when using this option.
It will be the base of your source-git repository.

## Help


