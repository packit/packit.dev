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


