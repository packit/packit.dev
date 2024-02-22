---
title: in-koji
sidebar_position: 3
---

# `packit build in-koji`

Submit a Koji build for the selected branch in Fedora dist-git.

## Requirements

* Upstream git repository on GitHub.
* Packit config file placed in the upstream repository.
* Valid Fedora Kerberos ticket.


## Tutorial

1. [Place a config file for packit in the root of your upstream repository.](/docs/configuration/)

2. The command below would perform `fedpkg build` in the Fedora dist-git main branch.
    ```
    $ cd my/ustream/project/
    $ packit build in-koji
    ```

## Help

    Usage: packit build in-koji [OPTIONS] [PATH_OR_URL]

      Build selected upstream project in Fedora.

      By default, packit checks out the respective dist-git repository and
      performs `fedpkg build` for the selected branch. With `--from-upstream`,
      packit creates a SRPM out of the current checkout and sends it to koji.

      PATH_OR_URL argument is a local path or a URL to the upstream git
      repository, it defaults to the current working directory

    Options:
      --dist-git-branch TEXT    Comma separated list of target branches in dist-
                                git to release into. (defaults to repo's default
                                branch)
      --dist-git-path TEXT      Path to dist-git repo to work in. Otherwise clone
                                the repo in a temporary directory.
      --from-upstream           Build the project in koji directly from the
                                upstream repository
      --koji-target TEXT        Koji target to build inside (see `koji list-
                                targets`).
      --scratch                 Submit a scratch koji build
      --wait / --no-wait        Wait for the build to finish
      --release-suffix TEXT     Specifies release suffix. Allows to override
                                default generated:{current_time}.{sanitized_curren
                                t_branch}{git_desc_suffix}
      --default-release-suffix  Allows to use default, packit-generated, release
                                suffix when some release_suffix is specified in
                                the configuration.
      -p, --package TEXT        Package to build, if more than one available, like
                                in a monorepo configuration. Use it multiple times
                                to select multiple packages.Defaults to all the
                                packages listed inside the config.
      -h, --help                Show this message and exit.
