---
title: build
weight: 3
---

# `packit build`

Submit a koji build for the selected branch in Fedora dist-git.

## Requirements

* Upstream git repository on Github.
* Packit config file placed in the upstream repository.
* Valid Fedora Kerberos ticket.


## Tutorial

1. [Place a config file for packit in the root of your upstream repository.](/docs/configuration/)

2. The command below would perform `fedpkg build` in the Fedora dist-git main branch.
    ```
    $ cd my/ustream/project/
    $ packit build
    ```


## Help

    Usage: packit build [OPTIONS] [PATH_OR_URL]
    
      Build selected upstream project in Fedora.
    
      By default, packit checks out the respective dist-git repository and
      performs `fedpkg build` for the selected branch. With `--from-upstream`,
      packit creates a SRPM out of the current checkout and sends it to koji.
    
      PATH_OR_URL argument is a local path or a URL to the upstream git
      repository, it defaults to the current working directory
    
    Options:
      --dist-git-branch TEXT  Comma separated list of target branches in dist-git
                              to release into. (defaults to repo's default branch)
    
      --dist-git-path TEXT    Path to dist-git repo to work in. Otherwise clone
                              the repo in a temporary directory.
    
      --from-upstream         Build the project in koji directly from the upstream
                              repository
    
      --koji-target TEXT      Koji target to build inside (see `koji list-
                              targets`).
    
      --scratch               Submit a scratch koji build
      --nowait                Don't wait on build
      -h, --help              Show this message and exit.


