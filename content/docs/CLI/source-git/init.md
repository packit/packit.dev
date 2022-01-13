---
title: "init"
disableToc: false
weight: 1
---

# `packit source-git init`

Initialize a repository to serve as a [source-git repo]({{< ref "/docs/source-git" >}}).

The biggest advantage of this command is the functionality to create source-git
repos. Here's a quick rundown what packit does:

 * Fetches specfile and additional sources from Fedora or CentOS dist-git.
 * Apply downstream patches as commits.
 * Add source-git configuration to control future syncing to dist-git.

We have [a guide]({{< ref "/docs/source-git/how-to-source-git.md" >}}) on how
to create source-git repos manually if you want to understand the steps performed.

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
you at `$FEDORA_SOURCE_GIT_REPOS/systemd-stable`. Please head on to a section
in this documentation which covers [working with source-git repos]({{< ref
"/docs/source-git/work-with-source-git" >}}).

## Help

    $ packit source-git init --help
    Usage: packit source-git init [OPTIONS] UPSTREAM_REF SOURCE_GIT DIST_GIT

      Initialize SOURCE_GIT as a source-git repo by applying downstream patches
      from DIST_GIT as Git commits on top of UPSTREAM_REF.

      UPSTREAM_REF is a tag, branch or commit from SOURCE_GIT.

      SOURCE_GIT and DIST_GIT are paths to the source-git and dist-git repos.
      Branch names can be specified, separated by colons.

      If a branch name is specified for SOURCE_GIT, the branch is checked out
      and reset to UPSTREAM_REF.

      If a branch name is specified for DIST_GIT, the branch is checked out
      before setting up the source-git repo. This branch is expected to exist.

      To learn more about source-git, please check

          https://packit.dev/docs/source-git/

      Examples:

          $ packit source-git init v2.3.1 src/acl:rawhide rpms/acl:rawhide
          $ packit source-git init --pkg-tool centpkg v2.3.1 src/acl rpms/acl

    Options:
      --upstream-url TEXT     Git URL of the upstream repository. It is saved in
                              the source-git configuration if it is specified.

      --upstream-remote TEXT  Name of the remote pointing to the upstream
                              repository. If --upstream-url is not specified, the
                              fetch URL of this remote is saved in the source-git
                              configuration as the Git URL of the upstream
                              project. Defaults to 'origin'.

      --pkg-tool TEXT         Name or path of the packaging tool used to work with
                              sources in the dist-git repo. A variant of 'rpkg'.
                              Defaults to 'fedpkg' or the tool configured in the
                              Packit configuration.

      --pkg-name TEXT         The name of the package in the distro. Defaults to
                              the directory name of DIST_GIT.

      -h, --help              Show this message and exit.

