---
title: Retriggering
sidebar_position: 2
---

You can retrigger CI jobs in dist-git pull requests by posting comments that include the appropriate `/packit-ci` commands, as outlined below.

## Help

Packit is able to provide a help message summarizing all available commands and options:

    /packit-ci help

## Scratch builds

To retrigger a scratch build, add the following comment to the pull request:

```
/packit-ci scratch-build
```

Only packagers can retrigger scratch builds.

## Tests

To retrigger all tests, add the following comment to the pull request:

```
/packit-ci test
```

To retrigger a specific test, you can add the test identifier to the command:

```
/packit-ci test installability
```

Currently supported identifiers are:

- `installability` - represents the [Installability](/fedora-ci/jobs#installability) test
- `rpmlint` - represents the [rpmlint](/fedora-ci/jobs#rpmlint) test
- `rpminspect` - represents the [rpminspect](/fedora-ci/jobs#rpminspect) test
- `custom` - represents [Custom TMT test plans](/fedora-ci/jobs#custom-test-plans)

Only packagers can retrigger tests.
