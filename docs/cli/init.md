---
title: init
sidebar_position: 3
---

# `packit init`

Initiate a repository to start using packit. By default this command adds
`.packit.yaml` config file to the git repository in the current working
directory.  
If a spec file is found in the git repository, `init` will set
[specfile_path](/docs/configuration/#specfile_path) to point to it in `.packit.yaml`.
Otherwise, `specfile_path` is set to `<the name of the repository>.spec`.

See [`source-git init`](/docs/cli/source-git/init) if you want to
initialize a [source-git repo](/source-git).

## Help


