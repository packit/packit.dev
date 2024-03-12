---
title: in-copr
date: 2019-07-16
sidebar_position: 35
---

# `packit build in-copr`

Submit a [Copr](https://copr.fedorainfracloud.org) build of the present content in the upstream repository.

## Requirements

* Upstream git repository on GitHub.
* Packit config file placed in the upstream repository.
* `~/.config/copr`

A minimum copr configure file is:
```
[copr-cli]
copr_url = https://copr.fedorainfracloud.org
gssapi = true
```
This uses GSSAPI (see [`fkinit`](https://fedoraproject.org/wiki/Infrastructure/Kerberos#How_to_use_kerberos_auth_with_Fedora_Infrastructure)
for more details). Alternatively you can use copr API token available [here](https://copr.fedorainfracloud.org/api/).

## Tutorial

1. [Place a config file for packit in the root of your upstream repository.](/docs/configuration/)

2. The command below would create a SRPM from the present content of a repo and perform `copr-cli build` with it. If you need to specify a project name/owner or chroots, see the options in help.
    ```
    $ cd my/ustream/project/
    $ packit build in-copr
    ```

## Help


