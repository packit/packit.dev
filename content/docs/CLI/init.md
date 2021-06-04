---
title: "init"
draft: false
disableToc: false
weight: 3
---

# init

Initiate a repository to start using packit. By default this command adds
`.packit.yaml` config file to the git repository in the current working
directory.

See [`source-git init`]({{< ref "docs/cli/source-git/init" >}}) if you want to
initialize a [source-git repo]({{< ref "/docs/source-git" >}}).

## Help

    $ packit init --help
    Usage: packit init [OPTIONS] [PATH_OR_URL]

      Create the initial Packit configuration in a repository

      See 'packit source-git init', if you want to initialize a repository as a
      source-git repo.

    Options:
      -f, --force  Reset config to default if already exists.
      -h, --help   Show this message and exit.
