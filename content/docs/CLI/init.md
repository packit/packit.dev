---
title: "init"
draft: false
disableToc: false
weight: 3
---

# init

Initiate a repository to start using packit. By default this command adds
`.packit.yaml` config file to the git repository in the current working
directory.

If you specify any of the `--upstream-url`, `--fedora-package` or `--centos-package`,
packit will convert the git repo in the current working directory into a
[source-git repo]({{< ref "/docs/source-git" >}}).


## Prerequisites

 * Git repo in the current working directory.


### The source-git mode

The biggest advantage of this command is the functionality to create source-git
repos. Here's a quick rundown what packit does:

 * Pull upstream git history (the default is not pull and use the checked out
   branch).

 * Fetches specfile and additional sources from Fedora or CentOS dist-git.

 * Apply downstream patches as commits.

 * Add packit config file.

We have [a guide]({{< ref "/docs/source-git/how-to-source-git.md" >}}) on how
to create source-git repos manually if you want to learn more.


## Tutorial

As an example, let's create a source-git repo out of
[tmux](https://github.com/tmux/tmux).

First step is to clone the upstream repo:

    $ git clone https://github.com/tmux/tmux
    $ cd tmux

Now we can run the `init` command and get our source-git repo:

    $ packit init --fedora-package tmux

With the `--fedora-package` option we are telling packit to get downstream
packaging files from Fedora dist-git.

Yes, it was that simple.

Once the command finished successfully, we can create a SRPM and build it in
mock to prove the source-git repo works:

    $ packit srpm
    SRPM: /home/tt/g/packit/packit.dev/tmux/tmux-3.1c-2.g17785c78.fc33.src.rpm
    $ mock --rebuild -r fedora-rawhide-x86_64 ./*.src.rpm
    ...
    Wrote: /builddir/build/RPMS/tmux-3.1c-2.g17785c78.fc34.x86_64.rpm
    Wrote: /builddir/build/RPMS/tmux-debugsource-3.1c-2.g17785c78.fc34.x86_64.rpm
    Wrote: /builddir/build/RPMS/tmux-debuginfo-3.1c-2.g17785c78.fc34.x86_64.rpm
    ...
    INFO: Done(./tmux-3.1c-2.g17785c78.fc33.src.rpm) Config(fedora-rawhide-x86_64) 1 minutes 0 seconds

If you want to learn more about working with source-git repos, there is a
[dedicated section]({{< ref "/docs/source-git" >}}) in our documentation.


## Help

    $ packit init --help
    Usage: packit init [OPTIONS] [PATH_OR_URL]
    
      Initiate a repository to start using packit.
    
      If you specify --upstream-url, then a source-git repository is made,
      otherwise only configuration file packit.yaml is created.
    
      To learn more about source-git, please check
      https://packit.dev/docs/source-git/
    
    Options:
      -f, --force             Reset config to default if already exists.
      --upstream-url TEXT     URL or local path to the upstream project; defaults
                              to current git repository
    
      --upstream-ref TEXT     Use this upstream git ref as a base for your source-
                              git repo; defaults to current tip of the git
                              repository
    
      --fedora-package TEXT   Pick spec file from this Fedora Linux package;
                              implies creating a source-git repo
    
      --centos-package TEXT   Pick spec file from this CentOS Linux or CentOS
                              Stream package; implies creating a source-git repo
    
      --dist-git-branch TEXT  Get spec file from this downstream branch, for
                              Fedora this defaults to master, for CentOS it's c8s.
                              When --dist-git-path is set, the default is the
                              branch which is already checked out.
    
      --dist-git-path TEXT    Path to the dist-git repo to use. If this is
                              defined, --fedora-package and --centos-package are
                              ignored.
    
      -h, --help              Show this message and exit.
