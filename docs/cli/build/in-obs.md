---
title: in-obs
date: 2024-06-27
sidebar_position: 5
---

# `packit build in-obs`

Submit a build of the present content in the upstream or local repository to [OBS](https://build.opensuse.org/).

## Requirements

* SPEC file for the project placed in the repository.
* Packit config file placed in the repository.
* OBS user account and password needs to be configured in osc configuration file ~/.config/osc/oscrc.
  This can be done by running `osc`.


## Tutorial

1. [Place a config file for packit in the root of your upstream repository.](/docs/configuration/)

2. The command below creates a tarball (archive) of your repository and commits it  along with the spec file to a package with a name corresponding to your upstream project on [OBS](https://build.opensuse.org/). The project defaults to home:$username:packit. Running packit build in-obs a second time creates a new commit in that package. 

    ```
    $ cd my/ustream/project/
    $ packit build in-obs --project <project_name>
    ```
## Help

    Usage: packit build in-obs [OPTIONS] [PATH_OR_URL]

      Build selected project in OBS

      Before Running this command, your opensuse user account and password needs
      to be configured in osc configuration file ~/.config/osc/oscrc. This can be
      done by running `osc`.

    Options:
      --owner TEXT         OBS user, owner of the project. (defaults to the
                           username from the oscrc)
      --project TEXT       Project name to build in. It will be created if does
                           not exist. It defaults to home:$owner:packit:$pkg
      --targets TEXT       Comma separated list of chroots to build in. (defaults
                           to 'fedora-rawhide-x86_64')
      --description TEXT   Description of the project to build in.
      --upstream-ref TEXT  Git ref of the last upstream commit in the current
                           branch from which packit should generate patches (this
                           option implies the repository is source-git).
      --wait / --no-wait   Wait for the build to finish
      -p, --package TEXT   Package to build, if more than one available, like in a
                           monorepo configuration. Use it multiple times to select
                           multiple packages.Defaults to all the packages listed
                           inside the config.
      -h, --help           Show this message and exit.
