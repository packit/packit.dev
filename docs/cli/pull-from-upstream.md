---
title: pull-from-upstream
date: 2024-02-22
sidebar_position: 8
---

# `packit pull-from-upstream`

This is a detailed documentation for the update functionality of packit. The
command creates a new pull request in Fedora (or CentOS Stream) using the selected or the latest
upstream release. This command is meant to be called from **dist-git repository**.


## Requirements

* Upstream git repository on GitHub/GitLab.
* Upstream release (git tag) where version in spec file is equivalent to
  the name of the git tag (or `upstream_tag_template` is configured).
* Packit config file placed in the dist-git repository.
* Pagure API tokens for Fedora (or CentOS Stream) Dist-git.
* Valid Fedora (or CentOS Stream) Kerberos ticket.


## Help

    Usage: packit pull-from-upstream [OPTIONS] [PATH_OR_URL] [VERSION]

      Land a new upstream release in Fedora using downstream packit config.

      PATH_OR_URL argument is a local path or a URL to the dist-git repository, it
      defaults to the current working directory

      VERSION argument is optional, the latest upstream version will be used by
      default

    Options:
      --dist-git-branch TEXT  Comma separated list of target branches in dist-git
                              to release into. (defaults to all branches)
      --dist-git-path TEXT    Path to dist-git repo to work in. Otherwise clone
                              the repo in a temporary directory.
      --force-new-sources     Upload the new sources also when the archive is
                              already in the lookaside cache.
      --pr / --no-pr          Create a pull request to downstream repository or
                              push directly. If not set, defaults to value set in
                              configuration.
      -f, --force             Don't discard changes in the git repo by default,
                              unless this is set.
      -b, --resolve-bug TEXT  Bug(s) that are resolved with the update, e.g.
                              rhbz#123 (multiple can be specified)
      --sync-acls             Sync ACLs between dist-git repo and the fork, is
                              considered only with --pr option.
      -p, --package TEXT      Package to sync downstream, if more than one
                              available, like in a monorepo configuration. Use it
                              multiple times to select multiple packages.Defaults
                              to all the packages listed inside the config.
      -h, --help              Show this message and exit.
