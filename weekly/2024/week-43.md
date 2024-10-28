---
title: Week 43 in Packit
date: 2024-10-28
authors: mmassari
tags:
  - 2024-October
  - 2024
  - October
---

## Week 43 (October 22nd – October 28th)

- We have added support for retriggering jobs that are configured for `commit` and `release` trigger. Retriggering can be done via commit comments on the relevant commit, using the usual comments, such as `/packit build` or `/packit test`, but the branch or tag need to be specified like this (without the arguments, we will default to `commit` trigger for the default branch of the repository):

  ```
  /packit build --commit <branch-name>
  ```

  or

  ```
  /packit build --release <tag-name>
  ```

  ([packit-service#2589](https://github.com/packit/packit-service/pull/2589))

- There is a new method for getting a single commit comment, supporting also retrieval and adding reactions in GitHub. ([ogr#865](https://github.com/packit/ogr/pull/865))
