---
title: Releasing multiple packages in a single update
sidebar_position: 7
---
# Releasing multiple packages in a single update

It is possible to release multiple packages in a single Bodhi update using Koji sidetags.
Packit now supports automating that. Let's take a look on how to configure it.

## Simplest scenario

Let's have two packages, `foo` and `bar`, that we want to release together in one update.
The packages build independently of each other.

Here are the relevant parts from Packit config of `foo`:

```yaml
downstream_package_name: foo

jobs:
  - job: koji_build
    trigger: commit
    sidetag_group: foo-bar-releases
    dependents:
      - bar
    dist_git_branches:
      - fedora-all
```

Here are the relevant parts from Packit config of `bar`:

```yaml
downstream_package_name: bar

jobs:
  - job: koji_build
    trigger: commit
    sidetag_group: foo-bar-releases
    dist_git_branches:
      - fedora-all

  - job: bodhi_update
    trigger: koji_build
    sidetag_group: foo-bar-releases
    dependencies:
      - foo
    dist_git_branches:
      - fedora-all
```

Note that there is only one `bodhi_update` job for both packages, we chose to configure it in `bar`.
For that reason we have to reference `bar` from `dependents` of the `koji_build` job in `foo`,
and, vice versa, reference `foo` from `dependencies` of the `bodhi_update` job in `bar`.
The `sidetag_group` option, having the same value in all jobs, defines the sidetags Koji builds
will be tagged into and Bodhi update will be created from. It doesn't matter which package
is built first, only after builds of both of them are tagged into the sidetag a Bodhi update
is created and the sidetag removed.

## Ensuring build order

Let's have the same two packages as before, but this time `bar` depends on `foo`, meaning that
a build of `bar` can fail if it is built before `foo`. So we have to make sure that `foo` is always
built first.

Here are the relevant parts from Packit config of `foo`:

```yaml
downstream_package_name: foo

jobs:
  - job: koji_build
    trigger: commit
    sidetag_group: foo-bar-releases
    dependents:
      - bar
    dist_git_branches:
      - fedora-all
```

Here are the relevant parts from Packit config of `bar`:

```yaml
downstream_package_name: bar

jobs:
  - job: koji_build
    trigger: commit | koji_build
    sidetag_group: foo-bar-releases
    dependencies:
      - foo
    dist_git_branches:
      - fedora-all

  - job: bodhi_update
    trigger: koji_build
    sidetag_group: foo-bar-releases
    dependencies:
      - foo
    dist_git_branches:
      - fedora-all
```

Note that config of `foo` hasn't changed at all. The `koji_build` job in `bar` however now has
two triggers - it will be triggered also when a build of `foo` lands in the common sidetag.
It also has `foo` in `dependencies`, so if it is triggred via commit while `foo` is not yet
in the sidetag, it will be skipped. As before, once builds of both packages are in the sidetag,
a Bodhi update is created and the sidetag removed.

## Skipping release of some packages

What if we only want to release `bar` and not `foo`? We can tag the latest stable build of `foo`
to the common sidetag to satisfy the dependency and trigger the jobs in `bar`. We can do that
by commenting `/packit koji-tag --all-branches` in any dist-git pull request of `foo`. By omitting
the `--all-branches` argument we can make the command apply only to the target branch
of the pull request.

## Full example

Here is a complete example with three packages, `foo`, `bar` and `baz`, where `baz` depends
on `foo` and `bar` (in other words, `baz` has to be built last, build order of `foo` and `bar`
doesn't matter).

Here is Packit config of `foo`:

```yaml
downstream_package_name: foo

jobs:
  - job: pull_from_upstream
    trigger: release
    dist_git_branches:
      - fedora-all

  - job: koji_build
    trigger: commit
    sidetag_group: foo-bar-baz-releases
    dependents:
      - baz
    dist_git_branches:
      - fedora-all
```

Here is Packit config of `bar`:

```yaml
downstream_package_name: bar

jobs:
  - job: pull_from_upstream
    trigger: release
    dist_git_branches:
      - fedora-all

  - job: koji_build
    trigger: commit
    sidetag_group: foo-bar-baz-releases
    dependents:
      - baz
    dist_git_branches:
      - fedora-all
```

Here is Packit config of `baz`:

```yaml
downstream_package_name: baz

jobs:
  - job: pull_from_upstream
    trigger: release
    dist_git_branches:
      - fedora-all

  - job: koji_build
    trigger: commit | koji_build
    sidetag_group: foo-bar-baz-releases
    dependencies:
      - foo
      - bar
    dist_git_branches:
      - fedora-all

  - job: bodhi_update
    trigger: koji_build
    sidetag_group: foo-bar-baz-releases
    dependencies:
      - foo
      - bar
    dist_git_branches:
      - fedora-all
```

:::info `downstream_package_name`

The `downstream_package_name` option in the configuration examples is there for the sake
of explicitness and is completely optional.

:::
