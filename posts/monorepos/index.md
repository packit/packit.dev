---
title: Introducing monorepository support
date: 2023-07-04T09:20:06+02:00
weight: 89
authors: lbarczio
---

We are very happy to announce a major enhancement to Packit! We have now added support for
monorepositories, enabling the integration of upstream repositories containing multiple downstream packages.
If you have a repository in the monorepo format, Packit can now help you automate the integration to downstream
distributions both from CLI and as a service.

## Configuration

Let's take a look at how a monorepository should be configured so that Packit can automate the process!

The main addition to the Packit configuration file in the context of monorepositories are the keys
[`packages`](/docs/configuration#packages) and [`paths`](/docs/configuration#paths).

`packages` holds a dictionary of `{package_name: package_configuration}` where package configuration can contain any keys
that were previously used as top-level keys for the standard (single) package configuration. The `paths` can be defined
in each `package_configuration` and should hold a list of paths that should be considered for the particular package.

The `packages` section in the configuration can then look like this:

```yaml
packages:
  python-copr:
    downstream_package_name: python-copr
    upstream_package_name: copr
    paths:
      - ./python
    specfile_path: python-copr.spec
    files_to_sync:
      - python-copr.spec

  copr-cli:
    downstream_package_name: copr-cli
    upstream_package_name: copr-cli
    paths:
      - ./cli
    specfile_path: copr-cli.spec
    files_to_sync:
      - copr-cli.spec

  copr-backend:
    downstream_package_name: copr-backend
    upstream_package_name: copr-backend
    paths:
      - ./backend
    specfile_path: copr-backend.spec
    files_to_sync:
      - copr-backend.spec
```

That was the configuration of the packages and their locations in general, but how should these values then be utilised?

### Packit Service support

For the Packit Service jobs, there is one more addition to the configuration: the [`packages`](/docs/configuration/jobs#packages) key again,
that can be used in each job and tells which packages should be considered for that particular job.

As a result, the repository in monorepo format could have jobs in the Packit configuration configured like this:

```yaml
jobs:
  - job: copr_build
    packages:
      - copr-backend
      - copr-cli
    trigger: pull_request
    targets:
      - fedora-all-x86_64
    preserve_project: True

  - job: copr_build
    packages:
      - python-copr
    trigger: pull_request
    targets:
      - fedora-all-x86_64
      - fedora-all-aarch64
    manual_trigger: True
```

And the commit statuses in GitHub/GitLab will also include the name of the package:
![Monorepo statuses](img/statuses.png)

### CLI support

As for the CLI, you can now for each command specify the `-p` or `--packages` argument followed by the package name
and the scope of the command will take into consideration only the specified packages:

    packit build in-mock --package my-package-1 --package my-package-2

## Wrapping up

If you have a repository in the monorepo format, give it a try now and share your feedback with us!

Going forward, we are about to implement the [possibility of defining dependencies between jobs](https://github.com/packit/packit-service/issues/2105),
allowing for even greater flexibility and control of monorepository jobs.

We are also happy to help with any contributions from the community to help us expand and refine the support with additional functionalities,
such as [being able to define paths the service should react to](https://github.com/packit/packit-service/issues/2006)
or [templating features](https://github.com/packit/packit/issues/1925).
