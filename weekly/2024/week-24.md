---
title: Week 24 in Packit
date: 2024-06-18
authors: flachman
tags:
  - 2024-June
  - 2024
  - June
---

## Week 24 (June 11th – June 17th)

- We have fixed a bug that caused inconsistency between the promised environment variables (from the docs) and the environment that has been actually provided. Now you should have access to `PACKIT_UPSTREAM_REPO` and `PACKIT_DOWNSTREAM_REPO` (in case of `propose_downstream` and `pull_from_upstream` jobs), in the `post-upstream-clone` action. ([packit#2327](https://github.com/packit/packit/pull/2327))
