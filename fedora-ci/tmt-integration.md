---
title: TMT Integration
sidebar_position: 5
---

When running tests in Fedora CI, Packit automatically provides TMT context dimensions and environment variables that you can use in your test plans to adjust behavior based on the target branch, distribution, or other factors.

## TMT Context Dimensions

The following TMT context dimensions are automatically set by Packit for for rpminspect, rpmlint, and custom Fedora CI test jobs:

| Context           | Description                        | Example Values                                 |
| ----------------- | ---------------------------------- | ---------------------------------------------- |
| `arch`            | Processor architecture             | `x86_64`                                       |
| `distro`          | Distribution/compose being tested  | `centos-stream-9`, `centos-stream-10`          |
| `dist-git-branch` | Target branch of the dist-git PR   | `rawhide`, `f41`, `f40`, `epel-9`, `epel-10.1` |
| `initiator`       | Who triggered the test             | `fedora-ci`                                    |
| `trigger`         | Event type that triggered the test | `commit`                                       |

:::tip

You can differentiate between Fedora CI and Packit upstream test jobs with the `initiator` context dimension (`packit` for upstream Packit).

:::

## Environment Variables

### KOJI_TASK_ID

The Koji task ID for the scratch build created for this dist-git PR (e.g., `123014869`).

## See Also

- [TMT Context Documentation](https://tmt.readthedocs.io/en/stable/spec/context.html)
- [Testing Farm Documentation](https://docs.testing-farm.io/)
