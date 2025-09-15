---
title: "Packit's pre-commit hooks"
date: 2023-05-16T11:00:00
authors: jpopelka
tags:
  - workflow
---

[pre-commit](https://pre-commit.com) is a wonderful tool that saves you
a lot of time by automatically checking your changes before you
commit and/or push them out.

<!--truncate-->

For example, in our [packit repo](https://github.com/packit/packit/blob/main/.pre-commit-config.yaml)
we run various hooks upon each commit:

- [Black (Python code formatter)](https://github.com/psf/black),
- [Prettier (code formatter)](https://github.com/prettier/prettier),
- [Flake8 (Python source code checker)](https://pypi.org/project/flake8),
- [Mypy (static type checker for Python)](https://github.com/python/mypy),
- and [several other pre-commit hooks](https://github.com/pre-commit/pre-commit-hooks).

## Our pre-commit hooks

[We also have a few hooks](https://github.com/packit/pre-commit-hooks)
which we've created and which you might find useful as well.

### check-rebase

We in Packit love linear git history.
This hook checks whether your branch is up-to-date with the upstream,
and we use it to know when it's time to rebase changes before we push them.

To try, add this to your `.pre-commit-config.yaml`

```yaml
- repo: https://github.com/packit/pre-commit-hooks
  rev: v1.2.0
  hooks:
    - id: check-rebase
      args: [upstream_url]
```

### validate-config

Packit uses a [YAML configuration file](https://packit.dev/docs/configuration)
in an upstream repository.
We have a [packit config validate](https://packit.dev/docs/cli/config/validate) command
to check it, but it's easy to forget (to run it) and notice a typo after you
committed and pushed the changes and waited for some time for Packit to tell you
that in a PR.

It's much faster to catch the problem before committing and/or pushing the changes.

#### validate-config-in-container

This hook runs (only if there's been a change in the `.packit.yaml`)
`packit` in a container (from [our image](https://quay.io/repository/packit/packit)),
mounts your sources inside and runs the `packit config validate`.

```yaml
- repo: https://github.com/packit/pre-commit-hooks
  rev: v1.2.0
  hooks:
    - id: validate-config-in-container
```

It requires docker/podman, which can be a problem for example in a
[CI](https://github.com/pre-commit-ci/issues/issues/11).

#### validate-config

Another option is a hook which runs the `packit` binary directly installed
on the machine. If there's no `packit`, the hook passes to not break
for example your CI where `packit` is most likely not installed.

```yaml
- repo: https://github.com/packit/pre-commit-hooks
  rev: v1.2.0
  hooks:
    - id: validate-config
```

##### But why the hook doesn't install `packit` itself?

Right, typically, when you run a pre-commit hook for the first time,
it installs everything it needs.
Like in case of Python, pre-commit `pip` installs all the dependencies.

The problem in our case is that `packit` has a lot of dependencies and
some of them (if missing) are compiled from source when you try to
[pip install packit](https://packit.dev/docs/cli/#from-pypi).
That needs `gcc` and additional `devel` packages
to be installed on the machine prior to running the hook for the first time.
That would make the hook usage very user unfriendly, leaving aside that
sometimes (in a CI) you don't have access to the machine to install them
prior to running the hooks.
