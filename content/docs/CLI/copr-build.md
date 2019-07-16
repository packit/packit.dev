---
title: "copr-build"
date: 2019-07-16
draft: false
---

Submit a [Copr](https://copr.fedorainfracloud.org) build of the present content in the upstream repository.

## Requirements

* Upstream git repository on Github.
* Packit config file placed in the upstream repository.
* [~/.config/copr](https://copr.fedorainfracloud.org/api/)

## Tutorial

1. [Place a config file for packit in the root of your upstream repository.](/docs/configuration/)

2. The command below would create a SRPM from the present content of a repo and perform `copr-cli build` with it. If you need to specify a project name/owner or chroots, see the options in help.
    ```
    $ cd my/ustream/project/
    $ packit copr-build
    ```

## Help

```
Usage: packit copr-build [OPTIONS] [PATH_OR_URL]

  Build selected upstream project in COPR.

  PATH_OR_URL argument is a local path or a URL to the upstream git repository, it defaults to the current working directory.

Options:
  --nowait        Don't wait for build
  --owner TEXT    Copr user, owner of the project. (defaults to username from ~/.config/copr)
  --project TEXT  Project name to build in. Will be created if does not exist. (defaults to 'packit-cli-{repo_name}-{branch/commit}')
  --targets TEXT  Comma separated list of chroots to build in. (defaults to 'fedora-rawhide-x86_64')
```
