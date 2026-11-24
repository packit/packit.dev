---
title: Week 47 in Packit
date: 2026-11-24
authors: akucerov
tags:
  - 2026-November
  - 2026
  - November
---

## Week 47 (November 18th – November 24th)

- Two environment variables `PACKIT_PACKAGE_KEY` and `PACKIT_COPR_CHROOT` have been added for upstream test jobs. `PACKIT_PACKAGE_KEY` represents the `package` currently being evaluated in the `.packit.yaml` config file's `packages`. `PACKIT_COPR_CHROOT` represents the Copr chroot that is currently being tested. ([packit-service#3219](https://github.com/packit/packit-service/pull/3219))
- We have fixed the submission of Copr dist-git builds from forks. The previous implementation led to the incorrect project being cloned for the build (the original repo and not the fork). ([packit-service#3224](https://github.com/packit/packit-service/pull/3224))
