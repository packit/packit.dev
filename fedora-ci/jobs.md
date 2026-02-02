---
title: Jobs run in CI
sidebar_position: 1
---

## Scratch builds

Scratch builds in [Koji](https://koji.fedoraproject.org/koji/) built from SCM.

## Tests

### Installability

[Installability test](https://github.com/fedora-ci/installability-pipeline)
in [Testing Farm](https://testing-farm.io) run with a successful scratch build.

### rpmlint

[rpmlint](https://github.com/rpm-software-management/rpmlint)
[test](https://github.com/packit/tmt-plans/tree/main/plans/rpmlint)
in [Testing Farm](https://testing-farm.io) run with a successful scratch build.

### rpminspect

[rpminspect](https://github.com/rpminspect/rpminspect)
[test](https://github.com/fedora-ci/rpminspect-pipeline)
in [Testing Farm](https://testing-farm.io) run with a successful scratch build.

### Custom test plans

Custom [TMT](https://tmt.readthedocs.io/) test plans in [Testing Farm](https://testing-farm.io)
run with a successful scratch build. This requires TMT metadata (`.fmf/version` presence used as an indicator)
in the dist-git repository and at least one [test plan](https://tmt.readthedocs.io/en/stable/spec/plans.html)
in `plans`.

For information about available TMT contexts and environment variables you can use
in your test plans, see [TMT Integration](/fedora-ci/tmt-integration).
