---
title: init
sidebar_position: 3
---

# `packit init`

Initiate a repository to start using packit. By default this command adds
`.packit.yaml` config file to the git repository in the current working
directory.

If a `.pre-commit-config.yaml` file is found at the root of the git repository, `init` will add a pre-commit hook, which automatically runs `packit config validate` to check the validity of `.packit.yaml` upon pre-commit. Before adding this hook, `init` also checks for the presence of a `.git` repo. This behavior can be disabled using the `--without-precommit` flag.

In case `.pre-commit-config.yaml` is not found at the root of the repository, this behavior is skipped and can be forced using the `--force-precommit` flag. Please note that the
two listed flags `--without-precommit` and `--force-precommit` are mutually exclusive.

If a spec file is found in the git repository, `init` will set
[specfile_path](/docs/configuration/#specfile_path) to point to it in `.packit.yaml`.
Otherwise, `specfile_path` is set to `<the name of the repository>.spec`.

See [`source-git init`](/docs/cli/source-git/init) if you want to
initialize a [source-git repo](/source-git).

## Help

    Usage: packit init [OPTIONS] [PATH_OR_URL]

      Create the initial Packit configuration in a repository

      See 'packit source-git init', if you want to initialize a repository as a
      source-git repo.

    Options:
      --force-precommit    Automatically create an empty pre-commit configuration file if missing.
      --without-precommit  Skip adding pre-commit hook to pre-commit configuration file.
      -f, --force          Reset config to default if already exists.
      -h, --help           Show this message and exit.
