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


