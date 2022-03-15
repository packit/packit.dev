---
title: init
disableToc: false
weight: 3
---

# `packit init`

Initiate a repository to start using packit. By default this command adds
`.packit.yaml` config file to the git repository in the current working
directory.  
If a spec file is found in the git repository, `init` will set
[specfile_path](/docs/configuration/#specfile_path) to point to it in `.packit.yaml`.
Otherwise, `specfile_path` is set to `<the name of the repository>.spec`.

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
