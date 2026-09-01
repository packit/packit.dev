---
title: Jobs run in CI
sidebar_position: 1
---

## Scratch builds

Scratch builds in [Koji](https://koji.fedoraproject.org/koji/) built from SCM.

## Tests

Each of the following tests is run in [Testing Farm](https://testing-farm.io)
automatically with a successful scratch build.

### installability

[installability test](https://github.com/fedora-ci/installability-pipeline),
which checks that the built RPMs/SRPMs install cleanly, together with their dependencies.

### rpmlint

[rpmlint test](https://github.com/packit/tmt-plans/tree/main/plans/rpmlint), which is
based on [rpmlint](https://github.com/rpm-software-management/rpmlint).
Lints the built RPM/SRPM packages against Fedora packaging guidelines.

### rpminspect

[rpminspect test](https://github.com/fedora-ci/rpminspect-pipeline), which runs
[rpminspect](https://github.com/rpminspect/rpminspect) on the built RPM/SRPM packages.

### rmdepcheck

[rmdepcheck test](https://forge.fedoraproject.org/ci/shared-tests/src/branch/main/rmdepcheck),
which performs an RPM dependency check.

### license-validate

[license-validate test](https://forge.fedoraproject.org/ci/shared-tests/src/branch/main/license-validate),
which validates that the package's license defined in the .spec file
is [approved](https://docs.fedoraproject.org/en-US/legal/license-approval/#Software_License_List).

### custom test plans

Custom [TMT](https://tmt.readthedocs.io/) test plans, which require TMT metadata (`.fmf/version` presence used as an indicator)
in the dist-git repository and at least one [test plan](https://tmt.readthedocs.io/en/stable/spec/plans.html)
in `plans`.

For information about available TMT contexts and environment variables you can use
in your test plans, see [TMT Integration](/fedora-ci/tmt-integration).
