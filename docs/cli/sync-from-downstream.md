---
title: sync-from-downstream
date: 2019-06-28
sidebar_position: 9
---

# `packit sync-from-downstream`

This is a detailed documentation for the downstream sync functionality of packit. The
command creates a new pull request in upstream repository using a
selected branch (main by default) from Fedora dist-git repository.

## Requirements

* Fedora dist-git repository.
* Packit config file placed in the upstream repository.
* Pagure API tokens for Fedora Dist-git.
* GitHub API token.

## Tutorial

* Starting with packit 0.5.2 and later, you only need to set a single token to
  interact with dist-git. You needed two in the past. Please populate your
  local config at `~/.config/packit.yaml` for packit so it can talk to the
  remote services:

```yaml
# you can obtain the token over here: https://github.com/settings/tokens
github_token: 123
# and this one right here: https://src.fedoraproject.org/settings#nav-api-tab
pagure_user_token: 456
```

* The files which are synced are listed in `.packit.yaml` under the `files_to_sync` configuration key.

* Once you want to sync Fedora dist-git repo into the upstream repo,
  run `packit sync-from-downstream` in a working directory of your upstream
  repository:

```
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

    Usage: packit sync-from-downstream [OPTIONS] [PATH_OR_URL]
    
      Copy synced files from Fedora dist-git into upstream by opening a pull
      request.
    
      PATH_OR_URL argument is a local path or a URL to the upstream git
      repository, it defaults to the current working directory
    
    Options:
      --dist-git-branch TEXT  Comma separated list of target branches in dist-git
                              to sync from. (defaults to repo's default branch)
      --upstream-branch TEXT  Target branch in upstream to sync to. (defaults to
                              repo's default branch)
      --no-pr                 Do not create a pull request to upstream repository.
      --fork / --no-fork      Push to a fork before creating a pull request.
      --remote-to-push TEXT   Name of the remote where packit should push. If this
                              is not specified, push to a fork if the repo can be
                              forked.
      -f, --force             Don't discard changes in the git repo by default,
                              unless this is set.
      -p, --package TEXT      Package to sync back, if more than one available,
                              like in a monorepo configuration. Use it multiple
                              times to select multiple packages.Defaults to all
                              the packages listed inside the config.
      -x, --exclude TEXT      File to exclude from sync
      -h, --help              Show this message and exit.

