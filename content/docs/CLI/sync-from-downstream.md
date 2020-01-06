---
title: "sync-from-downstream"
date: 2019-06-28
draft: false
disableToc: false
weight: 9
---


This is a detailed documentation for the downstream sync functionality of packit. The
command creates a new pull request in upstream repository using a
selected branch (master by default) from Fedora dist-git repository.


## Requirements

* Fedora dist-git repository.
* Packit config file placed in the upstream repository.
* Pagure API tokens for Fedora Dist-git.
* Github API token.


## Tutorial

* Starting with packit 0.5.2 and later, you only need to set a single token to
  interact with dist-git. You needed two in the past. Please populate your
  local config at `~/.config/packit.yaml` for packit so it can talk to the
  remote services:

```
# you can obtain the token over here: https://github.com/settings/tokens
github_token: 123
# and this one right here: https://src.fedoraproject.org/settings#nav-api-tab
pagure_user_token: 456
```

* Files which are synced are mentioned in `.packit.yaml` as `synced_files` value.

* Once you want to sync Fedora dist-git repo into the upstream repo,
  run `packit sync-from-downstream` in a working directory of your upstream
  repository:

```bash
$ git clone https://github.com/user-cont/colin.git

$ cd colin

$ packit sync-from-downstream
upstream active branch master
Cloning repo: https://src.fedoraproject.org/rpms/colin.git -> /tmp/tmph9npe78e
using master dist-git branch
syncing /tmp/tmph9npe78e/colin.spec
PR created: https://api.github.com/repos/phracek/colin/pulls/3
```


## packit sync-from-downstream --help

```bash
Usage: packit sync-from-downstream [OPTIONS] [PATH_OR_URL]

  Copy synced files from Fedora dist-git into upstream by opening a pull
  request.

  PATH_OR_URL argument is a local path or a URL to the upstream git
  repository, it defaults to the current working directory

Options:
  --dist-git-branch TEXT  Source branch in dist-git for sync.
  --upstream-branch TEXT  Target branch in upstream to sync to.
  --no-pr                 Pull request is not create.
  --fork / --no-fork      Push to a fork.
  --remote-name TEXT      Name of the remote where packit should push. if this
                          is not specified, it pushes to a fork if the repo
                          can be forked.
  -h, --help              Show this message and exit.
```
