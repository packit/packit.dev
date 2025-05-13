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

### Custom test plans

Custom [TMT](https://tmt.readthedocs.io/) test plans in [Testing Farm](https://testing-farm.io)
run with a successful scratch build. This requires TMT metadata (`.fmf/version` presence used as an indicator)
in the dist-git repository and at least one [test plan](https://tmt.readthedocs.io/en/stable/spec/plans.html)
in `plans`.
