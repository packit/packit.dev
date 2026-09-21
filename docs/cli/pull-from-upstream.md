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
* Packit config file placed in the dist-git repository.
* Pagure API tokens for Fedora (or CentOS Stream) Dist-git.
* Valid Fedora (or CentOS Stream) Kerberos ticket.
* If `upstream_project_url` is configured in Packit config:
  * Upstream project is expected to be a git repository on GitHub/GitLab.
  * Upstream release (git tag) where version in spec file is equivalent to
    the name of the git tag (or `upstream_tag_template` is configured).


## Dry-run mode

You can use `--dry-run` to test the update process locally without pushing to Fedora infrastructure:

```
$ cd /path/to/dist-git/repo
$ packit pull-from-upstream --dry-run --dist-git-branch f42
```

In dry-run mode, packit will:
- Clone or fetch upstream repository
- Download source archives locally
- Update the `sources` file (using `fedpkg new-sources --offline`)
- Sync files from upstream and generate patches
- Update the spec file
- Create local commits in dist-git

But it will **skip**:
- Uploading archives to lookaside cache (only updates `sources` file)
- Pushing commits to remote
- Creating pull requests

This allows you to:
- Test the update locally before pushing to Fedora
- Perform local builds (e.g., `fedpkg local` or `rpmbuild`) to verify the changes
- Inspect the dist-git changes before they go live


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
      -b, --resolve-bug TEXT  Bug(s) that are resolved with the update, e.g.,
                              rhbz#123 (multiple can be specified)
      --sync-acls             Sync ACLs between dist-git repo and the fork, is
                              considered only with --pr option.
      -p, --package TEXT      Package to sync downstream, if more than one
                              available, like in a monorepo configuration. Use it
                              multiple times to select multiple packages.Defaults
                              to all the packages listed inside the config.
      --dry-run               Prepare dist-git repository locally without pushing
                              to remote or uploading to lookaside cache.
      -h, --help              Show this message and exit.
