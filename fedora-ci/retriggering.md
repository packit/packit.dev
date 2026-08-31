---
title: Retriggering
sidebar_position: 2
---

You can retrigger CI jobs in dist-git pull requests by posting comments that include the appropriate `/packit-ci` commands, as outlined below.

## How CI jobs relate to each other

Fedora CI runs in two stages:

1. **Scratch build** — a Koji scratch build is created from the pull request.
2. **Tests** — once the scratch build succeeds, all configured tests (installability, rpmlint, rpminspect, custom TMT plans) are automatically triggered.

Because tests depend on a successful scratch build, **retriggering a scratch build will also cause tests to re-run** once the new build succeeds. If you only need to re-run the tests (for example, because a test failed due to a transient infrastructure issue but the scratch build was fine), you can retrigger just the tests without rebuilding.

## Help

Packit is able to provide a help message summarizing all available commands and options:

    /packit-ci help

## Restarting all CI jobs

To restart the entire CI pipeline from the beginning, retrigger the [scratch build](#scratch-builds) — tests will automatically follow once it succeeds. There is no need to separately retrigger the tests.

## Scratch builds

To retrigger a scratch build, add the following comment to the pull request:

```
/packit-ci scratch-build
```

Once the scratch build succeeds, all configured tests will be automatically triggered.

Only packagers can retrigger scratch builds.

## Tests

To retrigger all tests without rebuilding (using the existing successful scratch build), add the following comment to the pull request:

```
/packit-ci test
```

To retrigger a specific test, you can add the test identifier to the command:

```
/packit-ci test installability
```

Currently supported identifiers are:

- `installability` - represents the [installability](/fedora-ci/jobs#installability) test
- `rpmlint` - represents the [rpmlint](/fedora-ci/jobs#rpmlint) test
- `rpminspect` - represents the [rpminspect](/fedora-ci/jobs#rpminspect) test
- `custom` - represents [custom TMT test plans](/fedora-ci/jobs#custom-test-plans)

Only packagers can retrigger tests.

## Check target

By default, when (re)triggering jobs in `rawhide` PRs of ELN packages, jobs are run for both the `eln` and `rawhide` targets when no dedicated `eln` branch exists. It is possible to specify which jobs to retrigger with an additional keyword argument `--target` like so:

```
/packit-ci test --target eln
/packit-ci test rpminspect --target rawhide
/packit-ci scratch-build --target eln
```
